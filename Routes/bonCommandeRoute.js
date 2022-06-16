const { BonCommande, getNumeroAutomatique } = require('../Models/bonCommandeModel')
const { BonCommandeArticle } = require('../Models/bonCommandeArticleModel')

const { Article, getArticlesWithQuantites, getArticlesWithQuantitesfilterBySearch } = require('../Models/articleModel')
const { Fournisseur } = require('../Models/fournisseurModel')

const { ArticleSociete, updateQteEnStock, updateQteTherique, updateQteTheriqueQteEnStock } = require('../Models/articleSocieteModel')
var ObjectId = require('mongodb').ObjectID;
const { UniteMesure, validateUniteMesure } = require('../Models/uniteMesureModel')

const { HistoriqueArticleAchat } = require('../Models/historiqueArticleAchatModel')
const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')

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
 *     BonCommande:
 *       type: object
 *       required:
 *         - numero
 *         - date
 *         - tiers
 *         - plafondCredit
 *         - credit
 *         - restPayer
 *         - montantPaye
 *         - totalRedevance
 *         - totalFodec
 *         - escompte
 *         - montantEscompte
 *         - totalRemise
 *         - totalDC
 *         - totaleHT
 *         - totalTVA
 *         - tFiscale
 *         - totalTTC
 *         - totalGain
 *         - ligneBLs
 *       properties:
 *         numero:
 *           type: string
 *         date:
 *           type: string
 *         tiers:
 *           type: string
 *         plafondCredit:
 *           type: number
 *         credit:
 *           type: number
 *         restPayer:
 *           type: number
 *         montantPaye:
 *           type: number
 *         totalRedevance:
 *           type: number
 *         totalFodec:
 *           type: number
 *         escompte:
 *           type: number
 *         montantEscompte:
 *           type: number
 *         totalRemise:
 *           type: number
 *         totalDC:
 *           type: number
 *         totaleHT:
 *           type: number
 *         totalTVA:
 *           type: number
 *         tFiscale:
 *           type: number
 *         totalTTC:
 *           type: number
 *         totalGain:
 *           type: number 
 *         ligneBLs:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               article:
 *                 type: string
 *               numero:
 *                 type: number
 *               reference:
 *                 type: string
 *               designation:
 *                 type: string
 *               prixHT:
 *                 type: number
 *               tauxRemise:
 *                 type: number
 *               montantRemise:
 *                 type: number
 *               prixAchat:
 *                 type: number
 *               quantite:
 *                 type: number
 *               unite:
 *                 type: string
 *               totalRemise:
 *                 type: number
 *               totalHt:
 *                 type: number
 *               tauxTVA:
 *                 type: number
 *               totalTVA:
 *                 type: number
 *               redevance:
 *                 type: number
 *               totalTTC:
 *                 type: number 
 *         
 */

/**
 * @swagger
 * tags:
 *   name: BonCommandes
 *   description: The BonCommandes managing API
 */


