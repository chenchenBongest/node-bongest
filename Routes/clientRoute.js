const { Client, getNumeroAutomatique, validateClient, validateCodeRaisonSocialeMatriculeFiscale, validateCodeRaisonSocialeMatriculeFiscaleModifier, calculeEnCours } = require('../Models/clientModel')
const { ModeReglement } = require('../Models/modeReglementModel')
const { ConditionReglement, validateConditionReglement } = require('../Models/conditionReglementModel')

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const { Secteur } = require('../Models/secteurModel');
const { TypeTier } = require('../Models/typeTierModel');
const { TypeContact } = require('../Models/typeContactModel');

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel')
const { Personnel } = require('../Models/personnelModel')
const { Reglement } = require('../Models/reglementModel')
var ObjectId = require('mongodb').ObjectID;

/**
 * @swagger
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       required:
 *        - nom
 *        - email
 *        - telephone       
 *        - code
 *        - raisonSociale
 *        - matriculeFiscale
 *        - classement
 *        - plafondCredit
 *        - mobiles
 *        - siteWeb
 *        - conditionReglement
 *        - typeTiers
 *        - delegationLivraison
 *        - localiteLivraison
 *        - codePostaleLivraison
 *        - adresseLivraison
 *        - autresAdresse
 *        - contacts
 *        - complements
 *        - observation
 *       properties:
 *         nom:
 *           type: string
 *         email:
 *           type: string
 *         telephone:
 *           type: string
 *         credit: 
 *           type: number
 *         fax:
 *           type: string
 *         statusProspection:
 *           type: string
 *         modeReglement:
 *           type: string
 *           type: string
 *         autresAdresse:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               titre:
 *                 type: string
 *               pays:
 *                 type: string
 *               gouvernorat:
 *                 type: string
 *               delegation:
 *                 type: string
 *               localite:
 *                 type: string
 *               codePostale:
 *                 type: string
 *               adresse:
 *                 type: string
 *         contacts:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               type:
 *                  type: string
 *               titre:
 *                  type: string
 *               civilite:
 *                  type: string
 *         complements:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               type:
 *                  type: string
 *               valeur:
 *                  type: string
 *               imprimable:
 *                  type: string
 *         observation:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: The clients managing API
 */


/**
* @swagger
* /clients/newClient:
*   post:
*     summary: Returns the list of all the clients
*     tags: [Clients]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: 
*             type: object
*             properties:
*               nom:
*                 type: string
*               email:
*                 type: string
*               telephone:
*                 type: string
*               code:
*                 type: string
*               raisonSociale:
*                 type: string
*               matriculeFiscale:
*                 type: string
*               secteur:
*                 type: string
*               paysFacturation:
*                 type: string
*               gouvernoratFacturation:
*                 type: string
*               codePostaleLivraison:
*                 type: string
*               adresseLivraison:
*                 type: string
*               autresAdresse:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     titre:
*                       type: string
*                     pays:
*                       type: string
*                     gouvernorat:
*                       type: string
*                     delegation:
*                       type: string
*                     localite:
*                       type: string
*                     codePostale:
*                       type: string
*                     adresse:
*                       type: string
*               contacts:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     type:
*                        type: string
*                     titre:
*                        type: string
*                     civilite:
*                        type: string
*               complements:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     type:
*                        type: string
*                     valeur:
*                        type: string
*                     imprimable:
*                        type: string
*               observation:
*                 type: string  
* 
*     responses:
*       200:
*         description: The client was deleted
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
*                       nom:
*                         type: string
*                       email:
*                         type: string
*                       telephone:
*                         type: string
*                       code:
*                         type: string
*                       raisonSociale:
*                         type: string
*                       matriculeFiscale:
*                         type: string
*                       fax:
*                         type: string
*                       statusProspection:
*                         type: string
*                       codePostaleFacturation:
*                         type: string
*                       adresseFacturation:
*                         type: string
*                       paysLivraison:
*                         type: string
*                       adresseLivraison:
*                         type: string
*                       autresAdresse:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             titre:
*                               type: string
*                             pays:
*                               type: string
*                             gouvernorat:
*                               type: string
*                             delegation:
*                               type: string
*                             localite:
*                               type: string
*                             codePostale:
*                               type: string
*                             adresse:
*                               type: string
*                       contacts:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             type:
*                                type: string
*                             titre:
*                                type: string
*                             civilite:
*                                type: string
*                       complements:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             type:
*                                type: string
*                             valeur:
*                                type: string
*                             imprimable:
*                                type: string
*                       observation:
*                         type: string 
*       404:
*         description: The client was not found
*       500:
*         description: Some error happened
*/



