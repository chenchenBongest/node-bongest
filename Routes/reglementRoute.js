const { Reglement, getReglementsByDocuments, getNumeroAutomatique, deleteLiltrageOfReglementBonLivraison, setLiltrageReglementBonLivraison, deleteLiltrageOfReglementBonRetourClient, setLiltrageReglementBonRetourClient, deleteLiltrageOfReglementBonAchat, setLiltrageReglementBonAchat, deleteLiltrageOfReglementBonRetourFournisseur, setLiltrageReglementBonRetourFournisseur } = require('../Models/reglementModel')

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')
const { Client } = require('../Models/clientModel')
const { Fournisseur } = require('../Models/fournisseurModel')
const { ModeReglement } = require('../Models/modeReglementModel')
var ObjectId = require('mongodb').ObjectID;


const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel')
const { BonRetourFournisseur } = require('../Models/bonRetourFournisseurModel')
const { BonRetourClient } = require('../Models/bonRetourClientModel')
const { BonLivraison } = require('../Models/bonLivraisonModel')
const { Liltrage } = require('../Models/liltrageModel');
const { BonAchat } = require('../Models/bonAchatModel');
const { BonReception } = require('../Models/bonReceptionModel');
const { BonLivraisonArticle } = require('../Models/bonLivraisonArticleModel');
const { SituationReglement } = require('../Models/situationReglementModel');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

var upload = multer({ storage: storage })

/**
 * @swagger
 * components:
 *   schemas:
 *     reglement:
 *       type: object
 *       required:
 *         - libelle
 *       properties:
 *         client:
 *           type: string
 *         modeReglement:
 *           type: string
 *         tresorerie:
 *           type: string
 *         montant:
 *           type: number
 *         dateReglement:
 *           type: date
 *         numCheque:
 *           type: number
 *         dateEcheance:
 *           type: date
 *         notes:
 *           type: string
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Reglements
 *   description: The Reglements managing API
 */


/**
 * @swagger
 * paths:
 *   /reglements/upload:
 *     post:
 *       summary: upload image
 *       tags: [Reglements]
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 image:
 *                   type: file
 *       responses:
 *         200:
 *           description: The image was successfully saved
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     pathImage:
 *                       type: string
 *         500:
 *           description: Some server error
 */
router.post('/upload', upload.array('myFiles'), async (req, res) => {
  const files = req.files
  let arr = [];
  files.forEach(element => {
    arr.push(element.path)
  })
  return res.send(arr)
})

/**
 * @swagger
 * /reglements/newReglement:
 *   post:
 *     summary: Returns the list of all the Reglements
 *     tags: [Reglements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                client:
 *                  type: string
 *                fournisseur:
 *                  type: string
 *                modeReglement:
 *                  type: string
 *                tresorerie:
 *                  type: string
 *                montant:
 *                  type: number
 *                dateReglement:
 *                  type: date
 *                numCheque:
 *                  type: number
 *                dateEcheance:
 *                  type: date
 *                notes:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the reglements
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 resultat:
 *                   type: object
 *                   properties:
 *                    id:
 *                      type: string
 *                    client:
 *                      type: string
 *                    fournisseur:
 *                      type: string
 *                    modeReglement:
 *                      type: string
 *                    tresorerie:
 *                      type: string
 *                    montant:
 *                      type: number
 *                    dateReglement:
 *                      type: date
 *                    numCheque:
 *                      type: number
 *                    dateEcheance:
 *                      type: date
 *                    notes:
 *                      type: string
 *
 */

async function updateSoldeClient(idClient, solde){
  var client = await Client.findByIdAndUpdate(idClient, {credit:solde})
}


router.post('/newReglement', async (req, res) => {

  //const {error}=validateReglement(req.body)
  //if(error) return res.status(400).send({status:false,message:error.details[0].message})

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  var numeroAutomatique = await getNumeroAutomatique(ObjectId(req.body.societe), req.body.typeReglement)

  req.body.numero = numeroAutomatique.numero
  req.body.num = numeroAutomatique.num

  const reglement = new Reglement(req.body);
  const result = await reglement.save()

  if (req.body.typeReglement == "bonLivraison") {
    const client = await Client.findById(req.body.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: req.body.client }, { credit: Number(client.credit) + Number(req.body.montant) })
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonLivraison(req.body.bonLivraisons, result.id)
    }
    await updateSoldeClient(client.id, Number(client.credit + req.body.montant))

  } else if (req.body.typeReglement == "bonRetourClient") {
    const client = await Client.findById(req.body.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: req.body.client }, { credit: Number(client.credit) - Number(req.body.montant) })
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonRetourClient(req.body.bonLivraisons, result.id)
    }
    await updateSoldeClient(client.id, Number(client.credit - req.body.montant))

  } else if (req.body.typeReglement == "bonAchat") {
    const fournisseur = await Fournisseur.findById(req.body.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: req.body.client }, { credit: Number(fournisseur.credit) + Number(req.body.montant) })
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonAchat(req.body.bonLivraisons, result.id)
    }
  } else {
    const fournisseur = await Fournisseur.findById(req.body.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: req.body.client }, { credit: Number(fournisseur.credit) - Number(req.body.montant) })
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonRetourFournisseur(req.body.bonLivraisons, result.id)
    }
  }

  return res.send({ status: true, resultat: result })

})


/**
 * @swagger
 * /reglements/modifierReglement/{id}:
 *   post:
 *     summary: Update the reglement by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reglement id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                client:
 *                  type: string
 *                modeReglement:
 *                  type: string
 *                tresorerie:
 *                  type: string
 *                montant:
 *                  type: number
 *                dateReglement:
 *                  type: date
 *                numCheque:
 *                  type: number
 *                dateEcheance:
 *                  type: date
 *                notes:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the reglements
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 resultat:
 *                   type: object
 *                   properties:
 *                     client:
 *                       type: string
 *                     modeReglement:
 *                       type: string
 *                     tresorerie:
 *                       type: string
 *                     montant:
 *                       type: number
 *                     dateReglement:
 *                       type: date
 *                     numCheque:
 *                       type: number
 *                     dateEcheance:
 *                       type: date
 *                     notes:
 *                       type: string
 *
 *
 */

router.post('/modifierReglement/:id', async (req, res) => {

  // const {error}=validateReglement(req.body)
  //if(error) return res.status(400).send({status:false,message:error.details[0].message})

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const reglement = await Reglement.findById(req.params.id)

  if (!reglement) return res.status(401).send({ status: false })

  const result = await Reglement.findOneAndUpdate({ _id: req.params.id }, req.body)

  if (req.body.typeReglement == "bonLivraison") {
    const client = await Client.findById(req.body.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: req.body.client }, { credit: Number(client.credit) - Number(reglement.montant) + Number(req.body.montant) })
    await deleteLiltrageOfReglementBonLivraison(req.params.id)
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonLivraison(req.body.bonLivraisons, req.params.id)
    }
    
    await updateSoldeClient(client.id, Number(client.credit + req.body.montant))
    var oldClient = await Client.findById(reglement.client) 
    await updateSoldeClient(oldClient.id, Number(oldClient.credit - reglement.montant))

  } else if (req.body.typeReglement == "bonRetourClient") {
    const client = await Client.findById(req.body.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: req.body.client }, { credit: Number(client.credit) - Number(reglement.montant) + Number(req.body.montant) })
    await deleteLiltrageOfReglementBonRetourClient(req.params.id)
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonRetourClient(req.body.bonLivraisons, req.params.id)
    }

    await updateSoldeClient(client.id, Number(client.credit - req.body.montant))
    var oldClient = await Client.findById(reglement.client) 
    await updateSoldeClient(oldClient.id, Number(oldClient.credit + reglement.montant))

  } else if (req.body.typeReglement == "bonAchat") {
    const fournisseur = await Fournisseur.findById(req.body.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: req.body.client }, { credit: Number(fournisseur.credit) - Number(reglement.montant) + Number(req.body.montant) })
    await deleteLiltrageOfReglementBonAchat(req.params.id)
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonAchat(req.body.bonLivraisons, req.params.id)
    }
  } else if (req.body.typeReglement == "bonRetourFournisseur") {
    const fournisseur = await Fournisseur.findById(req.body.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: req.body.client }, { credit: Number(fournisseur.credit) - Number(reglement.montant) + Number(req.body.montant) })
    await deleteLiltrageOfReglementBonRetourFournisseur(req.params.id)
    if (req.body.bonLivraisons.length > 0) {
      await setLiltrageReglementBonRetourFournisseur(req.body.bonLivraisons, req.params.id)
    }
  }

  const reglement2 = await Reglement.findById(req.params.id)

  return res.send({ status: true, resultat: reglement2 })
})