/**
 * @swagger
 * paths:
 *   /bonCommandes/upload:
 *     post:
 *       summary: upload image
 *       tags: [BonCommandes]
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
 * /bonCommandes/newBonCommande:
 *   post:
 *     summary: Returns the list of all the BonCommandes
 *     tags: [BonCommandes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                numero:
 *                  type: string
 *                date:
 *                  type: string
 *                tiers:
 *                  type: string
 *                plafondCredit:
 *                  type: number
 *                credit:
 *                  type: number
 *                restPayer:
 *                  type: number
 *                montantPaye:
 *                  type: number
 *                totalRedevance:
 *                  type: number
 *                totalFodec:
 *                  type: number
 *                escompte:
 *                  type: number
 *                montantEscompte:
 *                  type: number
 *                totalRemise:
 *                  type: number
 *                totalDC:
 *                  type: number
 *                totaleHT:
 *                  type: number
 *                totalTVA:
 *                  type: number
 *                tFiscale:
 *                  type: number
 *                totalTTC:
 *                  type: number
 *                totalGain:
 *                  type: number
 *                ligneBLs:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      article:
 *                        type: string
 *                      numero:
 *                        type: number
 *                      reference:
 *                        type: string
 *                      designation:
 *                        type: string
 *                      prixHT:
 *                        type: number
 *                      tauxRemise:
 *                        type: number
 *                      montantRemise:
 *                        type: number
 *                      prixAchat:
 *                        type: number
 *                      quantite:
 *                        type: number
 *                      unite:
 *                        type: string
 *                      totalRemise:
 *                        type: number
 *                      totalHt:
 *                        type: number
 *                      tauxTVA:
 *                        type: number
 *                      totalTVA:
 *                        type: number
 *                      redevance:
 *                        type: number
 *                      totalTTC:
 *                        type: number 
 *     responses:
 *       200:
 *         description: The list of the BonCommandes
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
 *                    numero:
 *                      type: string
 *                    date:
 *                      type: string
 *                    tiers:
 *                      type: string
 *                    plafondCredit:
 *                      type: number
 *                    credit:
 *                      type: number
 *                    restPayer:
 *                      type: number
 *                    montantPaye:
 *                      type: number
 *                    totalRedevance:
 *                      type: number
 *                    totalFodec:
 *                      type: number
 *                    escompte:
 *                      type: number
 *                    montantEscompte:
 *                      type: number
 *                    totalRemise:
 *                      type: number
 *                    totalDC:
 *                      type: number
 *                    totaleHT:
 *                      type: number
 *                    totalTVA:
 *                      type: number
 *                    tFiscale:
 *                      type: number
 *                    totalTTC:
 *                      type: number
 *                    totalGain:
 *                      type: number
 *                    ligneBLs:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          article:
 *                            type: string
 *                          numero:
 *                            type: number
 *                          reference:
 *                            type: string
 *                          designation:
 *                            type: string
 *                          prixHT:
 *                            type: number
 *                          tauxRemise:
 *                            type: number
 *                          montantRemise:
 *                            type: number
 *                          prixAchat:
 *                            type: number
 *                          quantite:
 *                            type: number
 *                          unite:
 *                            type: string
 *                          totalRemise:
 *                            type: number
 *                          totalHt:
 *                            type: number
 *                          tauxTVA:
 *                            type: number
 *                          totalTVA:
 *                            type: number
 *                          redevance:
 *                            type: number
 *                          totalTTC:
 *                            type: number 
 *
 */
router.post('/newBonCommande', async (req, res) => {

    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    req.body.numero = numeroAutomatique.numero
    req.body.num = numeroAutomatique.num

    const bonCommande = new BonCommande(req.body);

    const result = await bonCommande.save()


    for (let i = 0; i < req.body.articles.length; i++) {
        let item = new BonCommandeArticle(req.body.articles[i])
        if (bonCommande.isValid == 'oui') {
            await updateQteTherique(req.body.articles[i], "plus")
        }
        item.bonCommande = result.id
        item.date = result.date
        const resul = item.save()

    }
   
    for(let i of req.body.articles)
    {
      const historiqueArticleAchat = new HistoriqueArticleAchat()
      historiqueArticleAchat.idArticle = i.article
      historiqueArticleAchat.reference = i.reference
      historiqueArticleAchat.designation = i.designation
      historiqueArticleAchat.date = req.body.date
      historiqueArticleAchat.numero = req.body.numero
      historiqueArticleAchat.nomFournisseur = req.body.fournisseur
      historiqueArticleAchat.quantite = i.quantiteVente
      historiqueArticleAchat.prixVenteHT = i.prixVenteHT
      historiqueArticleAchat.totalTTC = req.body.totalTTC
      historiqueArticleAchat.typeDocument = "Bon Commande"
      historiqueArticleAchat.societeRacine = req.body.societe

      await historiqueArticleAchat.save()
    }

    return res.send({ status: true, resultat: result })

})