router.post('/newClient', async (req, res) => {

  /*const {error}=validateClient(req.body)
  if(error) return res.status(400).send({status:false,message:error.details[0].message})
  */

  var tabChampsNonOblig = ["secteur", "modeReglement", "typeTiers", "agentPremierContact", "agentCommercial", "agentRecouvrement"]
  for (let i = 0; i < tabChampsNonOblig.length; i++) {
    if (req.body[tabChampsNonOblig[i]] == "") {
      req.body[tabChampsNonOblig[i]] = null
    }
  }

  var body = req.body
  body.societeRacine = await getSocieteRacine(ObjectId(body.societe))

  var messageErreur = await validateCodeRaisonSocialeMatriculeFiscale(body, body.societeRacine)

  if (messageErreur != "") {
    return res.send({ status: false, message: messageErreur })
  }

  var chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  var number = ""
  for (let i = 0; i < body.code.length; i++) {
    if (chiffres.includes(body.code[i])) {
      number += body.code[i]
    } else {
      number = ""
    }
  }

  body.num = Number(number)

  const client = new Client(body)

  const result = await client.save()
  return res.send({ status: true, resultat: result })
})



/**
* @swagger
* /clients/modifierClient/{id}:
*   post:
*     summary: Remove the client by id
*     tags: [Clients]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The client id
* 
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: 
*             type: object
*             properties:
*               nom:
*                 type: string
*               email:
*                 type: string
*               telephone:
*                 type: string
*               code:
*                 type: string
*               raisonSociale:
*                 type: string
*               matriculeFiscale:
*                 type: string
*               classement:
*                 type: string
*               plafondCredit:
*                 type: number
*               mobiles:
*                 type: string
*               siteWeb:
*                 type: string
*               conditionReglement:
*                 type: string
*               typeTiers:
*                 type: string
*               credit: 
*                 type: number
*               fax:
*                 type: string
*               statusProspection:
*                 type: string
*               modeReglement:
*                 type: string
*               secteur:
*                 type: string
*               paysFacturation:
*                 type: string
*               gouvernoratFacturation:
*                 type: string
*               delegationFacturation:
*                 type: string
*               localiteFacturation:
*                 type: string
*               codePostaleFacturation:
*                 type: string
*               adresseFacturation:
*                 type: string
*               paysLivraison:
*                 type: string
*               gouvernoratLivraison:
*                 type: string
*               delegationLivraison:
*                 type: string
*               localiteLivraison:
*                 type: string
*               codePostaleLivraison:
*                 type: string
*               adresseLivraison:
*                 type: string
*               autresAdresse:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     titre:
*                       type: string
*                     pays:
*                       type: string
*                     gouvernorat:
*                       type: string
*                     delegation:
*                       type: string
*                     localite:
*                       type: string
*                     codePostale:
*                       type: string
*                     adresse:
*                       type: string
*               contacts:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     type:
*                        type: string
*                     titre:
*                        type: string
*                     civilite:
*                        type: string
*               complements:
*                 type: array
*                 items:
*                   type: object
*                   properties:
*                     type:
*                        type: string
*                     valeur:
*                        type: string
*                     imprimable:
*                        type: string
*               observation:
*                 type: string  
* 
*     responses:
*       200:
*         description: The client is updated
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
*                       nom:
*                         type: string
*                       email:
*                         type: string
*                       telephone:
*                         type: string
*                       code:
*                         type: string
*                       raisonSociale:
*                         type: string
*                       matriculeFiscale:
*                         type: string
*                       classement:
*                         type: string
*                       plafondCredit:
*                         type: number
*                       mobiles:
*                         type: string
*                       siteWeb:
*                         type: string
*                       conditionReglement:
*                         type: string
*                       typeTiers:
*                         type: string
*                       credit: 
*                         type: number
*                       fax:
*                         type: string
*                       statusProspection:
*                         type: string
*                       modeReglement:
*                         type: string
*                       secteur:
*                         type: string
*                       paysFacturation:
*                         type: string
*                       gouvernoratFacturation:
*                         type: string
*                       delegationFacturation:
*                         type: string
*                       localiteFacturation:
*                         type: string
*                       codePostaleFacturation:
*                         type: string
*                       adresseFacturation:
*                         type: string
*                       paysLivraison:
*                         type: string
*                       gouvernoratLivraison:
*                         type: string
*                       delegationLivraison:
*                         type: string
*                       localiteLivraison:
*                         type: string
*                       codePostaleLivraison:
*                         type: string
*                       adresseLivraison:
*                         type: string
*                       autresAdresse:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             titre:
*                               type: string
*                             pays:
*                               type: string
*                             gouvernorat:
*                               type: string
*                             delegation:
*                               type: string
*                             localite:
*                               type: string
*                             codePostale:
*                               type: string
*                             adresse:
*                               type: string
*                       contacts:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             type:
*                                type: string
*                             titre:
*                                type: string
*                             civilite:
*                                type: string
*                       complements:
*                         type: array
*                         items:
*                           type: object
*                           properties:
*                             type:
*                                type: string
*                             valeur:
*                                type: string
*                             imprimable:
*                                type: string
*                       observation:
*                         type: string 
*       404:
*         description: The client was not found
*       500:
*         description: Some error happened
*/