/**
 * @swagger
 * /reglements/deleteReglement/{id}:
 *   post:
 *     summary: Remove the reglement by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reglement id
 *
 *     responses:
 *       200:
 *         description: The reglement was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The reglement was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteReglement/:id', async (req, res) => {

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const reglement = await Reglement.findById(req.params.id)

  if (!reglement) return res.status(401).send({ status: false })

  if (reglement.typeReglement == "bonLivraison") {

    const client = await Client.findById(reglement.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: client.id }, { credit: Number(client.credit) - Number(reglement.montant) })
    await deleteLiltrageOfReglementBonLivraison(req.params.id)
    
    await updateSoldeClient(client.id, Number(client.credit - reglement.montant))

  } else if (reglement.typeReglement == "bonRetourClient") {

    const client = await Client.findById(reglement.client)
    if (!client) return res.status(401).send({ status: false })
    const result2 = await Client.findOneAndUpdate({ _id: client.id }, { credit: Number(client.credit) - Number(reglement.montant) })
    await deleteLiltrageOfReglementBonRetourClient(req.params.id)
    
    await updateSoldeClient(client.id, Number(client.credit + reglement.montant))

  } else if (reglement.typeReglement == "bonAchat") {

    const fournisseur = await Fournisseur.findById(reglement.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: fournisseur.id }, { credit: Number(fournisseur.credit) - Number(reglement.montant) })
    await deleteLiltrageOfReglementBonAchat(req.params.id)

  } else {

    const fournisseur = await Fournisseur.findById(reglement.client)
    if (!fournisseur) return res.status(401).send({ status: false })
    const result2 = await Fournisseur.findOneAndUpdate({ _id: fournisseur.id }, { credit: Number(fournisseur.credit) - Number(reglement.montant) })
    await deleteLiltrageOfReglementBonRetourFournisseur(req.params.id)

  }

  if (await Reglement.findOneAndDelete({ _id: req.params.id })) {
    return res.send({ status: true })
  } else {
    return res.send({ status: false })
  }

})

router.post('/deleteLiltrageOfReglement/:id', async (req, res) => {

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  if (req.body.typeReglement == "bonLivraison") {
    await deleteLiltrageOfReglementBonLivraison(req.params.id)
  } else if (req.body.typeReglement == "bonRetourClient") {
    await deleteLiltrageOfReglementBonRetourClient(req.params.id)
  } else if (req.body.typeReglement == "bonAchat") {
    await deleteLiltrageOfReglementBonAchat(req.params.id)
  } else {
    await deleteLiltrageOfReglementBonRetourFournisseur(req.params.id)
  }

  var result = await Reglement.findById(req.params.id)

  const result2 = await Reglement.findOneAndUpdate({ _id: req.params.id }, { reste: result.montant })

  result = await Reglement.findById(req.params.id)

  return res.send({ status: true, result: result })

})


const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'itemsList',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator'
};


/**
 * @swagger
 * /reglements/listReglements:
 *   post:
 *     summary: Returns the list of all the reglements
 *     tags: [Reglements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                page:
 *                  type: number
 *                limit:
 *                  type: number
 *                search:
 *                  type: object
 *                orderBy:
 *                  type: object
 *     responses:
 *       200:
 *         description: The list of the reglements
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 request:
 *                   type: object
 *                   properties:
 *                      page:
 *                         type: number
 *                      limit:
 *                         type: number
 *                      search:
 *                         type: object
 *                      orderBy:
 *                         type: object
 *                 resultat:
 *                   type: object
 *                   properties:
 *                      total:
 *                         type: number
 *                      limit:
 *                         type: number
 *                      page:
 *                         type: number
 *                      pages:
 *                         type: number
 *                      docs:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                            id:
 *                              type: string
 *                            client:
 *                              type: string
 *                            ordre:
 *                              type: number
 *                            valeurRetiree:
 *                              type: number
 *                            tierNecessaire:
 *                              type: string
 *                            plan:
 *                              type: string
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 *
 *
 */
router.post('/listReglementsClient', async (req, res) => {
  var dateStart = new Date(req.body.dateStart)
  dateStart.setHours(0, 0, 0, 0);

  var dateEnd = new Date(req.body.dateEnd)
  dateEnd.setHours(23, 59, 59, 999);

  var societe = ObjectId(req.body.magasin)

  var sort = {}
  for (let key in req.body.orderBy) {
    if (Number(req.body.orderBy[key]) != 0) {
      sort[key] = req.body.orderBy[key]
    }
  }

  if (Object.keys(sort).length == 0) {
    sort = { createdAt: -1 }
  }

  var pipeline = []

  pipeline.push({ $match: { dateReglement: { $lte: dateEnd, $gte: dateStart }, societe: societe, typeReglement: req.body.typeReglement } })

  pipeline.push({
    $lookup: {
      from: 'modereglements',
      let: { "modeReglement": "$modeReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modeReglement"] },
            ]
          }
        }
      },
      ],
      as: "modereglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'situationReglements',
      let: { "situationReglement": "$situationReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$situationReglement"] },
            ]
          }
        }
      },
      ],
      as: "situationReglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'clients',
      let: { "client": { "$toObjectId": "$client" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$client"] },
            ]
          }
        }
      },
      ],
      as: "clients"
    }
  })

  pipeline.push({
    $set: {
      client: { $arrayElemAt: ["$clients.raisonSociale", 0] },
      modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },
      situationReglement: { $arrayElemAt: ["$situationReglements.libelle", 0] },

      montant: { $toString: "$montant" },
      numCheque: { $toString: "$numCheque" },
      reste: { $toString: "$reste" },

      dateReglement: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateReglement"
        }
      },

      dateEcheance: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateEcheance"
        }
      },
      id: "$_id"
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      client: 1,
      modeReglement: 1,
      tresorerie: 1,
      montant: 1,
      dateReglement: 1,
      numCheque: 1,
      dateEcheance: 1,
      situationReglement:1,
      notes: 1,
      reste: 1,
      numero: 1
    }
  })

  var search = req.body.search

  for (let key in search) {
    if (search[key] != "") {
      var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
      var word2 = search[key].toUpperCase()
      var word3 = search[key].toLowerCase()

      var objet1 = {}
      objet1[key] = { $regex: '.*' + word1 + '.*' }

      var objet2 = {}
      objet2[key] = { $regex: '.*' + word2 + '.*' }

      var objet3 = {}
      objet3[key] = { $regex: '.*' + word3 + '.*' }

      let objectMatch = { $or: [objet1, objet2, objet3] }

      let objectParent = { $match: objectMatch }
      pipeline.push(objectParent)
    }
  }


  var sommePipeline = []
  for (let key in pipeline) {
    sommePipeline.push(pipeline[key])
  }

  pipeline.push({
    $sort: sort
  })

  var skip = Number(req.body.page - 1) * Number(req.body.limit)

  pipeline.push({ $limit: skip + Number(req.body.limit) })

  pipeline.push({ $skip: skip })

  const articles = await Reglement.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Reglement.aggregate(sommePipeline)

  if (nbrTotal.length == 0) {
    nbrTotal = [{ total: 0 }]
  }

  const nbrTotalTrunc = Math.trunc(nbrTotal[0].total / req.body.limit)
  var pages = nbrTotal[0].total / req.body.limit

  if (pages > nbrTotalTrunc) {
    pages = nbrTotalTrunc + 1
  }

  const result = { docs: articles, pages: pages }


  return res.send({ status: true, resultat: result, request: req.body })

})

