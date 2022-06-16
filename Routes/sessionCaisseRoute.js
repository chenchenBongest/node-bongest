const { Caisse, validateCaisse } = require('../Models/caisseModel')
const { ChargeDirecte, validateChargeDirecte } = require('../Models/chargeDirecteModel')

const { Reglement } = require('../Models/reglementModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel');
const { SessionCaisse, getNumeroAutomatique, indexOf } = require('../Models/sessionCaisseModel');
const { Utilisateur } = require('../Models/utilisateurModel');
const { ChargeSociete } = require('../Models/chargeSocieteModel')
const { ModeReglement } = require('../Models/modeReglementModel')
const { any } = require('joi')
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
 *     SessionCaisse:
 *       type: object
 *       required:
 *         - libelle
 *         - societeRacine
 *       properties:
 *         libelle:
 *           type: string
 *         societeRacine:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: SessionCaisses
 *   description: The SessionCaisses managing API
 */


/**
 * @swagger
 * paths:
 *   /sessionCaisses/upload:
 *     post:
 *       summary: upload image
 *       tags: [SessionCaisses]
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
 * /sessionCaisses/newSessionCaisse:
 *   post:
 *     summary: Returns the list of all the SessionCaisses
 *     tags: [SessionCaisses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the SessionCaisses
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
 *                    libelle:
 *                      type: string
 *                    societeRacine:
 *                      type: string
 *
 */

router.post('/newSessionCaisse', async (req, res) => {

    //const {error}=validateSessionCaisse(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    req.body.numero = numeroAutomatique.numero
    req.body.num = numeroAutomatique.num

    var sessionCaisseU = await SessionCaisse.find({ societe: societe, utilisateur: req.body.utilisateur })

    var body = req.body

    if (sessionCaisseU.length == 0) {
        const sessionCaisse = new SessionCaisse(body);
        const result = await sessionCaisse.save()
        return res.send({ status: true, resultat: result })

    }
    if (sessionCaisseU[0].cloture == 'oui' || req.body.cloture == 'oui') {
        const result = "verifier"
        return res.send({ status: false, resultat: result })
    }
    else if (sessionCaisseU[0].cloture == 'non' && req.body.cloture == 'non') {

        const sessionCaisse = await SessionCaisse.findOneAndUpdate({ _id: sessionCaisseU[0].id }, body)

        const sessionCaisse2 = await SessionCaisse.findById(sessionCaisse.id)

        return res.send({ status: true, resultat: sessionCaisse2 })

    } 
})

/**
 * @swagger
 * /sessionCaisses/getAllParametres:
 *   get:
 *     summary: Remove the projet by id
 *     tags: [SessionCaisses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The projet id
 * 
 *     responses:
 *       200:
 *         description: The projet was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  sessionCaisses:
 *                    type: array         
 *       404:
 *         description: The projet was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getAllParametres', async (req, res) => {
    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societeRacine, exercice)

    const caisses = await Caisse.find({ societeRacine: societeRacine })
    const sessionCaisses = await SessionCaisse.find({ societeRacine: societeRacine })
    //ajouterrrr societe racine
    const utilisateurs = await Utilisateur.find({})
    const chargeSocietes = await ChargeSociete.find({ societeRacine: societeRacine })

    return res.send({
        status: true, caisses: caisses,
        numeroAutomatique: numeroAutomatique.numero,
        sessionCaisses: sessionCaisses, utilisateurs: utilisateurs,
        chargeSocietes: chargeSocietes
    })

})

router.post('/charges', async (req, res) => {
    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

    var sessionCaisse = (ObjectId(req.body.sessionCaisse))

    var listTotalRegl = req.body.listTotalRegl

    const chargeSocietes = await ChargeSociete.find({ societeRacine: societeRacine, sessionCaisse: sessionCaisse }).populate('modeReglement')
    
    const modeReglements = await ModeReglement.find({ societeRacine: societeRacine })

    var listCh = []
    var listReg = []

    for (let item of chargeSocietes) {
        listCh.push({
            typeOperation: item.modeReglement.libelle,
            charge: item.montant,
        })
    }

    for (let item of modeReglements) {
        listReg.push({
            typeOperation: item.libelle,
            solde: 0,
            charge: 0,
            retrait: 0,
            caisse: 0
        })
    }

    for (let item of listCh) {
        for (let item2 of listReg) {
            if (item.typeOperation == item2.typeOperation) {
                item2.charge += item.charge

            }
        }
    }

    let listCh2 = []
    for (let item of listTotalRegl) {
        listCh2.push({
            typeOperation: item.modeReglement,
            solde: item.debit - item.credit,
        })
    }

    for (let item of listCh2) {
        for (let item2 of listReg) {
            if (item.typeOperation == item2.typeOperation) {
                item2.solde += item.solde

            }
        }
    }

    for (let item of listReg) {
        item.caisse = item.solde - item.charge
    }

    return res.send({
        status: true, listReg: listReg,
    })

})

/**
 * @swagger
 * /sessionCaisses/modifierSessionCaisse/{id}:
 *   post:
 *     summary: Update the SessionCaisse by id
 *     tags: [SessionCaisses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SessionCaisse id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the SessionCaisses
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
 *                     libelle:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *
 *
 */