router.post('/modifierClient/:id', async (req, res) => {

  var tabChampsNonOblig = ["secteur", "modeReglement", "typeTiers", "agentPremierContact", "agentCommercial", "agentRecouvrement"]
  for (let i = 0; i < tabChampsNonOblig.length; i++) {
    if (req.body[tabChampsNonOblig[i]] == "") {
      req.body[tabChampsNonOblig[i]] = null
    }
  }

  const client = await Client.findById(req.params.id)

  if (!client) return res.status(401).send({ status: false })

  var body = req.body

  body.societeRacine = client.societeRacine
  //body.societeRacine = await getSocieteRacine(ObjectId(body.societe))

  var messageErreur = await validateCodeRaisonSocialeMatriculeFiscaleModifier(body, body.societeRacine, client.id)

  if (messageErreur != "") {
    return res.send({ status: false, message: messageErreur })
  }

  var chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  var number = ""
  for (let i = 0; i < body.code.length; i++) {
    if (chiffres.includes(body.code[i])) {
      number += body.code[i]
    } else {
      number = ""
    }
  }

  body.num = Number(number)

  body.credit = undefined

  const result = await Client.findOneAndUpdate({ _id: req.params.id }, body)

  const client2 = await Client.findById(req.params.id)

  return res.send({ status: true, resultat: client2 })
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
 * /clients/listClients:
 *   post:
 *     summary: Returns the list of all the clients
 *     tags: [Clients]
 *     requestBody:
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
 *         description: The list of the clients
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
 *                            nom:
 *                              type: string
 *                            email:
 *                              type: string
 *                            telephone:
 *                              type: string
 *                            code:
 *                              type: string
 *                            raisonSociale:
 *                              type: string
 *                            matriculeFiscale:
 *                              type: string
 *                            classement:
 *                              type: string
 *                            plafondCredit:
 *                              type: number
 *                            mobiles:
 *                              type: string
 *                            siteWeb:
 *                              type: string
 *                            conditionReglement:
 *                              type: string
 *                            typeTiers:
 *                              type: string
 *                            credit: 
 *                              type: number
 *                            fax:
 *                              type: string
 *                            statusProspection:
 *                              type: string
 *                            modeReglement:
 *                              type: string
 *                            secteur:
 *                              type: string
 *                            paysFacturation:
 *                              type: string
 *                            gouvernoratFacturation:
 *                              type: string
 *                            delegationFacturation:
 *                              type: string
 *                            localiteFacturation:
 *                              type: string
 *                            codePostaleFacturation:
 *                              type: string
 *                            adresseFacturation:
 *                              type: string
 *                            paysLivraison:
 *                              type: string
 *                            gouvernoratLivraison:
 *                              type: string
 *                            delegationLivraison:
 *                              type: string
 *                            localiteLivraison:
 *                              type: string
 *                            codePostaleLivraison:
 *                              type: string
 *                            adresseLivraison:
 *                              type: string
 *                            autresAdresse:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  titre:
 *                                    type: string
 *                                  pays:
 *                                    type: string
 *                                  gouvernorat:
 *                                    type: string
 *                                  delegation:
 *                                    type: string
 *                                  localite:
 *                                    type: string
 *                                  codePostale:
 *                                    type: string
 *                                  adresse:
 *                                    type: string
 *                            contacts:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  type:
 *                                     type: string
 *                                  titre:
 *                                     type: string
 *                                  civilite:
 *                                     type: string
 *                            complements:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  type:
 *                                     type: string
 *                                  valeur:
 *                                     type: string
 *                                  imprimable:
 *                                     type: string
 *                            observation:
 *                              type: string 
 *
 */
router.post('/listClients', async (req, res) => {

  //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

  var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

  if (req.body.limit == 0) {
    var clients = await Client.find({ societeRacine: societeRacine })
    const result = { docs: clients }
    return res.send({ status: true, resultat: result, request: req.body })
  }

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

  pipeline.push({ $match: { societeRacine: societeRacine } })

  pipeline.push({
    $lookup: {
      from: 'secteurs',
      let: { "secteur": "$secteur" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$secteur"] },
            ]
          }
        }
      },
      ],
      as: "secteur"
    }
  })

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
      from: 'typetiers',
      let: { "typeTiers": "$typeTiers" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$typeTiers"] },
            ]
          }
        }
      },
      ],
      as: "typetiers"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'personnels',
      let: { "agentPremierContact": "$agentPremierContact" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$agentPremierContact"] },
            ]
          }
        }
      },
      ],
      as: "agentpremiercontacts"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'personnels',
      let: { "agentCommercial": "$agentCommercial" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$agentCommercial"] },
            ]
          }
        }
      },
      ],
      as: "agentcommercials"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'personnels',
      let: { "agentRecouvrement": "$agentRecouvrement" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$agentRecouvrement"] },
            ]
          }
        }
      },
      ],
      as: "agentrecouvrements"
    }
  })

  pipeline.push({
    $set: {
      secteur: { $arrayElemAt: ["$secteur.typeS", 0] },
      modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },
      typeTiers: { $arrayElemAt: ["$typetiers.libelle", 0] },
      agentPremierContact: { $arrayElemAt: ["$agentpremiercontacts.nom", 0] },
      agentCommercial: { $arrayElemAt: ["$agentcommercials.nom", 0] },
      agentRecouvrement: { $arrayElemAt: ["$agentrecouvrements.nom", 0] },
      plafondCredit: { $toString: "$plafondCredit" },
      credit: { $toString: "$credit" },
      remise: { $toString: "$remise" },
      nbFactureNonPaye: { $toString: "$nbFactureNonPaye" },
      id: "$_id"
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      email: 1,
      telephone: 1,
      code: 1,
      raisonSociale: 1,
      matriculeFiscale: 1,
      classement: 1,
      mobiles: 1,
      siteWeb: 1,
      conditionReglement: 1,
      typeTiers: 1,
      credit: 1,
      plafondCredit: 1,
      fax: 1,
      statusProspection: 1,
      modeReglement: 1,
      secteur: 1,

      agentPremierContact: 1,
      agentCommercial: 1,
      agentRecouvrement: 1,
      remise: 1,
      active: 1,
      facture: 1,
      nbFactureNonPaye: 1,

      paysFacturation: 1,
      gouvernoratFacturation: 1,
      delegationFacturation: 1,
      localiteFacturation: 1,
      codePostaleFacturation: 1,
      adresseFacturation: 1,

      paysLivraison: 1,
      gouvernoratLivraison: 1,
      delegationLivraison: 1,
      localiteLivraison: 1,
      codePostaleLivraison: 1,
      adresseLivraison: 1,

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

  const articles = await Client.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Client.aggregate(sommePipeline)

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
 * /clients/deleteClient/{id}:
 *   post:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 * 
 *     responses:
 *       200:
 *         description: The client was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The client was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteClient/:id', async (req, res) => {

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const client = await Client.findById(req.params.id)

  if (!client) return res.status(401).send({ status: false })


  if (await Client.findOneAndDelete({ _id: req.params.id })) {
    return res.send({ status: true })
  } else {
    return res.send({ status: false })
  }
})


