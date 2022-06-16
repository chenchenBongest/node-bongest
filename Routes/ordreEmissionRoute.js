const { OrdreEmission, getNumeroAutomatique } = require('../Models/ordreEmissionModel')

const { BonLivraison } = require('../Models/bonLivraisonModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel');
const { Chauffeur } = require('../Models/GMAOModels/chauffeurModel');
var ObjectId = require('mongodb').ObjectID;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now())
  }
})


var upload = multer({ storage: storage })

/**
 * @swagger
 * components:
 *   schemas:
 *     OrdreEmission:
 *       type: object
 *       required:
 *         - budget
 *         - trajet
 *         - camion
 *         - chauffeur
 *         - bonLivraison
 *         - societeRacine
 *       properties:
 *         budget:
 *           type: number
 *         trajet:
 *           type: number
 *         camion:
 *           type: string
 *         chauffeur:
 *           type: string
 *         bonLivraison:
 *           type: string
 *         societeRacine:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: OrdreEmissions
 *   description: The OrdreEmissions managing API
 */


/**
 * @swagger
 * paths:
 *   /ordreEmissions/upload:
 *     post:
 *       summary: upload image
 *       tags: [OrdreEmissions]
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
 * /ordreEmissions/newOrdreEmission:
 *   post:
 *     summary: Returns the list of all the OrdreEmissions
 *     tags: [OrdreEmissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                budget:
 *                  type: number
 *                trajet:
 *                  type: number
 *                camion:
 *                  type: string
 *                chauffeur:
 *                  type: string
 *                bonLivraison:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the OrdreEmissions
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
 *                    budget:
 *                      type: number
 *                    trajet:
 *                      type: number
 *                    camion:
 *                      type: string
 *                    chauffeur:
 *                      type: string
 *                    bonLivraison:
 *                      type: string
 *                    societeRacine:
 *                      type: string
 *
 */

router.post('/newOrdreEmission', async (req, res) => {

  var societe = ObjectId(req.body.societe)
  var exercice = req.body.exercice
  var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

  req.body.numero = numeroAutomatique.numero
  req.body.num = numeroAutomatique.num

  var body = req.body
  body.societe = ObjectId(body.societe)
  const ordreEmission = new OrdreEmission(body);

  const result = await ordreEmission.save()

  return res.send({ status: true, resultat: result })
})


/**
 * @swagger
 * /ordreEmissions/modifierOrdreEmission/{id}:
 *   post:
 *     summary: Update the OrdreEmission by id
 *     tags: [OrdreEmissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The OrdreEmission id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                budget:
 *                  type: number
 *                trajet:
 *                  type: number
 *                camion:
 *                  type: string
 *                chauffeur:
 *                  type: string
 *                bonLivraison:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the OrdreEmissions
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
 *                     budget:
 *                       type: number
 *                     trajet:
 *                       type: number
 *                     camion:
 *                       type: string
 *                     chauffeur:
 *                       type: string
 *                     bonLivraison:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *
 */

router.post('/modifierOrdreEmission/:id', async (req, res) => {

  const ordreEmission = await OrdreEmission.findById(req.params.id)

  if (!ordreEmission) return res.status(401).send({ status: false })

  const result = await OrdreEmission.findOneAndUpdate({ _id: req.params.id }, req.body)

  const ordreEmission2 = await OrdreEmission.findById(req.params.id)

  return res.send({ status: true, resultat: ordreEmission2 })
})

/**
 * @swagger
 * /ordreEmissions/deleteOrdreEmission/{id}:
 *   post:
 *     summary: Remove the OrdreEmission by id
 *     tags: [OrdreEmissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The OrdreEmission id
 *
 *     responses:
 *       200:
 *         description: The OrdreEmission was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The OrdreEmission was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteOrdreEmission/:id', async (req, res) => {

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const ordreEmission = await OrdreEmission.findById(req.params.id)

  if (!ordreEmission) return res.status(401).send({ status: false })


  if (await OrdreEmission.findOneAndDelete({ _id: req.params.id })) {
    return res.send({ status: true })
  } else {
    return res.send({ status: false })
  }

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
 * /ordreEmissions/listOrdreEmissions:
 *   post:
 *     summary: Returns the list of all the OrdreEmissions
 *     tags: [OrdreEmissions]
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
 *         description: The list of the OrdreEmissions
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
 *                            budget:
 *                              type: number
 *                            trajet:
 *                              type: number
 *                            camion:
 *                              type: string
 *                            chauffeur:
 *                              type: string
 *                            bonLivraison:
 *                              type: string
 *                            societeRacine:
 *                              type: string
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 *
 *
 */
router.post('/listOrdreEmissions', async (req, res) => {


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


  pipeline.push({ $match: { societe: societe } })

  pipeline.push({
    $lookup: {
      from: 'chauffeurs',
      let: { "chauffeur": "$chauffeur" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$chauffeur"] },
            ]
          }
        }
      }],
      as: "chauffeurs"
    }
  })

  pipeline.push({
    $set: {
      chauffeur: { $arrayElemAt: ["$chauffeurs.nom", 0] },
      id: "$_id",
      budget: { $toString: "$budget" },
      trajet: { $toString: "$trajet" },

    }
  })

  pipeline.push({
    $project: { 
      id: 1, 
      numero: 1, 
      budget: 1, 
      trajet: 1, 
      camion: 1, 
      chauffeur: 1, 
      bonLivraison: 1 }
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

  const articles = await OrdreEmission.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })


  var nbrTotal = await OrdreEmission.aggregate(sommePipeline)

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
 * /ordreEmissions/getById/{id}:
 *   get:
 *     summary: Remove the OrdreEmission by id
 *     tags: [OrdreEmissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The OrdreEmission id
 *
 *     responses:
 *       200:
 *         description: The OrdreEmission was deleted
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
 *                     budget:
 *                       type: number
 *                     trajet:
 *                       type: number
 *                     camion:
 *                       type: string
 *                     chauffeur:
 *                       type: string
 *                     bonLivraison:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The OrdreEmission was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const ordreEmission = await OrdreEmission.findOne({ _id: req.params.id })

  return res.send({ status: true, resultat: ordreEmission })

})

/**
 * @swagger
 * /ordreEmissions/getAllParametres:
 *   get:
 *     summary: Remove the OrdreEmission by id
 *     tags: [OrdreEmissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The OrdreEmission id
 * 
 *     responses:
 *       200:
 *         description: The OrdreEmission was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  bonLivraisons:
 *                    type: array         
 *       404:
 *         description: The OrdreEmission was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getAllParametres', async (req, res) => {
  var societe = ObjectId(req.body.societe)
  var exercice = req.body.exercice
  var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

  const bonLivraisons = await BonLivraison.find({ societe: societe })
  const chauffeurs = await Chauffeur.find({ societeRacine: societe })
  
  return res.send({ status: true, bonLivraisons: bonLivraisons, 
    numeroAutomatique: numeroAutomatique.numero, chauffeurs:chauffeurs})

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

module.exports.routerOrdreEmission = router