router.post('/listReglementsFournisseur', async (req, res) => {
  var dateStart = new Date(req.body.dateStart)
  dateStart.setHours(0, 0, 0, 0);

  var dateEnd = new Date(req.body.dateEnd)
  dateEnd.setHours(23, 59, 59, 999);

  var societe = ObjectId(req.body.magasin)

  var sort = {}
  for (let key in req.body.orderBy) {
    if (Number(req.body.orderBy[key]) != 0) {
      sort[key] = req.body.orderBy[key]
    }
  }

  if (Object.keys(sort).length == 0) {
    sort = { createdAt: -1 }
  }

  var pipeline = []

  pipeline.push({ $match: { dateReglement: { $lte: dateEnd, $gte: dateStart }, societe: societe, typeReglement: req.body.typeReglement } })

  pipeline.push({
    $lookup: {
      from: 'modereglements',
      let: { "modeReglement": "$modeReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modeReglement"] },
            ]
          }
        }
      },
      ],
      as: "modereglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'situationReglements',
      let: { "situationReglement": "$situationReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$situationReglement"] },
            ]
          }
        }
      },
      ],
      as: "situationReglements"
    }
  })
  pipeline.push({
    $lookup: {
      from: 'fournisseurs',
      let: { "fournisseur": { "$toObjectId": "$client" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$fournisseur"] },
            ]
          }
        }
      },
      ],
      as: "fournisseurs"
    }
  })

  pipeline.push({
    $set: {
      fournisseur: { $arrayElemAt: ["$fournisseurs.raisonSociale", 0] },
      modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },

      montant: { $toString: "$montant" },
      numCheque: { $toString: "$numCheque" },
      reste: { $toString: "$reste" },
      situationReglement: { $arrayElemAt: ["$situationReglements.libelle", 0] },

      dateReglement: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateReglement"
        }
      },

      dateEcheance: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateEcheance"
        }
      },
      id: "$_id"
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      fournisseur: 1,
      modeReglement: 1,
      tresorerie: 1,
      montant: 1,
      dateReglement: 1,
      situationReglement:1,
      numCheque: 1,
      dateEcheance: 1,
      notes: 1,
      reste: 1,
      numero: 1
    }
  })

  var search = req.body.search

  for (let key in search) {
    if (search[key] != "") {
      var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
      var word2 = search[key].toUpperCase()
      var word3 = search[key].toLowerCase()

      var objet1 = {}
      objet1[key] = { $regex: '.*' + word1 + '.*' }

      var objet2 = {}
      objet2[key] = { $regex: '.*' + word2 + '.*' }

      var objet3 = {}
      objet3[key] = { $regex: '.*' + word3 + '.*' }

      let objectMatch = { $or: [objet1, objet2, objet3] }

      let objectParent = { $match: objectMatch }
      pipeline.push(objectParent)
    }
  }


  var sommePipeline = []
  for (let key in pipeline) {
    sommePipeline.push(pipeline[key])
  }

  pipeline.push({
    $sort: sort
  })

  var skip = Number(req.body.page - 1) * Number(req.body.limit)

  pipeline.push({ $limit: skip + Number(req.body.limit) })

  pipeline.push({ $skip: skip })

  const articles = await Reglement.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Reglement.aggregate(sommePipeline)

  if (nbrTotal.length == 0) {
    nbrTotal = [{ total: 0 }]
  }

  const nbrTotalTrunc = Math.trunc(nbrTotal[0].total / req.body.limit)
  var pages = nbrTotal[0].total / req.body.limit

  if (pages > nbrTotalTrunc) {
    pages = nbrTotalTrunc + 1
  }

  const result = { docs: articles, pages: pages }


  return res.send({ status: true, resultat: result, request: req.body })

})


/**
 * @swagger
 * /reglements/listEcheances:
 *   post:
 *     summary: Returns the list of all the reglements
 *     tags: [Reglements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                page:
 *                  type: number
 *                limit:
 *                  type: number
 *                search:
 *                  type: object
 *                orderBy:
 *                  type: object
 *     responses:
 *       200:
 *         description: The list of the reglements
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 request:
 *                   type: object
 *                   properties:
 *                      page:
 *                         type: number
 *                      limit:
 *                         type: number
 *                      search:
 *                         type: object
 *                      orderBy:
 *                         type: object
 *                 resultat:
 *                   type: object
 *                   properties:
 *                      total:
 *                         type: number
 *                      limit:
 *                         type: number
 *                      page:
 *                         type: number
 *                      pages:
 *                         type: number
 *                      docs:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                            id:
 *                              type: string
 *                            client:
 *                              type: string
 *                            ordre:
 *                              type: number
 *                            valeurRetiree:
 *                              type: number
 *                            tierNecessaire:
 *                              type: string
 *                            plan:
 *                              type: string
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 *
 *
 */
router.post('/listEcheances', async (req, res) => {

  var dateStart = new Date(req.body.dateStart)
  var dateEnd = new Date(req.body.dateEnd)
  var societe = ObjectId(req.body.societe)

  var sort = {}
  for (let key in req.body.orderBy) {
    if (Number(req.body.orderBy[key]) != 0) {
      sort[key] = req.body.orderBy[key]
    }
  }

  if (Object.keys(sort).length == 0) {
    sort = { createdAt: -1 }
  }

  var pipeline = []

  pipeline.push({ $match: { numCheque: { $ne: "" }, dateEcheance: { $lte: dateEnd, $gte: dateStart }, societe: societe, typeReglement: req.body.typeReglement } })

  pipeline.push({
    $lookup: {
      from: 'modereglements',
      let: { "modeReglement": "$modeReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modeReglement"] },
            ]
          }
        }
      },
      ],
      as: "modereglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'situationReglements',
      let: { "situationReglement": "$situationReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$situationReglement"] },
            ]
          }
        }
      },
      ],
      as: "situationReglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'clients',
      let: { "client": { "$toObjectId": "$client" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$client"] },
            ]
          }
        }
      },
      ],
      as: "clients"
    }
  })


  pipeline.push({
    $set: {
      client: { $arrayElemAt: ["$clients.raisonSociale", 0] },
      modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },
      situationReglement: { $arrayElemAt: ["$situationReglements.libelle", 0] },

      montant: { $toString: "$montant" },
      numCheque: { $toString: "$numCheque" },
      reste: { $toString: "$reste" },

      dateReglement: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateReglement"
        }
      },

      dateEcheance: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateEcheance"
        }
      },
      id: "$_id"
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      client: 1,
      modeReglement: 1,
      tresorerie: 1,
      montant: 1,
      dateReglement: 1,
      situationReglement:1,
      numCheque: 1,
      dateEcheance: 1,
      notes: 1,
      reste: 1,
      numero: 1
    }
  })

  var search = req.body.search

  for (let key in search) {
    if (search[key] != "") {
      var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
      var word2 = search[key].toUpperCase()
      var word3 = search[key].toLowerCase()


      var objet1 = {}
      objet1[key] = { $regex: '.*' + word1 + '.*' }

      var objet2 = {}
      objet2[key] = { $regex: '.*' + word2 + '.*' }

      var objet3 = {}
      objet3[key] = { $regex: '.*' + word3 + '.*' }

      let objectMatch = { $or: [objet1, objet2, objet3] }

      let objectParent = { $match: objectMatch }
      pipeline.push(objectParent)
    }
  }


  var sommePipeline = []
  for (let key in pipeline) {
    sommePipeline.push(pipeline[key])
  }

  pipeline.push({
    $sort: sort
  })

  var skip = Number(req.body.page - 1) * Number(req.body.limit)

  pipeline.push({ $limit: skip + Number(req.body.limit) })

  pipeline.push({ $skip: skip })

  const articles = await Reglement.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Reglement.aggregate(sommePipeline)

  if (nbrTotal.length == 0) {
    nbrTotal = [{ total: 0 }]
  }

  const nbrTotalTrunc = Math.trunc(nbrTotal[0].total / req.body.limit)
  var pages = nbrTotal[0].total / req.body.limit

  if (pages > nbrTotalTrunc) {
    pages = nbrTotalTrunc + 1
  }

  const result = { docs: articles, pages: pages }


  return res.send({ status: true, resultat: result, request: req.body })

})


