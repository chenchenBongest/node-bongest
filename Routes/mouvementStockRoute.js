const { MouvementStock, rechercheIndice, findByArticle, regrouperArticles, filter } = require('../Models/mouvementStockModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')
const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel');
const { BonAchat } = require('../Models/bonAchatModel');
const { BonTransfert } = require('../Models/bonTransfertModel');
const { Article } = require('../Models/articleModel');
const { ArticleSociete } = require('../Models/articleSocieteModel');
const { BonLivraison } = require('../Models/bonLivraisonModel');
const { BonLivraisonArticle } = require('../Models/bonLivraisonArticleModel');
const { BonRetourFournisseurArticle } = require('../Models/bonRetourFournisseurArticleModel');
const { BonRetourClient } = require('../Models/bonRetourClientModel');
const { BonRetourFournisseur } = require('../Models/bonRetourFournisseurModel');
const { BonCasse } = require('../Models/bonCasseModel');
const { BonCasseArticle } = require('../Models/bonCasseArticleModel');
const { BonAchatArticle } = require('../Models/bonAchatArticleModel');
const { Fournisseur } = require('../Models/fournisseurModel');
const { Client } = require('../Models/clientModel');
const { BonRetourClientArticle } = require('../Models/bonRetourClientArticleModel');
const { BonTransfertArticle } = require('../Models/bonTransfertArticleModel');
var ObjectId = require('mongodb').ObjectID;

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
 *     MouvementStock:
 *       type: object
 *       required:
 *         - libelle
 *       properties:
 *         libelle:
 *           type: string
 *         ordre:
 *           type: number
 *         valeurRetiree:
 *           type: number
 *         tierNecessaire:
 *           type: string
 *         plan:
 *           type: string
 * 
 */

/**
 * @swagger
 * tags:
 *   name: MouvementStocks
 *   description: The MouvementStocks managing API
 */


/**
 * @swagger
 * paths:
 *   /mouvementStocks/upload:
 *     post:
 *       summary: upload image
 *       tags: [MouvementStocks]
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
 * /mouvementStocks/newMouvementStock:
 *   post:
 *     summary: Returns the list of all the MouvementStocks
 *     tags: [MouvementStocks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                ordre:
 *                  type: number
 *                valeurRetiree:
 *                  type: number
 *                tierNecessaire:
 *                  type: string
 *                plan:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the MouvementStocks
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
 *                    ordre:
 *                      type: number
 *                    valeurRetiree:
 *                      type: number
 *                    tierNecessaire:
 *                      type: string
 *                    plan:
 *                      type: string
 *
 */
router.post('/newMouvementStock', async (req, res) => {

    //const {error}=validateMouvementStock(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    var body = req.body

    body.societeRacine = await getSocieteRacine(ObjectId(body.societe))

    const mouvementStock = new MouvementStock(body);

    const result = await mouvementStock.save()


    return res.send({ status: true, resultat: result })
})


/**
 * @swagger
 * /mouvementStocks/modifierMouvementStock/{id}:
 *   post:
 *     summary: Update the MouvementStock by id
 *     tags: [MouvementStocks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MouvementStock id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                ordre:
 *                  type: number
 *                valeurRetiree:
 *                  type: number
 *                tierNecessaire:
 *                  type: string
 *                plan:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the MouvementStocks
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
 *                     ordre:
 *                       type: number
 *                     valeurRetiree:
 *                       type: number
 *                     tierNecessaire:
 *                       type: string
 *                     plan:
 *                       type: string
 *
 *
 */

router.post('/modifierMouvementStock/:id', async (req, res) => {

    // const {error}=validateMouvementStock(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const mouvementStock = await MouvementStock.findById(req.params.id)

    if (!mouvementStock) return res.status(401).send({ status: false })

    const result = await MouvementStock.findOneAndUpdate({ _id: req.params.id }, req.body)

    const mouvementStock2 = await MouvementStock.findById(req.params.id)

    return res.send({ status: true, resultat: mouvementStock2 })
})