/**
 * @swagger
 * /bonCommandes/modifierBonCommande/{id}:
 *   post:
 *     summary: Update the bonCommande by id
 *     tags: [BonCommandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCommande id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                id:
 *                 type: string
 *                numero:
 *                 type: string
 *                date:
 *                 type: string
 *                tiers:
 *                 type: string
 *                plafondCredit:
 *                 type: number
 *                credit:
 *                 type: number
 *                restPayer:
 *                 type: number
 *                montantPaye:
 *                 type: number
 *                totalRedevance:
 *                 type: number
 *                totalFodec:
 *                 type: number
 *                escompte:
 *                 type: number
 *                montantEscompte:
 *                 type: number
 *                totalRemise:
 *                 type: number
 *                totalDC:
 *                 type: number
 *                totaleHT:
 *                 type: number
 *                totalTVA:
 *                 type: number
 *                tFiscale:
 *                 type: number
 *                totalTTC:
 *                 type: number
 *                totalGain:
 *                 type: number
 *                ligneBLs:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                      article:
 *                        type: string
 *                      numero:
 *                        type: number
 *                      reference:
 *                        type: string
 *                      designation:
 *                        type: string
 *                      prixHT:
 *                        type: number
 *                      tauxRemise:
 *                        type: number
 *                      montantRemise:
 *                        type: number
 *                      prixAchat:
 *                        type: number
 *                      quantite:
 *                        type: number
 *                      unite:
 *                        type: string
 *                      totalRemise:
 *                        type: number
 *                      totalHt:
 *                        type: number
 *                      tauxTVA:
 *                        type: number
 *                      totalTVA:
 *                        type: number
 *                      redevance:
 *                        type: number
 *                      totalTTC:
 *                        type: number 
 *     responses:
 *       200:
 *         description: The list of the BonCommandes
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
 *                     numero:
 *                      type: string
 *                     date:
 *                      type: string
 *                     tiers:
 *                      type: string
 *                     plafondCredit:
 *                      type: number
 *                     credit:
 *                      type: number
 *                     restPayer:
 *                      type: number
 *                     montantPaye:
 *                      type: number
 *                     totalRedevance:
 *                      type: number
 *                     totalFodec:
 *                      type: number
 *                     escompte:
 *                      type: number
 *                     montantEscompte:
 *                      type: number
 *                     totalRemise:
 *                      type: number
 *                     totaleHT:
 *                      type: number
 *                     totalTVA:
 *                      type: number
 *                     tFiscale:
 *                      type: number
 *                     totalTTC:
 *                      type: number
 *                     totalGain:
 *                      type: number
 *                     ligneBLs:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          article:
 *                            type: string
 *                          numero:
 *                            type: number
 *                          reference:
 *                            type: string
 *                          designation:
 *                            type: string
 *                          prixHT:
 *                            type: number
 *                          tauxRemise:
 *                            type: number
 *                          montantRemise:
 *                            type: number
 *                          prixAchat:
 *                            type: number
 *                          quantite:
 *                            type: number
 *                          unite:
 *                            type: string
 *                          totalRemise:
 *                            type: number
 *                          totalHt:
 *                            type: number
 *                          tauxTVA:
 *                            type: number
 *                          totalTVA:
 *                            type: number
 *                          redevance:
 *                            type: number
 *                          totalTTC:
 *                            type: number 
 *
 *
 */

router.post('/modifierBonCommande/:id', async (req, res) => {

    const bonCommande = await BonCommande.findById(req.params.id)

    if (!bonCommande) return res.status(401).send({ status: false })


    const result = await BonCommande.findOneAndUpdate({ _id: req.params.id }, req.body)

    const bonCommande2 = await BonCommande.findById(req.params.id)

    const bonCommandeArticles = await BonCommandeArticle.find({ bonCommande: req.params.id })

    for (let i = 0; i < bonCommandeArticles.length; i++) {
        if (bonCommande.isValid == 'oui') {
            await updateQteTherique(bonCommandeArticles[i], "moin")
        }
            const deleteItem = await BonCommandeArticle.findOneAndDelete({ _id: bonCommandeArticles[i].id })
       
    }

    for (let i = 0; i < req.body.articles.length; i++) {
        if (req.body.isValid == 'oui') {
            await updateQteTherique(req.body.articles[i], "plus")
        }
            let item = new BonCommandeArticle(req.body.articles[i])
            item.bonCommande = result.id
            item.date = result.date
            const resul = item.save()
        
    }
    return res.send({ status: true, resultat: bonCommande2 })
})