router.post('/listEcheancesFournisseur', async (req, res) => {

  var dateStart = new Date(req.body.dateStart)
  var dateEnd = new Date(req.body.dateEnd)
  var societe = ObjectId(req.body.societe)

  var sort = {}
  for (let key in req.body.orderBy) {
    if (Number(req.body.orderBy[key]) != 0) {
      sort[key] = req.body.orderBy[key]
    }
  }

  if (Object.keys(sort).length == 0) {
    sort = { createdAt: -1 }
  }

  var pipeline = []

  pipeline.push({ $match: { numCheque: { $ne: "" }, dateEcheance: { $lte: dateEnd, $gte: dateStart }, societe: societe, typeReglement: req.body.typeReglement } })

  pipeline.push({
    $lookup: {
      from: 'modereglements',
      let: { "modeReglement": "$modeReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modeReglement"] },
            ]
          }
        }
      },
      ],
      as: "modereglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'situationReglements',
      let: { "situationReglement": "$situationReglement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$situationReglement"] },
            ]
          }
        }
      },
      ],
      as: "situationReglements"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'fournisseurs',
      let: { "fournisseur": { "$toObjectId": "$client" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$fournisseur"] },
            ]
          }
        }
      },
      ],
      as: "fournisseurs"
    }
  })


  pipeline.push({
    $set: {
      fournisseur: { $arrayElemAt: ["$fournisseurs.raisonSociale", 0] },
      modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },
      situationReglement: { $arrayElemAt: ["$situationReglements.libelle", 0] },

      montant: { $toString: "$montant" },
      numCheque: { $toString: "$numCheque" },
      reste: { $toString: "$reste" },

      dateReglement: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateReglement"
        }
      },

      dateEcheance: {
        $dateToString: {
          format: "%Y-%m-%d", date: "$dateEcheance"
        }
      },
      id: "$_id"
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      fournisseur: 1,
      modeReglement: 1,
      tresorerie: 1,
      montant: 1,
      situationReglement:1,
      dateReglement: 1,
      numCheque: 1,
      dateEcheance: 1,
      notes: 1,
      reste: 1,
      numero: 1
    }
  })

  var search = req.body.search

  for (let key in search) {
    if (search[key] != "") {
      var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
      var word2 = search[key].toUpperCase()
      var word3 = search[key].toLowerCase()


      var objet1 = {}
      objet1[key] = { $regex: '.*' + word1 + '.*' }

      var objet2 = {}
      objet2[key] = { $regex: '.*' + word2 + '.*' }

      var objet3 = {}
      objet3[key] = { $regex: '.*' + word3 + '.*' }

      let objectMatch = { $or: [objet1, objet2, objet3] }

      let objectParent = { $match: objectMatch }
      pipeline.push(objectParent)
    }
  }


  var sommePipeline = []
  for (let key in pipeline) {
    sommePipeline.push(pipeline[key])
  }

  pipeline.push({
    $sort: sort
  })

  var skip = Number(req.body.page - 1) * Number(req.body.limit)

  pipeline.push({ $limit: skip + Number(req.body.limit) })

  pipeline.push({ $skip: skip })

  const articles = await Reglement.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Reglement.aggregate(sommePipeline)

  if (nbrTotal.length == 0) {
    nbrTotal = [{ total: 0 }]
  }

  const nbrTotalTrunc = Math.trunc(nbrTotal[0].total / req.body.limit)
  var pages = nbrTotal[0].total / req.body.limit

  if (pages > nbrTotalTrunc) {
    pages = nbrTotalTrunc + 1
  }

  const result = { docs: articles, pages: pages }


  return res.send({ status: true, resultat: result, request: req.body })

})