/**
 * @swagger
 * /clients/getAllParametres:
 *   get:
 *     summary:
 *     tags: [Clients]
 * 
 *     responses:
 *       200:
 *         description: The Client was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  secteur:
 *                    type: array          
 *       404:
 *         description: The Client was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getAllParametres/:id', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.params.id))

  const secteurs = await Secteur.find({ societeRacine: societeRacine })

  const modereglements = await ModeReglement.find({ societeRacine: societeRacine })

  const typeTiers = await TypeTier.find({ societeRacine: societeRacine })

  const typeContacts = await TypeContact.find({ societeRacine: societeRacine })

  const clients = await Client.find({ societeRacine: societeRacine }).select({ id: 1, code: 1, raisonSociale: 1, matriculeFiscale: 1 })

  const conditionReglements = await ConditionReglement.find({ societeRacine: societeRacine })

  const personnels = await Personnel.find({ societeRacine: societeRacine })

  const numero = await getNumeroAutomatique(societeRacine)

  return res.send({
    status: true, numero: numero, secteurs: secteurs,
    modereglements: modereglements, typeTiers: typeTiers,
    clients: clients, conditionReglements: conditionReglements,
    typeContacts: typeContacts, personnels: personnels
  })
})

/**
 * @swagger
 * /clients/getById/{id}:
 *   get:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 * 
 *     responses:
 *       200:
 *         description: The client was deleted
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
 *                     conditionReglement:
 *                       type: string
 *                     typeTiers:
 *                       type: string
 *                     credit: 
 *                       type: number
 *                     fax:
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
 *                              type: string
 *                           titre:
 *                              type: string
 *                           civilite:
 *                              type: string
 *                     complements:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           type:
 *                              type: string
 *                           valeur:
 *                              type: string
 *                           imprimable:
 *                              type: string
 *                     observation:
 *                       type: string 
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The Client was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id })

  return res.send({ status: true, resultat: client })

})

router.get('/getByIdWithTypeTiersModeReglementSecteur/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const client = await Client.findOne({ _id: req.params.id }).populate('typeTiers').populate('secteur').populate('modeReglement')

  var newClient = {
    num: "",
    email: "",
    telephone: "",
    code: "",
    raisonSociale: "",
    matriculeFiscale: "",
    classement: "",
    mobiles: "",
    siteWeb: "",
    conditionReglement: "",
    typeTiers: "",
    credit: 0,
    plafondCredit: 0,
    fax: "",
    statusProspection: "",
    modeReglement: "",
    secteur: "",
    exemptTimbreFiscale: "",
    exemptTVA: "",
    agentPremierContact: "",
    agentCommercial: "",
    agentRecouvrement: "",
    remise: 0,
    active: "",
    facture: "",
    paysFacturation: "",
    gouvernoratFacturation: "",
    delegationFacturation: "",
    localiteFacturation: "",
    codePostaleFacturation: "",
    adresseFacturation: "",
    paysLivraison: "",
    gouvernoratLivraison: "",
    delegationLivraison: "",
    localiteLivraison: "",
    codePostaleLivraison: "",
    adresseLivraison: "",
    autresAdresse: [],
    contacts: [],
    complements: [],
    observation: "",
  }

  for (let key in newClient) {

    if (['secteur', 'typeTiers', 'modeReglement'].includes(key) == false) {
      newClient[key] = client[key]
    } else {
      if (['typeTiers', 'modeReglement'].includes(key) == true && client[key] != null) {
        newClient[key] = client[key].libelle
      } else if (key == 'secteur' && client[key] != null) {
        newClient[key] = client[key].typeS
      } else {
        newClient[key] = null
      }
    }
  }

  return res.send({ status: true, resultat: newClient })

})

router.post('/classementClient', async (req, res) => {

  var dateStart =new Date(req.body.dateStart)
  var dateEnd = new Date(req.body.dateEnd)
  var societe = ObjectId(req.body.societe)

  let clients = []
  if(req.body.client != "")
  {
    var client = ObjectId(req.body.client)

    let clientById = await Client.findById({ _id: client }).populate('typeTiers').populate('modeReglement')

    clients.push(clientById)
    
  }else{

    clients = await Client.find({ societeRacine: societe }).populate('typeTiers').populate('modeReglement')
  }

  let listGL = []
  for (let item of clients) {
    let type = ""
    let tab
    if (item.typeTiers != null) {
      type = item.typeTiers.libelle
    }

    const reglements = await Reglement.find({ client: item._id, dateReglement: { $gte: dateStart, $lte: dateEnd } }).populate('modeReglement').populate('situationReglement')

    tab = calculeEnCours(reglements, item.modeReglement)

    listGL.push({
      client: item.code, nom: item.raisonSociale, solde: item.credit,
      enCours: tab[0].montant, impaye: tab[0].impaye, credit: item.plafondCredit, delai: item.conditionReglement,
      type: type, nature: item.classement, telephone: item.mobiles
    })
  }

  return res.send({ status: true, listGL: listGL })

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
    res.sendStatus(401);
  }
}

module.exports.routerClient = router