/**
 * @swagger
 * /bonCommandes/addExpedition/{id}:
 *   post:
 *     summary: Update the bonCommande by id
 *     tags: [BonCommandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCommande id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                transporteur:
 *                  type: string
 *                date:
 *                  type: string
 *                articles:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      numero:
 *                        type: number
 *                      article:
 *                        type: string
 *                      reference:
 *                        type: string
 *                      designation:
 *                        type: string
 *                      quantiteAchat:
 *                        type: number
 *                      quantiteALivree:
 *                        type: number
 *                      quantiteRestant:
 *                        type: number
 *                      unite:
 *                        type: string 
 *     responses:
 *       200:
 *         description: The list of the BonCommandes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 resultat:
 *                   type: array
 *
 */

router.post('/addReception/:id', async (req, res) => {

    const bonCommande = await BonCommande.findById(req.params.id)

    if (!bonCommande) return res.status(401).send({ status: false })


    var receptions = []

    receptions.push(req.body)

    for (let i = 0; i < bonCommande.receptions.length; i++) {
        receptions.push(bonCommande.receptions[i])
    }

    const result = await BonCommande.findOneAndUpdate({ _id: req.params.id }, { receptions: receptions })

    const bonCommande2 = await BonCommande.findById(req.params.id)

    return res.send({ status: true, resultat: bonCommande2.receptions })
})


/**
 * @swagger
 * /bonCommandes/deleteBonCommande/{id}:
 *   post:
 *     summary: Remove the bonCommande by id
 *     tags: [BonCommandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bonCommande id
 *
 *     responses:
 *       200:
 *         description: The bonCommande was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The bonCommande was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteBonCommande/:id', async (req, res) => {

    const bonCommande = await BonCommande.findById(req.params.id)

    if (!bonCommande) return res.status(401).send({ status: false })


    const bonCommandeArticles = await BonCommandeArticle.find({ bonCommande: req.params.id })

    for (let i = 0; i < bonCommandeArticles.length; i++) {
        if (bonCommande.isValid == 'oui') {
            await updateQteTherique(bonCommandeArticles[i], "moin")
        }
            const deleteItem = await BonCommandeArticle.findOneAndDelete({ _id: bonCommandeArticles[i].id })
       
    }

    if (await BonCommande.findOneAndDelete({ _id: req.params.id })) {
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
 * /bonCommandes/listBonCommandes:
 *   post:
 *     summary: Returns the list of all the bonCommandes
 *     tags: [BonCommandes]
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
 *         description: The list of the bonCommandes
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
 *                            numero:
 *                              type: string
 *                            date:
 *                              type: string
 *                            tiers:
 *                              type: number
 *                            plafondCredit:
 *                              type: number
 *                            credit:
 *                              type: number
 *                            restPayer:
 *                              type: number
 *                            montantPaye:
 *                              type: number
 *                            totalRedevance:
 *                              type: number
 *                            totalFodec:
 *                              type: number
 *                            escompte:
 *                              type: number
 *                            montantEscompte:
 *                              type: number
 *                            totalRemise:
 *                              type: number
 *                            totalDC:
 *                              type: number
 *                            totaleHT:
 *                              type: number
 *                            totalTVA:
 *                              type: number
 *                            tFiscale:
 *                              type: number
 *                            totalTTC:
 *                              type: number
 *                            totalGain:
 *                              type: number
 *                            ligneBLs:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  article:
 *                                    type: string
 *                                  numero:
 *                                    type: number
 *                                  reference:
 *                                    type: string
 *                                  designation:
 *                                    type: string
 *                                  prixHT:
 *                                    type: number
 *                                  tauxRemise:
 *                                    type: number
 *                                  montantRemise:
 *                                    type: number
 *                                  prixAchat:
 *                                    type: number
 *                                  quantite:
 *                                    type: number
 *                                  unite:
 *                                    type: string
 *                                  totalRemise:
 *                                    type: number
 *                                  totalHt:
 *                                    type: number
 *                                  tauxTVA:
 *                                    type: number
 *                                  totalTVA:
 *                                    type: number
 *                                  redevance:
 *                                    type: number
 *                                  totalTTC:
 *                                    type: number 
 *                                  createdAt:
 *                                    type: string
 *                                  updatedAt:
 *                                    type: string
 *
 *
 *
 */