router.post('/modifierSessionCaisse/:id', async (req, res) => {

    // const {error}=validateSessionCaisse(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const sessionCaisse = await SessionCaisse.findById(req.params.id)

    if (!sessionCaisse) return res.status(401).send({ status: false })

    const result = await SessionCaisse.findOneAndUpdate({ _id: req.params.id }, req.body)

    const sessionCaisse2 = await SessionCaisse.findById(req.params.id)

    return res.send({ status: true, resultat: sessionCaisse2 })
})

/**
 * @swagger
 * /sessionCaisses/deleteSessionCaisse/{id}:
 *   post:
 *     summary: Remove the SessionCaisse by id
 *     tags: [SessionCaisses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SessionCaisse id
 *
 *     responses:
 *       200:
 *         description: The SessionCaisse was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The SessionCaisse was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteSessionCaisse/:id', async (req, res) => {

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const sessionCaisse = await SessionCaisse.findById(req.params.id)

    if (!sessionCaisse) return res.status(401).send({ status: false })


    if (await SessionCaisse.findOneAndDelete({ _id: req.params.id })) {
        return res.send({ status: true })
    } else {
        return res.send({ status: false })
    }

})

router.post('/reglements', async (req, res) => {
    var dateStart = new Date(req.body.dateStart)
    dateStart.setHours(0, 0, 0, 0);

    var dateEnd = new Date(req.body.dateEnd)
    dateEnd.setHours(23, 59, 59, 999);

    var societe = ObjectId(req.body.magasin)
    var sessionCaisse = ObjectId(req.body.sessionCaisse)

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

    pipeline.push({ $match: { dateReglement: { $lte: dateEnd, $gte: dateStart }, societe: societe, sessionCaisse:sessionCaisse } })

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
        $set: {
            modeReglement: { $arrayElemAt: ["$modereglements.libelle", 0] },

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
            typeReglement: 1,
            modeReglement: 1,
            tresorerie: 1,
            montant: 1,
            dateReglement: 1,
            numCheque: 1,
            dateEcheance: 1,
            notes: 1,
            reste: 1,
            numero: 1,
            sessionCaisse:1
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
 * /sessionCaisses/listSessionCaisses:
 *   post:
 *     summary: Returns the list of all the SessionCaisses
 *     tags: [SessionCaisses]
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
 *         description: The list of the SessionCaisses
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
 *                            libelle:
 *                              type: string
 *                            societeRacine:
 *                              type: string
 *                            order:
 *                              type: number
 *                            createdAt:
 *                              type: string
 *                            updatedAt:
 *                              type: string
 *
 *
 *
 */

router.post('/listSessionCaisses', async (req, res) => {

    //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})
    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

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

    pipeline.push({ $match: { societe: societeRacine } })

    pipeline.push({
        $lookup: {
            from: 'caisses',
            let: { "caisse": "$caisse" },
            pipeline: [{
                $match:
                {
                    $expr: {
                        "$and": [
                            { "$eq": ["$_id", "$$caisse"] },
                        ]
                    }
                }
            },
            ],
            as: "caisses"
        }
    })

    pipeline.push({
        $lookup: {
            from: 'utilisateurs',
            let: { "utilisateur": "$utilisateur" },
            pipeline: [{
                $match:
                {
                    $expr: {
                        "$and": [
                            { "$eq": ["$_id", "$$utilisateur"] },
                        ]
                    }
                }
            },
            ],
            as: "utilisateurs"
        }
    })

    pipeline.push({
        $set: {
            caisse: { $arrayElemAt: ["$caisses.libelle", 0] },
            utilisateur: { $arrayElemAt: ["$utilisateurs.nom", 0] },
            fondCaisseOuvrier: { $toString: "$fondCaisseOuvrier" },
            fondCaisseAdmin: { $toString: "$fondCaisseAdmin" },
            totalCaisse: { $toString: "$totalCaisse" },
            montantDifference: { $toString: "$montantDifference" },

            dateCloture: {
                $dateToString: {
                    format: "%Y-%m-%d", date: "$dateCloture"
                }
            },
            dateOuverture: {
                $dateToString: {
                    format: "%Y-%m-%d", date: "$dateOuverture"
                }
            },
            id: "$_id"
        }
    })

    pipeline.push({
        $project: {
            id: 1,
            caisse: 1,
            utilisateur: 1,
            numero: 1,
            dateOuverture: 1,
            cloture: 1,
            dateCloture: 1,
            fondCaisseOuvrier: 1,
            fondCaisseAdmin: 1,
            totalCaisse: 1,
            montantDifference: 1,
            remarque: 1,
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

    const articles = await SessionCaisse.aggregate(pipeline)

    sommePipeline.push({
        $count: "total"
    })

    var nbrTotal = await SessionCaisse.aggregate(sommePipeline)

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
 * /sessionCaisses/getById/{id}:
 *   get:
 *     summary: Remove the SessionCaisse by id
 *     tags: [SessionCaisses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SessionCaisse id
 *
 *     responses:
 *       200:
 *         description: The SessionCaisse was deleted
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
 *                     societeRacine:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The SessionCaisse was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

    if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

    const sessionCaisse = await SessionCaisse.findOne({ _id: req.params.id })

    return res.send({ status: true, resultat: sessionCaisse })

})

router.get('/utilisateur/:id', async (req, res) => {

    if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

    const sessionCaisse = await SessionCaisse.find({ utilisateur: req.params.id })
    if( sessionCaisse[0].cloture== 'non' || sessionCaisse.length == 0)
    {
        return res.send({ status: false, resultat: sessionCaisse })

    }else{
        return res.send({ status: true, resultat: sessionCaisse })
    }

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

module.exports.routerSessionCaisse = router