/**
 * @swagger
 * /reglements/getById/{id}:
 *   get:
 *     summary: Remove the reglement by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reglement id
 *
 *     responses:
 *       200:
 *         description: The reglement was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     libelle:
 *                       type: string
 *                     ordre:
 *                       type: number
 *                     valeurRetiree:
 *                       type: number
 *                     tierNecessaire:
 *                       type: string
 *                     plan:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The reglement was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getByIdBonLivraison/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const reglement = await Reglement.findOne({ _id: req.params.id })

  var liltrages = await Liltrage.find({ reglement: req.params.id })

  var bonLivraisons = []
  for (let i = 0; i < liltrages.length; i++) {
    var bonLivraison = {}
    bonLivraison = await BonLivraison.findById(liltrages[i].document)
    var newBonLivraison = { montantAPayer: liltrages[i].montantAPayer, montantTotal: bonLivraison.montantTotal, isPayee: bonLivraison.isPayee, montantPaye: bonLivraison.montantPaye, restPayer: bonLivraison.restPayer, date: bonLivraison.date, numero: bonLivraison.numero, id: bonLivraison.id }
    bonLivraisons.push(newBonLivraison)
  }

  const bonLivs = await BonLivraison.find({ client: reglement.client, isPayee: { $ne: "oui" } })

  for (let i = 0; i < bonLivs.length; i++) {
    if (liltrages.filter(x => x.document == bonLivs[i].id).length == 0) {
      var newBonLivraison = { montantAPayer: 0, montantTotal: bonLivs[i].montantTotal, isPayee: bonLivs[i].isPayee, montantPaye: bonLivs[i].montantPaye, restPayer: bonLivs[i].restPayer, date: bonLivs[i].date, numero: bonLivs[i].numero, id: bonLivs[i].id }
      bonLivraisons.push(newBonLivraison)
    }
  }

  return res.send({ status: true, resultat: reglement, bonLivraisons: bonLivraisons })

})

router.get('/getByIdBonRetourClient/:id', async (req, res) => {


  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const reglement = await Reglement.findOne({ _id: req.params.id })

  var liltrages = await Liltrage.find({ reglement: req.params.id })

  var bonLivraisons = []
  for (let i = 0; i < liltrages.length; i++) {
    var bonLivraison = {}
    bonLivraison = await BonRetourClient.findById(liltrages[i].document)
    var newBonLivraison = { montantAPayer: liltrages[i].montantAPayer, montantTotal: bonLivraison.montantTotal, isPayee: bonLivraison.isPayee, montantPaye: bonLivraison.montantPaye, restPayer: bonLivraison.restPayer, date: bonLivraison.date, numero: bonLivraison.numero, id: bonLivraison.id }
    bonLivraisons.push(newBonLivraison)
  }

  const bonLivs = await BonRetourClient.find({ client: reglement.client, isPayee: { $ne: "oui" } })

  for (let i = 0; i < bonLivs.length; i++) {
    if (liltrages.filter(x => x.document == bonLivs[i].id).length == 0) {
      var newBonLivraison = { montantAPayer: 0, montantTotal: bonLivs[i].montantTotal, isPayee: bonLivs[i].isPayee, montantPaye: bonLivs[i].montantPaye, restPayer: bonLivs[i].restPayer, date: bonLivs[i].date, numero: bonLivs[i].numero, id: bonLivs[i].id }
      bonLivraisons.push(newBonLivraison)
    }
  }

  return res.send({ status: true, resultat: reglement, bonLivraisons: bonLivraisons })

})

router.get('/getByIdBonAchat/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const reglement = await Reglement.findOne({ _id: req.params.id })

  var liltrages = await Liltrage.find({ reglement: req.params.id })

  var bonLivraisons = []
  for (let i = 0; i < liltrages.length; i++) {
    var bonLivraison = {}
    bonLivraison = await BonAchat.findById(liltrages[i].document)
    var newBonLivraison = { montantAPayer: liltrages[i].montantAPayer, montantTotal: bonLivraison.montantTotal, isPayee: bonLivraison.isPayee, montantPaye: bonLivraison.montantPaye, restPayer: bonLivraison.restPayer, date: bonLivraison.date, numero: bonLivraison.numero, id: bonLivraison.id }
    bonLivraisons.push(newBonLivraison)
  }

  const bonLivs = await BonAchat.find({ fournisseur: reglement.client, isPayee: { $ne: "oui" } })

  for (let i = 0; i < bonLivs.length; i++) {
    if (liltrages.filter(x => x.document == bonLivs[i].id).length == 0) {
      var newBonLivraison = { montantAPayer: 0, montantTotal: bonLivs[i].montantTotal, isPayee: bonLivs[i].isPayee, montantPaye: bonLivs[i].montantPaye, restPayer: bonLivs[i].restPayer, date: bonLivs[i].date, numero: bonLivs[i].numero, id: bonLivs[i].id }
      bonLivraisons.push(newBonLivraison)
    }
  }

  return res.send({ status: true, resultat: reglement, bonLivraisons: bonLivraisons })

})


router.get('/getByIdBonRetourFournisseur/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const reglement = await Reglement.findOne({ _id: req.params.id })

  var liltrages = await Liltrage.find({ reglement: req.params.id })

  var bonLivraisons = []
  for (let i = 0; i < liltrages.length; i++) {
    var bonLivraison = {}
    bonLivraison = await BonRetourFournisseur.findById(liltrages[i].document)
    var newBonLivraison = { montantAPayer: liltrages[i].montantAPayer, montantTotal: bonLivraison.montantTotal, isPayee: bonLivraison.isPayee, montantPaye: bonLivraison.montantPaye, restPayer: bonLivraison.restPayer, date: bonLivraison.date, numero: bonLivraison.numero, id: bonLivraison.id }
    bonLivraisons.push(newBonLivraison)
  }

  const bonLivs = await BonRetourFournisseur.find({ fournisseur: reglement.client, isPayee: { $ne: "oui" } })

  for (let i = 0; i < bonLivs.length; i++) {
    if (liltrages.filter(x => x.document == bonLivs[i].id).length == 0) {
      var newBonLivraison = { montantAPayer: 0, montantTotal: bonLivs[i].montantTotal, isPayee: bonLivs[i].isPayee, montantPaye: bonLivs[i].montantPaye, restPayer: bonLivs[i].restPayer, date: bonLivs[i].date, numero: bonLivs[i].numero, id: bonLivs[i].id }
      bonLivraisons.push(newBonLivraison)
    }
  }

  return res.send({ status: true, resultat: reglement, bonLivraisons: bonLivraisons })

})

/**
 * @swagger
 * /reglements/getAllParametres:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Reglements]
 *     responses:
 *       200:
 *         description: The bl was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  clients:
 *                    type: array
 *                  fournisseurs:
 *                    type: array
 *                  modeLivraisons:
 *                    type: array
 *                  
 *       404:
 *         description: The bl was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getAllParametres/:id', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.params.id))

  var numeroAutomatique = await getNumeroAutomatique(ObjectId(req.params.id), req.body.typeReglement)

  var clients = []
  if (["bonLivraison", "bonRetourClient"].includes(req.body.typeReglement) == true) {
    clients = await Client.find({ societeRacine: societeRacine })
  } else {
    clients = await Fournisseur.find({ societeRacine: societeRacine })
  }

  const modeReglements = await ModeReglement.find({ societeRacine: societeRacine })

  const situationReglements = await SituationReglement.find({ societeRacine: societeRacine })

  return res.send({ status: true, clients: clients, modeReglements: modeReglements, 
    numeroAutomatique: numeroAutomatique.numero,situationReglements:situationReglements })

})


/**
 * @swagger
 * /reglements/getByIdClient/{id}:
 *   post:
 *     summary: Remove the reglements by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Reglements id
 * 
 *     responses:
 *       200:
 *         description: The Reglements was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     nom:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     num:
 *                       type:Number
 *                     code:
 *                       type: string
 *                     raisonSociale:
 *                       type: string
 *                     matriculeFiscale:
 *                       type: string
 *                     classement:
 *                       type: string
 *                     plafondCredit:
 *                       type: number
 *                     mobiles:
 *                       type: string
 *                     siteWeb:
 *                       type: string
 *                     statusProspection:
 *                       type: string
 *                     modeReglement:
 *                       type: string
 *                     secteur:
 *                       type: string
 *                     paysFacturation:
 *                       type: string
 *                     gouvernoratFacturation:
 *                       type: string
 *                     delegationFacturation:
 *                       type: string
 *                     localiteFacturation:
 *                       type: string
 *                     codePostaleFacturation:
 *                       type: string
 *                     adresseFacturation:
 *                       type: string
 *                     paysLivraison:
 *                       type: string
 *                     gouvernoratLivraison:
 *                       type: string
 *                     delegationLivraison:
 *                       type: string
 *                     localiteLivraison:
 *                       type: string
 *                     codePostaleLivraison:
 *                       type: string
 *                     adresseLivraison:
 *                       type: string
 *                     autresAdresse:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           titre:
 *                             type: string
 *                           pays:
 *                             type: string
 *                           gouvernorat:
 *                             type: string
 *                           delegation:
 *                             type: string
 *                           localite:
 *                             type: string
 *                           codePostale:
 *                             type: string
 *                           adresse:
 *                             type: string
 *                     contacts:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                             type: string
 *                           titre:
 *                             type: string
 *                           civilite:
 *                             type: string
 *                     complements:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                             type: string
 *                           valeur:
 *                             type: string
 *                           imprimable:
 *                             type: string
 *                     observations:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getByIdClient/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(req.body.dateEnd)
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id })

  const reglements = await Reglement.find({ client: req.params.id, dateReglement: { $gte: dateStart, $lte: dateEnd } }).populate('modeReglement')

  const bonRetours = await BonRetourClient.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  const bonLivs = await BonLivraison.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  var soldeCurrente = 0

  var tabReleveClients = []

  for (let item of reglements) {
    if (item.typeReglement == "bonLivraison") {
      soldeCurrente -= item.montant
      tabReleveClients.push({ client: client.raisonSociale, type: "Reglement.BL", dateOperation: item.dateReglement, numero: item.numero, modeReglement: item.modeReglement.libelle, numCheque: item.numCheque, debit: 0, credit: item.montant, solde: 0 })
    } else {
      soldeCurrente += item.montant
      tabReleveClients.push({ client: client.raisonSociale, type: "Reglement.BR", dateOperation: item.dateReglement, numero: item.numero, modeReglement: item.modeReglement.libelle, numCheque: item.numCheque, debit: item.montant, credit: 0, solde: 0 })
    }
  }

  for (let item of bonRetours) {
    soldeCurrente -= item.montantTotal
    tabReleveClients.push({ client: client.raisonSociale, type: "Bon Retour", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: 0, credit: item.montantTotal, solde: 0 })
  }

  for (let item of bonLivs) {
    soldeCurrente += item.montantTotal
    tabReleveClients.push({ client: client.raisonSociale, type: "Bon Livraison", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })
  }

  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)

  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })

  const bonRetoursBefore = await BonRetourClient.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })

  const bonLivsBefore = await BonLivraison.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })

  var soldeBefore = 0

  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonLivraison") {
      soldeBefore -= item.montant
    } else {
      soldeBefore += item.montant
    }
  }

  for (let item of bonRetoursBefore) {
    soldeBefore -= item.montantTotal
  }

  for (let item of bonLivsBefore) {
    soldeBefore += item.montantTotal
  }

  for (let i = 0; i < tabReleveClients.length; i++) {
    for (let j = i; j < tabReleveClients.length; j++) {
      if (tabReleveClients[i].dateOperation < tabReleveClients[j].dateOperation) {
        var aux = tabReleveClients[i]
        tabReleveClients[i] = tabReleveClients[j]
        tabReleveClients[j] = aux
      }
    }
  }

  if (tabReleveClients.length == 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveClients[i].solde = soldeBefore - tabReleveClients[i].debit + tabReleveClients[i].credit
    }
  } else if (tabReleveClients.length > 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveClients[i].solde = soldeBefore - tabReleveClients[i].debit + tabReleveClients[i].credit
    }
    for (let i = 1; i < tabReleveClients.length; i++) {
      tabReleveClients[i].solde = tabReleveClients[i - 1].solde - tabReleveClients[i].debit + tabReleveClients[i].credit
    }
  }
  return res.send({ status: true, tabReleveClients: tabReleveClients, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})

router.post('/getByIdClientF/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(req.body.dateEnd)
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id })

  const bonLivs = await BonLivraison.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })


  var soldeCurrente = 0
  listGlobal = []
  for (let item of bonLivs) {
    soldeCurrente += item.montantTotal
    listGlobal.push({ client: client.raisonSociale, type:"Vente" ,dateOperation: item.date, dateEcheance: "",numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })

    //chercher pour une BL LES reglements
    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {
      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
      soldeCurrente -= reglement.montant
      listGlobal.push({ client: client.raisonSociale,type:"R.Vente" ,dateOperation: reglement.dateReglement,dateEcheance: reglement.dateEcheance, numero: item.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: 0, credit: reglement.montant, solde: 0 })
    }


    //chercher pour une BL LES BON Retours
    var  bonRetours = await BonRetourClient.find({ client: req.params.id, transfertBonLivraison: item.id})
    
    for (let itemR of bonRetours) {
      soldeCurrente -= item.montantTotal
      listGlobal.push({ client: client.raisonSociale,type:"Retour" ,dateOperation: itemR.date,dateEcheance: "",numero: itemR.numero, modeReglement: "",numCheque: "", debit: -itemR.montantTotal, credit: 0, solde: 0 })
  
      let liltrages = await Liltrage.find({ document: itemR.id })
      for (let itemLiltrage of liltrages) {
        let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
        soldeCurrente += reglement.montant
        listGlobal.push({ client: client.raisonSociale,type:"R.Retour" ,dateOperation: reglement.dateReglement,dateEcheance: reglement.dateEcheance,numero: itemR.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: reglement.montant, credit: 0, solde: 0 })
      }
    }
  }

  //pour calculer solde avant la recherche
  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)
  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })
  const bonRetoursBefore = await BonRetourClient.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })
  const bonLivsBefore = await BonLivraison.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })
  var soldeBefore = 0
  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonLivraison") {
      soldeBefore -= item.montant
    } else {
      soldeBefore += item.montant
    }
  }

  for (let item of bonRetoursBefore) {
    soldeBefore -= item.montantTotal
  }

  for (let item of bonLivsBefore) {
    soldeBefore += item.montantTotal
  }

  //pour calculer solde de releve client
  if (listGlobal.length == 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
  } else if (listGlobal.length > 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
    for (let i = 1; i < listGlobal.length; i++) {
      listGlobal[i].solde = listGlobal[i - 1].solde - listGlobal[i].debit + listGlobal[i].credit
    }
  }

  return res.send({ status: true, listGlobal: listGlobal, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})

/**
 * @swagger
 * /reglements/getByIdClientBL/{id}:
 *   post:
 *     summary: Remove the reglements by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Reglements id
 * 
 *     responses:
 *       200:
 *         description: The Reglements was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     nom:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     num:
 *                       type:Number
 *                     code:
 *                       type: string
 *                     observations:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getByIdClientBL/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(req.body.dateEnd)
  }


  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id })

  const bonLivs = await BonLivraison.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  const bonRetours = await BonRetourClient.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  var soldeCurrente = 0
  listGlobal = []
  for (let item of bonLivs) {
    soldeCurrente += item.montantTotal
    listGlobal.push({ client: client.raisonSociale, type: "Bon Livraison", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })

    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {
      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
      soldeCurrente -= reglement.montant
      listGlobal.push({ client: client.raisonSociale, type: "Reglement.BL", dateOperation: reglement.dateReglement, numero: reglement.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: 0, credit: reglement.montant, solde: 0 })
    }
  }

  for (let item of bonRetours) {
    soldeCurrente -= item.montantTotal
    listGlobal.push({ client: client.raisonSociale, type: "Bon Retour", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: 0, credit: item.montantTotal, solde: 0 })

    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {
      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
      soldeCurrente += reglement.montant
      listGlobal.push({ client: client.raisonSociale, type: "Reglement.BR", dateOperation: reglement.dateReglement, numero: reglement.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: reglement.montant, credit: 0, solde: 0 })
    }
  }

  //pour calculer solde avant la recherche
  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)
  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })
  const bonRetoursBefore = await BonRetourClient.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })
  const bonLivsBefore = await BonLivraison.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })
  var soldeBefore = 0
  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonLivraison") {
      soldeBefore -= item.montant
    } else {
      soldeBefore += item.montant
    }
  }

  for (let item of bonRetoursBefore) {
    soldeBefore -= item.montantTotal
  }

  for (let item of bonLivsBefore) {
    soldeBefore += item.montantTotal
  }

  //pour calculer solde de releve client
  if (listGlobal.length == 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
  } else if (listGlobal.length > 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
    for (let i = 1; i < listGlobal.length; i++) {
      listGlobal[i].solde = listGlobal[i - 1].solde - listGlobal[i].debit + listGlobal[i].credit
    }
  }
  return res.send({ status: true, listGlobal: listGlobal, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})

/**
 * @swagger
 * /reglements/getByIdFournisseurBL/{id}:
 *   post:
 *     summary: Remove the reglements by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Reglements id
 * 
 *     responses:
 *       200:
 *         description: The Reglements was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     nom:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     num:
 *                       type:Number
 *                     code:
 *                       type: string
 *                     observations:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getByIdFournisseurBA/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(new Date(req.body.dateEnd).setHours(24, 59, 59, 999))
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const fournisseur = await Fournisseur.findOne({ _id: req.params.id })

  const bonAchats = await BonAchat.find({ fournisseur: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  const bonRetours = await BonRetourFournisseur.find({ fournisseur: req.params.id, date: { $gte: dateStart, $lte: dateEnd } })

  var soldeCurrente = 0
  listGlobal = []
  for (let item of bonAchats) {
    soldeCurrente += item.montantTotal
    listGlobal.push({ fournisseur: fournisseur.raisonSociale, type: "Bon Achat", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })

    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {
      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
      soldeCurrente -= reglement.montant
      listGlobal.push({ fournisseur: fournisseur.raisonSociale, type: "Reglement.BA", dateOperation: reglement.dateReglement, numero: reglement.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: 0, credit: reglement.montant, solde: 0 })
      if (reglement.reste > 0) {
        listGlobal.push({ fournisseur: fournisseur.raisonSociale, type: "Reste.RA", dateOperation: reglement.dateReglement, numero: reglement.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: 0, credit: reglement.reste, solde: 0 })
      }
    }
  }

  for (let item of bonRetours) {
    soldeCurrente -= item.montantTotal
    listGlobal.push({ fournisseur: fournisseur.raisonSociale, type: "Bon Retour", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: 0, credit: item.montantTotal, solde: 0 })

    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {
      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')
      soldeCurrente += reglement.montant
      listGlobal.push({ fournisseur: fournisseur.raisonSociale, type: "Reglement.BR", dateOperation: reglement.dateReglement, numero: reglement.numero, modeReglement: reglement.modeReglement.libelle, numCheque: reglement.numCheque, debit: reglement.montant, credit: 0, solde: 0 })
    }
  }

  //pour calculer solde avant la recherche
  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)
  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })
  const bonRetoursBefore = await BonRetourFournisseur.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } })
  const bonAchatsBefore = await BonAchat.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } })
  var soldeBefore = 0
  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonAchat") {
      soldeBefore -= item.montant
    } else {
      soldeBefore += item.montant
    }
  }

  for (let item of bonRetoursBefore) {
    soldeBefore -= item.montantTotal
  }

  for (let item of bonAchatsBefore) {
    soldeBefore += item.montantTotal
  }

  //pour calculer solde de releve Fournisseur
  if (listGlobal.length == 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
  } else if (listGlobal.length > 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
    for (let i = 1; i < listGlobal.length; i++) {
      listGlobal[i].solde = listGlobal[i - 1].solde - listGlobal[i].debit + listGlobal[i].credit
    }
  }
  return res.send({ status: true, listGlobal: listGlobal, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})

/**
 * @swagger
 * /reglements/getByIdClientBLArticle/{id}:
 *   post:
 *     summary: Remove the reglements by id
 *     tags: [Reglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Reglements id
 * 
 *     responses:
 *       200:
 *         description: The Reglements was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  resultat:
 *                    type: object
 *                    properties:
 *                     id:
 *                       type: string
 *                     nom:
 *                       type: string
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getByIdClientBLArticle/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(req.body.dateEnd)
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id })

  const bonLivs = await BonLivraison.find({ client: req.params.id, date: { $gte: dateStart, $lte: dateEnd }  })

  var soldeCurrente = 0
  listGlobal = []
  sommeDebit = 0
  sommeCredit = 0
  for (let item of bonLivs) {
    let bonLivraisonArticles = await BonLivraisonArticle.find({ bonLivraison: item.id })

    for (let itemA of bonLivraisonArticles) {
      let libelle = itemA.reference + ' - ' + itemA.designation
      listGlobal.push({ client: client.raisonSociale,dateOperation: itemA.date, dateEcheance: "",numero: item.numero, libelle: libelle, debit: itemA.totalTTC, credit: 0, solde: 0 })    
      sommeDebit += itemA.totalTTC
    }

    let liltrages = await Liltrage.find({ document: item.id })
    for (let itemLiltrage of liltrages) {

      let reglement = await Reglement.findOne({ _id: itemLiltrage.reglement }).populate('modeReglement')

      listGlobal.push({ client: client.raisonSociale ,dateOperation: reglement.dateReglement, dateEcheance: reglement.dateEcheance,numero: reglement.numero, libelle: "Reglement.BL",modeReglement: reglement.modeReglement.libelle, debit: 0, credit: reglement.montant, solde: 0 })
     
      sommeCredit += reglement.montant
    }
  }

  //pour calculer solde avant la recherche
  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)
  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })
  const bonLivsBefore = await BonLivraison.find({ client: req.params.id, date: { $lte: dayBeforeDateStart } })
  var sommeTTC = 0
  for (let item of bonLivsBefore) {
    let bonLivraisonArticles = await BonLivraisonArticle.find({ bonLivraison: item.id })
    for (let itemA of bonLivraisonArticles) {
      sommeTTC += itemA.totalTTC
    }
  }
  let sommeReg = 0
  for (let item of reglementsBefore) {
    sommeReg += item.montant
  }
  soldeBefore = sommeReg - sommeTTC

  //pour calculer solde de releve client
  if (listGlobal.length == 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore
    }
  } else if (listGlobal.length > 1) {
    for (let i = 0; i < 1; i++) {
      listGlobal[i].solde = soldeBefore - listGlobal[i].debit + listGlobal[i].credit
    }
    for (let i = 1; i < listGlobal.length; i++) {
      listGlobal[i].solde = listGlobal[i - 1].solde - listGlobal[i].debit + listGlobal[i].credit
    }
  }
  soldeCurrente = sommeDebit - sommeCredit

  return res.send({ status: true, listGlobal: listGlobal, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})



router.get('/getBonLivraisonsByClient/:id', async (req, res) => {

  const bonLivs = await BonLivraison.find({ client: req.params.id, isPayee: { $ne: "oui" } })

  return res.send({ status: true, bonLivs: bonLivs, client: req.params.id })
})

router.get('/getBonRetourClientsByClient/:id', async (req, res) => {

  const bonLivs = await BonRetourClient.find({ client: req.params.id, isPayee: { $ne: "oui" } })

  return res.send({ status: true, bonLivs: bonLivs, client: req.params.id })
})

router.get('/getBonAchatsByFournisseur/:id', async (req, res) => {

  const bonLivs = await BonAchat.find({ fournisseur: req.params.id, isPayee: { $ne: "oui" } })

  return res.send({ status: true, bonLivs: bonLivs, client: req.params.id })
})

router.get('/getBonRetourFournisseursByFournisseur/:id', async (req, res) => {

  const bonLivs = await BonRetourFournisseur.find({ fournisseur: req.params.id, isPayee: { $ne: "oui" } })

  return res.send({ status: true, bonLivs: bonLivs, client: req.params.id })
})


/**
* @swagger
* /reglements/getByIdFournisseur/{id}:
*   post:
*     summary: Remove the reglements by id
*     tags: [Reglements]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The Reglements id
* 
*     responses:
*       200:
*         description: The Reglements was deleted
*         content:
*          application/json:
*            schema:
*               type: object
*               properties:
*                  status:
*                    type: boolean
*                  resultat:
*                    type: object
*                    properties:
*                     id:
*                       type: string
*                     nom:
*                       type: string
*                     email:
*                       type: string
*                     telephone:
*                       type: string
*                     num:
*                       type:Number
*                     code:
*                       type: string
*                     raisonSociale:
*                       type: string
*                     matriculeFiscale:
*                       type: string
*                     classement:
*                       type: string
*                     plafondCredit:
*                       type: number
*                     mobiles:
*                       type: string
*                     siteWeb:
*                       type: string
*                     statusProspection:
*                       type: string
*                     modeReglement:
*                       type: string
*                     secteur:
*                       type: string
*                     paysFacturation:
*                       type: string
*                     gouvernoratFacturation:
*                       type: string
*                     delegationFacturation:
*                       type: string
*                     localiteFacturation:
*                       type: string
*                     codePostaleFacturation:
*                       type: string
*                     adresseFacturation:
*                       type: string
*                     paysLivraison:
*                       type: string
*                     gouvernoratLivraison:
*                       type: string
*                     delegationLivraison:
*                       type: string
*                     localiteLivraison:
*                       type: string
*                     codePostaleLivraison:
*                       type: string
*                     adresseLivraison:
*                       type: string
*                     autresAdresse:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           titre:
*                             type: string
*                           pays:
*                             type: string
*                           gouvernorat:
*                             type: string
*                           delegation:
*                             type: string
*                           localite:
*                             type: string
*                           codePostale:
*                             type: string
*                           adresse:
*                             type: string
*                     contacts:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           type:
*                             type: string
*                           titre:
*                             type: string
*                           civilite:
*                             type: string
*                     complements:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           type:
*                             type: string
*                           valeur:
*                             type: string
*                           imprimable:
*                             type: string
*                     observations:
*                       type: string
*                     createdAt:
*                       type: string
*                     updatedAt:
*                       type: string
*       404:
*         description: The article was not found
*       500:
*         description: Some error happened
*/
router.post('/getByIdFournisseur/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }
  if (req.body.dateEnd) {
    dateEnd = new Date(new Date(req.body.dateEnd).setHours(24, 59, 59, 999))
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const fournisseur = await Fournisseur.findOne({ _id: req.params.id })

  const reglements = await Reglement.find({ client: req.params.id, dateReglement: { $gte: dateStart, $lte: dateEnd } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  const bonRetours = await BonRetourFournisseur.find({ fournisseur: req.params.id, date: { $gte: dateStart, $lte: dateEnd } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  const bonAchats = await BonAchat.find({ fournisseur: req.params.id, date: { $gte: dateStart, $lte: dateEnd } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  var soldeCurrente = 0

  var tabReleveFournisseurs = []

  for (let item of reglements) {
    if (item.typeReglement == "bonAchat") {
      soldeCurrente -= item.montant
      tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Reglement.BA", dateOperation: item.dateReglement, numero: item.numero, modeReglement: item.modeReglement.libelle, numCheque: item.numCheque, debit: 0, credit: item.montant, solde: 0 })
    } else {
      soldeCurrente += item.montant
      tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Reglement.BR", dateOperation: item.dateReglement, numero: item.numero, modeReglement: item.modeReglement.libelle, numCheque: item.numCheque, debit: item.montant, credit: 0, solde: 0 })
    }
  }

  for (let item of bonRetours) {
    soldeCurrente -= item.montantTotal
    tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Bon Retour", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: 0, credit: item.montantTotal, solde: 0 })
  }

  for (let item of bonAchats) {
    soldeCurrente += item.montantTotal
    tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Facture Achat", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })
  }

  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)

  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })

  const bonRetoursBefore = await BonRetourFournisseur.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } })

  const bonAchatsBefore = await BonAchat.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } })

  var soldeBefore = 0

  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonAchat") {
      soldeBefore -= item.montant
    } else {
      soldeBefore += item.montant
    }
  }

  for (let item of bonRetoursBefore) {
    soldeBefore -= item.montantTotal
  }

  for (let item of bonAchatsBefore) {
    soldeBefore += item.montantTotal
  }

  for (let i = 0; i < tabReleveFournisseurs.length; i++) {
    for (let j = i; j < tabReleveFournisseurs.length; j++) {
      if (tabReleveFournisseurs[i].dateOperation < tabReleveFournisseurs[j].dateOperation) {
        var aux = tabReleveFournisseurs[i]
        tabReleveFournisseurs[i] = tabReleveFournisseurs[j]
        tabReleveFournisseurs[j] = aux
      }
    }
  }

  if (tabReleveFournisseurs.length == 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveFournisseurs[i].solde = soldeBefore - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
  } else if (tabReleveFournisseurs.length > 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveFournisseurs[i].solde = soldeBefore - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
    for (let i = 1; i < tabReleveFournisseurs.length; i++) {
      tabReleveFournisseurs[i].solde = tabReleveFournisseurs[i - 1].solde - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
  }
  return res.send({ status: true, tabReleveFournisseurs: tabReleveFournisseurs, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})

router.post('/getByIdFournisseurRe/:id', async (req, res) => {

  var dateStart = new Date()
  var dateEnd = new Date()

  if (req.body.dateStart) {
    dateStart = new Date(req.body.dateStart)
  }

  if (req.body.dateEnd) {
    dateEnd = new Date(new Date(req.body.dateEnd).setHours(24, 59, 59, 999))
  }

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const fournisseur = await Fournisseur.findOne({ _id: req.params.id })

  const reglements = await Reglement.find({ client: req.params.id, dateReglement: { $gte: dateStart, $lte: dateEnd } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  const receptions = await BonReception.find({ fournisseur: req.params.id, date: { $gte: dateStart, $lte: dateEnd } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  var soldeCurrente = 0

  var tabReleveFournisseurs = []

  for (let item of reglements) {
    if (item.typeReglement == "bonAchat") {
      soldeCurrente -= item.montant
      tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Reglement.BA", dateOperation: item.dateReglement, numero: item.numero, modeReglement: item.modeReglement.libelle, numCheque: item.numCheque, debit: 0, credit: item.montant, solde: 0 })
    }
  }

  for (let item of receptions) {
    soldeCurrente += item.montantTotal
    tabReleveFournisseurs.push({ fournisseur: fournisseur.raisonSociale, type: "Bon Reception", dateOperation: item.date, numero: item.numero, modeReglement: "", numCheque: "", debit: item.montantTotal, credit: 0, solde: 0 })
  }

  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)

  const reglementsBefore = await Reglement.find({ client: req.params.id, dateReglement: { $lte: dayBeforeDateStart } })

  const receptionsBefore = await BonReception.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } })

  var soldeBefore = 0

  for (let item of reglementsBefore) {
    if (item.typeReglement == "bonAchat") {
      soldeBefore -= item.montant
    }
  }

  for (let item of receptionsBefore) {
    soldeBefore += item.montantTotal
  }

  for (let i = 0; i < tabReleveFournisseurs.length; i++) {
    for (let j = i; j < tabReleveFournisseurs.length; j++) {
      if (tabReleveFournisseurs[i].dateOperation < tabReleveFournisseurs[j].dateOperation) {
        var aux = tabReleveFournisseurs[i]
        tabReleveFournisseurs[i] = tabReleveFournisseurs[j]
        tabReleveFournisseurs[j] = aux
      }
    }
  }

  if (tabReleveFournisseurs.length == 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveFournisseurs[i].solde = soldeBefore - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
  } else if (tabReleveFournisseurs.length > 1) {
    for (let i = 0; i < 1; i++) {
      tabReleveFournisseurs[i].solde = soldeBefore - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
    for (let i = 1; i < tabReleveFournisseurs.length; i++) {
      tabReleveFournisseurs[i].solde = tabReleveFournisseurs[i - 1].solde - tabReleveFournisseurs[i].debit + tabReleveFournisseurs[i].credit
    }
  }
  return res.send({ status: true, tabReleveFournisseurs: tabReleveFournisseurs, request: req.body, soldeCurrente: soldeCurrente, soldeBefore: soldeBefore })

})
/**
* @swagger
* /reglements/getByIdFournisseurCredit/{id}:
*   post:
*     summary: Remove the reglements by id
*     tags: [Reglements]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The Reglements id
* 
*     responses:
*       200:
*         description: The Reglements was deleted
*         content:
*          application/json:
*            schema:
*               type: object
*               properties:
*                  status:
*                    type: boolean
*                  resultat:
*                    type: object
*                    properties:
*                     id:
*                       type: string
*                     nom:
*                       type: string
*                     email:
*                       type: string
*                     telephone:
*                       type: string
*                     num:
*                       type:Number
*                     code:
*                       type: string
*                     raisonSociale:
*                       type: string
*                     matriculeFiscale:
*                       type: string
*                     classement:
*                       type: string
*                     plafondCredit:
*                       type: number
*                     mobiles:
*                       type: string
*                     siteWeb:
*                       type: string
*                     statusProspection:
*                       type: string
*                     modeReglement:
*                       type: string
*                     secteur:
*                       type: string
*                     paysFacturation:
*                       type: string
*                     gouvernoratFacturation:
*                       type: string
*                     delegationFacturation:
*                       type: string
*                     localiteFacturation:
*                       type: string
*                     codePostaleFacturation:
*                       type: string
*                     adresseFacturation:
*                       type: string
*                     paysLivraison:
*                       type: string
*                     gouvernoratLivraison:
*                       type: string
*                     delegationLivraison:
*                       type: string
*                     localiteLivraison:
*                       type: string
*                     codePostaleLivraison:
*                       type: string
*                     adresseLivraison:
*                       type: string
*                     autresAdresse:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           titre:
*                             type: string
*                           pays:
*                             type: string
*                           gouvernorat:
*                             type: string
*                           delegation:
*                             type: string
*                           localite:
*                             type: string
*                           codePostale:
*                             type: string
*                           adresse:
*                             type: string
*                     contacts:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           type:
*                             type: string
*                           titre:
*                             type: string
*                           civilite:
*                             type: string
*                     complements:
*                       type: array
*                       items:
*                         type: object
*                         properties:
*                           type:
*                             type: string
*                           valeur:
*                             type: string
*                           imprimable:
*                             type: string
*                     observations:
*                       type: string
*                     createdAt:
*                       type: string
*                     updatedAt:
*                       type: string
*       404:
*         description: The article was not found
*       500:
*         description: Some error happened
*/
router.post('/getByIdFournisseurCredit/:id', async (req, res) => {

  var dateStart = new Date(req.body.dateStart)
  var dateEnd = new Date(req.body.dateEnd)

  var dayBeforeDateStart = new Date(dateStart - 24 * 60 * 60 * 1000)

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const fournisseur = await Fournisseur.findOne({ _id: req.params.id })

  const reglements = await Reglement.find({ fournisseur: req.params.id, dateReglement: { $lte: dayBeforeDateStart } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  const bonRetours = await BonRetourFournisseur.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  const bonLivs = await BonLivraison.find({ fournisseur: req.params.id, date: { $lte: dayBeforeDateStart } }).populate({ path: "fournisseur", select: "_id, raisonSociale" })

  return res.send({ status: true, reglements: reglements, bonRetours: bonRetours, bonLivs: bonLivs, request: req.body })
})

function verifytoken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = authData;
        next();
      }
    });

  } else {
    console.log("etape100");
    res.sendStatus(401);
  }

}

module.exports.routerReglement = router