/**
 * @swagger
 * /mouvementStocks/deleteMouvementStock/{id}:
 *   post:
 *     summary: Remove the MouvementStock by id
 *     tags: [MouvementStocks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MouvementStock id
 *
 *     responses:
 *       200:
 *         description: The MouvementStock was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The MouvementStock was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteMouvementStock/:id', async (req, res) => {

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const mouvementStock = await MouvementStock.findById(req.params.id)

    if (!mouvementStock) return res.status(401).send({ status: false })


    if (await MouvementStock.findOneAndDelete({ _id: req.params.id })) {
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
 * /mouvementStocks/listMouvementStocks:
 *   post:
 *     summary: Returns the list of all the MouvementStocks
 *     tags: [MouvementStocks]
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
 *         description: The list of the MouvementStocks
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
router.post('/listMouvementStocks', async (req, res) => {

    var dateStart = new Date()
    var dateEnd = new Date()

    if (req.body.dateStart) {
        dateStart = new Date(req.body.dateStart)
    }
    if (req.body.dateEnd) {
        dateEnd = new Date(req.body.dateEnd)
    }

    var societeRacine = await getSocieteRacine(ObjectId(req.body.magasin))

    var typeOp = req.body.typeOp

    var article = req.body.article

    listGlobal = []
    if (typeOp == "entree") {
        const bonAchats = await BonAchat.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

        const bonRetourClients = await BonRetourClient.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

        const bontransferts = await BonTransfert.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

        for (let item of bonAchats) {
            let fournBA = await Fournisseur.findById({ _id: item.fournisseur })

            let articleBA = await BonAchatArticle.find({ bonAchat: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBA, article)

                articleBA = test
            }

            for (let itemA of articleBA) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Entree", codeTiers: fournBA.code, raisonSocial: fournBA.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: itemA.quantiteAchat, qteSortie: 0 })
            }
        }

        for (let item of bonRetourClients) {
            let clientBR = await Client.findById({ _id: item.client })

            let articleBR = await BonRetourClientArticle.find({ bonRetourClient: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBR, article)

                articleBR = test
            }

            for (let itemA of articleBR) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Entree", codeTiers: clientBR.code, raisonSocial: clientBR.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: itemA.quantiteVente, qteSortie: 0 })
            }
        }

        for (let item of bontransferts) {
            let societeDes = await Societe.findById({ _id: item.magasinArrive })

            let articleBT = await BonTransfertArticle.find({ bonTransfert: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBT, article)

                articleBT = test
            }

            for (let itemA of articleBT) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Entree", codeTiers: "", raisonSocial: societeDes.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: itemA.quantiteVente, qteSortie: 0 })
            }
        }

    } else {
        const bonLivs = await BonLivraison.find({ date: { $gte: dateStart, $lte: dateEnd } })

        const bonRetourFournisseurs = await BonRetourFournisseur.find({ date: { $gte: dateStart, $lte: dateEnd } })

        const bontransferts = await BonTransfert.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

        const bonCasses = await BonCasse.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

        for (let item of bonLivs) {
            let clientBL = await Client.findById({ _id: item.client })

            let articleBL = await BonLivraisonArticle.find({ bonLivraison: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBL, article)

                articleBL = test
            }

            for (let itemA of articleBL) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Sortie", codeTiers: clientBL.code, raisonSocial: clientBL.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: 0, qteSortie: itemA.quantiteVente })
            }
        }

        for (let item of bonRetourFournisseurs) {
            let fournBR = await Fournisseur.findById({ _id: item.fournisseur })

            let articleBR = await BonRetourFournisseurArticle.find({ bonRetourFournisseur: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBR, article)

                articleBR = test
            }

            for (let itemA of articleBR) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Sortie", codeTiers: fournBR.code, raisonSocial: fournBR.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: 0, qteSortie: itemA.quantiteVente })
            }
        }

        for (let item of bontransferts) {
            let societeSourc = await Societe.findById({ _id: item.magasinDepart })

            let articleBT = await BonTransfertArticle.find({ bonTransfert: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let test = await findByArticle(articleBT, article)

                articleBT = test
            }

            for (let itemA of articleBT) {
                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Sortie", codeTiers: "", raisonSocial: societeSourc.raisonSociale, reference: itemA.reference, designation: itemA.designation, qteEntree: 0, qteSortie: itemA.quantiteVente })
            }
        }

        for (let item of bonCasses) {

            let articleBC = await BonCasseArticle.find({ bonCasse: item._id, societe: societeRacine })

            if (article.categorie.length > 0 || article.sousArticle.length > 0) {

                let listArticles = await findByArticle(articleBC, article)

                articleBC = listArticles
            }

            for (let itemA of articleBC) {

                listGlobal.push({ date: item.date, numero: item.numero, typeMVT: "Sortie", codeTiers: "", raisonSocial: "", reference: itemA.reference, designation: itemA.designation, qteEntree: 0, qteSortie: itemA.quantiteVente })
            }

        }
    }

    return res.send({ status: true, listGlobal: listGlobal })

})

/**
 * @swagger
 * /mouvementStocks/rappelStock:
 *   post:
 *     summary: Returns the list of all the MouvementStocks
 *     tags: [MouvementStocks]
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
 *         description: The list of the MouvementStocks
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
router.post('/rappelStock', async (req, res) => {

    var dateStart = new Date()
    var dateEnd = new Date()

    if (req.body.dateStart) {
        dateStart = new Date(req.body.dateStart)
    }
    if (req.body.dateEnd) {
        dateEnd = new Date(req.body.dateEnd)
    }

    var societeRacine = await getSocieteRacine(ObjectId(req.body.magasin))

    var article = req.body.article

    listGlobal = []

    const bonAchats = await BonAchat.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    const bonRetourClients = await BonRetourClient.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    const bontransferts = await BonTransfert.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    const bonLivs = await BonLivraison.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    const bonRetourFournisseurs = await BonRetourFournisseur.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    const bonCasses = await BonCasse.find({ date: { $gte: dateStart, $lte: dateEnd }, societe: societeRacine })

    for (let item of bonAchats) {
        let articleBA = await BonAchatArticle.find({ bonAchat: item._id, societe: societeRacine })

        for (let itemA of articleBA) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: itemA.quantiteAchat, qteSortie: 0, qteStock: 0 })

        }
    }

    for (let item of bonRetourClients) {

        let articleBR = await BonRetourClientArticle.find({ bonRetourClient: item._id, societe: societeRacine })

        for (let itemA of articleBR) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: itemA.quantiteVente, qteSortie: 0, qteStock: 0 })

        }
    }

    for (let item of bontransferts) {

        let articleBT = await BonTransfertArticle.find({ bonTransfert: item._id, societe: societeRacine })

        for (let itemA of articleBT) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: 0, qteSortie: itemA.quantiteVente, qteStock: 0 })

        }
    }

    for (let item of bonLivs) {

        let articleBL = await BonLivraisonArticle.find({ bonLivraison: item._id, societe: societeRacine })

        for (let itemA of articleBL) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: 0, qteSortie: itemA.quantiteVente, qteStock: 0 })

        }
    }

    for (let item of bonRetourFournisseurs) {

        let articleBR = await BonRetourFournisseurArticle.find({ bonRetourFournisseur: item._id, societe: societeRacine })

        for (let itemA of articleBR) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: 0, qteSortie: itemA.quantiteAchat, qteStock: 0 })

        }
    }

    for (let item of bonCasses) {

        let articleBC = await BonCasseArticle.find({ bonCasse: item._id, societe: societeRacine })

        for (let itemA of articleBC) {

            listGlobal.push({ id: itemA.article, reference: itemA.reference, designation: itemA.designation, categorie: itemA.article.categorie, famille: itemA.article.famille, sousFamille: itemA.article.sousFamille, qteEntree: 0, qteSortie: itemA.quantiteVente, qteStock: 0 })
        }

    }

    let listFilter = await regrouperArticles(listGlobal)

    listGlobal = listFilter

    if (article.categorie.length > 0 || article.sousArticle.length > 0 || article.famille.length > 0 || article.sousFamille.length > 0) {

        let listArticles = await filter(listGlobal, article)

        listGlobal = listArticles
    }

    return res.send({ status: true, listGlobal: listGlobal })

})

/**
 * @swagger
 * /mouvementStocks/valeurStock:
 *   post:
 *     summary: Returns the list of all the MouvementStocks
 *     tags: [MouvementStocks]
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
 *         description: The list of the MouvementStocks
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
router.post('/valeurStock', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.body.magasin))

    var article = req.body.article

    listGlobal = []

    sort = { createdAt: -1 }

    var pipeline = []

    pipeline.push({ $match: { societeRacine: societeRacine } })

    pipeline.push({
        $lookup: {
            from: 'articlesocietes',
            let: { "article": "$_id", "societe": societeRacine },
            pipeline: [{
                $match:
                {
                    $expr: {
                        "$and": [
                            { "$eq": ["$article", "$$article"] },
                            { "$eq": ["$societe", "$$societe"] },
                        ]
                    }
                }
            }],
            as: "articlesocietes"
        }
    })

    pipeline.push({
        $lookup: {
            from: 'categories',
            let: { "categorie": "$categorie" },
            pipeline: [{
                $match:
                {
                    $expr: {
                        "$and": [
                            { "$eq": ["$_id", "$$categorie"] },
                        ]
                    }
                }
            }],
            as: "categories"
        }
    })

    pipeline.push({
        $lookup: {
            from: 'familles',
            let: { "famille": "$famille" },
            pipeline: [{
                $match:
                {
                    $expr: {
                        "$and": [
                            { "$eq": ["$_id", "$$famille"] },
                        ]
                    }
                }
            }],
            as: "familles"
        }
    })

    pipeline.push({
        $set: {
            categorie: { $arrayElemAt: ["$categories.libelle", 0] },
            famille: { $arrayElemAt: ["$familles.libelle", 0] },
            id: "$_id",
            valeurAchatHT: { $toString: "$prixAchat" },
            valeurAchatTTC: { $toString: "$prixAchatTTC" },
            valeurVenteTTC: { $toString: "$prixTTC" },
            valeurVenteHT: { $toString: "$prixVenteHT" },
            valeurRevientHT: { $toString: "$prixRevient" },
            valeurRevientTTC: { $toString: "$prixRevientTTC" },
            qteStock: { $toString: { $arrayElemAt: ["$articlesocietes.qteEnStock", 0] } },
        }
    })

    pipeline.push({

        $project: {
            id: 1,
            reference: 1,
            designation: 1,
            categorie: 1,
            famille: 1,
            qteStock: 1,
            valeurAchatHT: 1,
            valeurAchatTTC: 1,
            valeurVenteTTC: 1,
            valeurVenteHT: 1,
            valeurRevientHT: 1,
            valeurRevientTTC: 1,
        }
    })

    var sommePipeline = []
    for (let key in pipeline) {
        sommePipeline.push(pipeline[key])
    }

    pipeline.push({
        $sort: sort
    })

    const articles = await Article.aggregate(pipeline)

    listGlobal = articles

    if (article.categorie.length > 0 || article.sousArticle.length > 0 || article.famille.length > 0 || article.sousFamille.length > 0) {

        listGlobal = await filter(articles, article)

        for (let item in listGlobal) {

            let indice = rechercheIndice(listGlobal[item].id, articles)

            listGlobal[item].valeurAchatHT = articles[indice].valeurAchatHT
            listGlobal[item].valeurAchatTTC = articles[indice].valeurAchatTTC
            listGlobal[item].valeurVenteTTC = articles[indice].valeurVenteTTC
            listGlobal[item].valeurVenteHT = articles[indice].valeurVenteHT
            listGlobal[item].valeurRevientHT = articles[indice].valeurRevientHT
            listGlobal[item].valeurRevientTTC = articles[indice].valeurRevientTTC
        }
    }

    return res.send({ status: true, listGlobal: listGlobal })

})

/**
 * @swagger
 * /mouvementStocks/getById/{id}:
 *   get:
 *     summary: Remove the mouvementStock by id
 *     tags: [MouvementStocks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MouvementStock id
 *
 *     responses:
 *       200:
 *         description: The MouvementStock was deleted
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
 *         description: The MouvementStock was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

    if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

    const mouvementStock = await MouvementStock.findOne({ _id: req.params.id })

    return res.send({ status: true, resultat: mouvementStock })

})

/**
 * @swagger
 * /mouvementStocks/getAllParametres/{id}:
 *   get:
 *     summary: Remove the MouvementStocks by id
 *     tags: [MouvementStocks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MouvementStocks id
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
 *                  MouvementStocks:
 *                    type: array          
 *       404:
 *         description: The bl was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getAllParametres/:id', async (req, res) => {
    var societeRacine = await getSocieteRacine(ObjectId(req.params.id))
    const mouvementStocks = await MouvementStock.find({ societeRacine: societeRacine })
    return res.send({ status: true, mouvementStocks: mouvementStocks })

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

module.exports.routerMouvementStock = router