router.post('/listBonCommandes', async (req, res) => {

    var dateStart = new Date(req.body.dateStart)
    var dateEnd = new Date(req.body.dateEnd)
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

    pipeline.push({ $match: { date: { $lte: dateEnd, $gte: dateStart }, societe: societe } })

    pipeline.push({
        $lookup: {
            from: 'fournisseurs',
            let: { "fournisseur": "$fournisseur" },
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
            totalRemise: { $toString: "$totalRemise" },
            totalHT: { $toString: "$totalHT" },
            totalTVA: { $toString: "$totalTVA" },
            tFiscale: { $toString: "$timbreFiscale" },
            totalTTC: { $toString: "$totalTTC" },
            totalGain: { $toString: "$totalGain" },

            date: {
                $dateToString: {
                    format: "%Y-%m-%d", date: "$date"
                }
            },
            id: "$_id"
        }
    })

    pipeline.push({
        $project: {
            id: 1,
            fournisseur: 1,
            totalRemise: 1,
            totalHT: 1,
            totalTVA: 1,
            tFiscale: 1,
            totalTTC: 1,
            totalGain: 1,
            date: 1,
            numero: 1,
            transfertBonAchat: 1,
            isTransfert: 1,
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

    const articles = await BonCommande.aggregate(pipeline)

    sommePipeline.push({
        $count: "total"
    })

    var nbrTotal = await BonCommande.aggregate(sommePipeline)

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
 * /bonCommandes/getById/{id}:
 *   get:
 *     summary: Remove the bonCommande by id
 *     tags: [BonCommandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bonCommande id
 *
 *     responses:
 *       200:
 *         description: The bonCommande was deleted
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
 *                     numero:
 *                       type: string
 *                     date:
 *                       type: string
 *                     tiers:
 *                       type: string
 *                     plafondCredit:
 *                       type: number
 *                     credit:
 *                       type: number
 *                     restPayer:
 *                       type: number
 *                     montantPaye:
 *                       type: number
 *                     totalRedevance:
 *                       type: number
 *                     totalFodec:
 *                       type: number
 *                     escompte:
 *                       type: number
 *                     montantEscompte:
 *                       type: number
 *                     totalRemise:
 *                       type: number
 *                     totalDC:
 *                       type: number
 *                     totaleHT:
 *                       type: number
 *                     totalTVA:
 *                       type: number
 *                     tFiscale:
 *                       type: number
 *                     totalTTC:
 *                       type: number
 *                     totalGain:
 *                       type: number
 *                     ligneBLs:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          article:
 *                            type: string
 *                          numero:
 *                            type: number
 *                          reference:
 *                            type: string
 *                          designation:
 *                            type: string
 *                          prixHT:
 *                            type: number
 *                          tauxRemise:
 *                            type: number
 *                          montantRemise:
 *                            type: number
 *                          prixAchat:
 *                            type: number
 *                          quantite:
 *                            type: number
 *                          unite:
 *                            type: number
 *                          totalRemise:
 *                            type: number
 *                          totalHt:
 *                            type: number
 *                          tauxTVA:
 *                            type: number
 *                          totalTVA:
 *                            type: number
 *                          redevance:
 *                            type: number
 *                          totalTTC:
 *                            type: number 
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The bonCommande was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

    if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

    var bonCommande = await BonCommande.findOne({ _id: req.params.id })

    const bonCommandeArticles = await BonCommandeArticle.find({ bonCommande: req.params.id })

    return res.send({ status: true, resultat: bonCommande, articles: bonCommandeArticles })

})


/**
 * @swagger
 * /bonCommandes/getAllParametres:
 *   get:
 *     summary: Remove the article by id
 *     tags: [BonCommandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 * 
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
 *                  article:
 *                    type: array          
 *       404:
 *         description: The bl was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getAllParametres', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    const articles = await getArticlesWithQuantitesfilterBySearch(societe, societeRacine, {enAchat:'oui'})  
    const clients = await Fournisseur.find({ societeRacine: societeRacine })
    const uniteMesures = await UniteMesure.find({ societeRacine: societeRacine })

    return res.send({ status: true, uniteMesures: uniteMesures, articles: articles, clients: clients, numeroAutomatique: numeroAutomatique.numero })
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
module.exports.routerBonCommande = router
