const { Parametres } = require('../Models/parametresModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel')
var ObjectId = require('mongodb').ObjectID;
const { Exercice } = require('../Models/exerciceModel');
const { Utilisateur } = require('../Models/utilisateurModel');
const { UniteMesure } = require('../Models/uniteMesureModel');
const { ModeReglement } = require('../Models/modeReglementModel');
const { Client } = require('../Models/clientModel');

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
 *     Parametres:
 *       type: object
 *       required:
 *         - taux
 *       properties:
 *         taux:
 *           type: number
 */

/**
 * @swagger
 * tags:
 *   name: Parametres
 *   description: The parametres managing API
 */


/**
 * @swagger
 * paths:
 *   /parametres/upload:
 *     post:
 *       summary: upload image
 *       tags: [Parametres]
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
 * /parametres/newParametres:
 *   post:
 *     summary: Returns the list of all the parametres
 *     tags: [Parametres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                taux:
 *                  type: number
 *     responses:
 *       200:
 *         description: The list of the parametres
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
 *                    taux:
 *                      type: number
 *
 */

router.post('/setConfiguration', async (req, res) => {

    var body = req.body

    body.societeRacine = await getSocieteRacine(ObjectId(body.societe))

    const parametres = await Parametres.find({ societeRacine: body.societeRacine })

    var result = null

    if (body.clientPardefault == undefined || body.clientPardefault.length == 0 || body.clientPardefault == null) {
        body.clientPardefault = null
    }
    if (body.modeReglementPardefault == undefined || body.modeReglementPardefault.length == 0 || body.modeReglementPardefault == null) {
        body.modeReglementPardefault = null
    }
    if (body.uniteMesurePardefault == undefined || body.uniteMesurePardefault.length == 0 || body.uniteMesurePardefault == null) {
        body.uniteMesurePardefault = null
    }


    if (parametres.length > 0) {
        result = await Parametres.findOneAndUpdate({ _id: parametres[0].id }, body)
        result = await Parametres.findOne({ _id: parametres[0].id })
    }else {
        const parametres = new Parametres(body)
        result = await parametres.save()
    }

    return res.send({ status: true, resultat: result })
})


router.get('/getConfiguration/:societe', async (req, res) => {

    let societe = req.params.societe

    if (societe == undefined || societe == null || societe == "") {
        var parametresParDefaut = {
            nombreChiffresApresVerguleNormale: 3,
            nombreChiffresApresVerguleQuantite: 3,
            prixTimbreFiscale: 0.6,
            tauxFodec: 1,
            coefficientRetenueImpot: 1.5,
            clientPardefault: "",
            modeReglementPardefault: "",
            uniteMesurePardefault: "",
            validationUpdatePrixAchatFromBonAchat: "non",
            paramatresImportationArticle: "{}"
        }
        return res.send({ status: true, resultat: parametresParDefaut, exercices: [] })
    }

    var societeRacine = await getSocieteRacine(ObjectId(societe))

    const parametres = await Parametres.find({ societeRacine: societeRacine })
    const exercices = await Exercice.find({ societeRacine: societeRacine, isEnCours: "oui" })

    if (parametres.length > 0) {
        return res.send({ status: true, resultat: parametres[0], exercices: exercices })
    } else {
        var parametresParDefaut = {
            nombreChiffresApresVerguleNormale: 3,
            nombreChiffresApresVerguleQuantite: 3,
            prixTimbreFiscale: 0.6, tauxFodec: 1,
            coefficientRetenueImpot: 1.5,
            clientPardefault: "",
            modeReglementPardefault: "",
            uniteMesurePardefault: "",
            validationUpdatePrixAchatFromBonAchat: "non",
            paramatresImportationArticle: "{}"
        }
        return res.send({ status: true, resultat: parametresParDefaut, exercices: exercices })
    }

})



/**
 * @swagger
 * /parametres/getById/{id}:
 *   get:
 *     summary: Remove the parametres by id
 *     tags: [Parametres]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The parametres id
 *
 *     responses:
 *       200:
 *         description: The parametres was deleted
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
 *                     taux:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The parametres was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getConfiguration', async (req, res) => {

    let societe = req.body.societe
    let idUserCurrent = req.body.idUserCurrent

    var user = {}

    if (idUserCurrent != undefined && idUserCurrent != null || idUserCurrent == "") {
        user = await Utilisateur.findOne({ _id: idUserCurrent }).populate('role')
        if (user != null) {
            user.password = undefined
        }
    }

    if (societe == undefined || societe == null || societe == "") {
        var parametresParDefaut = {
            nombreChiffresApresVerguleNormale: 3,
            nombreChiffresApresVerguleQuantite: 3,
            prixTimbreFiscale: 0.6, tauxFodec: 1,
            coefficientRetenueImpot: 1.5,
            clientPardefault: "",
            modeReglementPardefault: "",
            uniteMesurePardefault: "",
            validationUpdatePrixAchatFromBonAchat: "non",
            paramatresImportationArticle: "{}"
        }
        return res.send({ status: true, resultat: parametresParDefaut, exercices: [], user: user })
    }

    var societeRacine = await getSocieteRacine(ObjectId(societe))

    const parametres = await Parametres.find({ societeRacine: societeRacine })
    const exercices = await Exercice.find({ societeRacine: societeRacine, isEnCours: "oui" })
    if (parametres.length > 0) {
        return res.send({ status: true, resultat: parametres[0], exercices: exercices, user: user })
    } else {
        var parametresParDefaut = {
            nombreChiffresApresVerguleNormale: 3,
            nombreChiffresApresVerguleQuantite: 3,
            prixTimbreFiscale: 0.6, tauxFodec: 1,
            coefficientRetenueImpot: 1.5,
            clientPardefault: "",
            modeReglementPardefault: "",
            uniteMesurePardefault: "",
            validationUpdatePrixAchatFromBonAchat: "non",
            paramatresImportationArticle: "{}"
        }
        return res.send({ status: true, resultat: parametresParDefaut, exercices: exercices, user: user })
    }

})


router.get('/getAllParametres/:id', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.params.id))

    const uniteMesures = await UniteMesure.find({ societeRacine: societeRacine })
    const modereglements = await ModeReglement.find({ societeRacine: societeRacine })
    const clients = await Client.find({ societeRacine: societeRacine }).select({ id: 1, code: 1, raisonSociale: 1, matriculeFiscale: 1 })

    return res.send({ status: true, uniteMesures: uniteMesures, clients: clients, modereglements: modereglements })

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

module.exports.routerParametres = router
