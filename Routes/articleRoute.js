const { Article, SousProduit, validateReferenceDesignation, validateReferenceDesignationModifier, validateArticle, validateArticlesPagination, getCodeBarre, } = require('../Models/articleModel')
const { BonLivraisonArticle } = require('../Models/bonLivraisonArticleModel')

const { ArticleSociete } = require('../Models/articleSocieteModel')
const { Frais } = require('../Models/fraisModel')

const { getJsonFromXlsx, calculPrixArticles, saveArticles} = require('../Models/importationModel')

const { UniteMesure, validateUniteMesure, getNumeroAutomatiqueUnite } = require('../Models/uniteMesureModel')

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../Models/societeModel')
var ObjectId = require('mongodb').ObjectID;

const { Modele, getNumeroAutomatiqueModele } = require('../Models/modeleModel')
const { Categorie, getNumeroAutomatiqueCategorie } = require('../Models/categorieModel')
const { CategorieFamille } = require('../Models/categorieFamilleModel')
const { Famille, getNumeroAutomatiqueFamille } = require('../Models/familleModel')
const { Marque, getNumeroAutomatiqueMarque } = require('../Models/marqueModel')
const { FamilleSousFamille } = require('../Models/familleSousFamilleModel')
const { SousFamille, getNumeroAutomatiqueSousFamille } = require('../Models/sousFamilleModel')
const { TauxTVA } = require('../Models/tauxTVAModel')
const { BonLivraison } = require('../Models/bonLivraisonModel')
const { Client } = require('../Models/clientModel')

const express = require('express')
var ObjectId = require('mongodb').ObjectID;
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../Models/userModel')
const { pipeline } = require('stream')
const { Fournisseur } = require('../Models/fournisseurModel')
const { TypeTier } = require('../Models/typeTierModel')
const { Variante } = require('../Models/varianteModel')

const xlsx = require('xlsx');

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
 *     Article:
 *       type: object
 *       required:
 *         - reference
 *         - codeBarre
 *         - designation
 *         - typeArticle
 *         - categorie
 *         - famille
 *         - sousFamille
 *         - marque
 *         - modele
 *         - tauxTVA
 *         - prixFourn
 *         - remiseF
 *         - marge
 *         - prixVenteHT
 *         - montantTVA
 *         - prixAchat
 *         - valeurStock
 *         - QteEnStock
 *         - prixTTC
 *         - plafondRemise
 *         - pVenteConseille
 *         - enVente
 *         - enAchat
 *         - refFournisseur
 *         - redevance
 *         - enBalance
 *         - enPromotion
 *         - enNouveau
 *         - longueur
 *         - largeur
 *         - hauteur
 *         - surface
 *         - volume
 *         - enDisponible
 *         - enArchive
 *         - enVedette
 *         - enLiquidation
 *         - description
 *         - observations
 *         - poids
 *         - couleur
 *         - unite1
 *         - unite2
 *         - coefficient
 *         - emplacement
 *         - raccourciPLU
 *         - prixVenteHT2
 *         - prixVenteHT3
 *         - seuilAlerteQTS
 *         - seuilRearpQTS
 *       properties:
 *         id:
 *           type: string
 *         reference:
 *           type: string
 *         codeBarre:
 *           type: string
 *         designation:
 *           type: string
 *         typeArticle:
 *           type: string
 *         categorie:
 *           type: string
 *         famille:
 *           type: string
 *         sousFamille:
 *           type: string
 *         marque:
 *           type: string
 *         modele:
 *           type: string
 *         tauxTVA:
 *           type: string
 *         prixFourn:
 *           type: number
 *         remiseF:
 *           type: number
 *         marge:
 *           type: number
 *         prixVenteHT:
 *           type: number
 *         montantTVA:
 *           type: number
 *         prixAchat:
 *           type: number
 *         valeurStock:
 *           type: number
 *         QteEnStock:
 *           type: number
 *         prixTTC:
 *           type: number
 *         plafondRemise:
 *           type: number
 *         pVenteConseille:
 *           type: number
 *         enVente:
 *           type: string
 *         enAchat:
 *           type: string
 *         refFournisseur:
 *           type: string
 *         redevance:
 *           type: number
 *         enBalance:
 *           type: string
 *         enPromotion:
 *           type: string
 *         enNouveau:
 *           type: string
 *         longueur:
 *           type: number
 *         largeur:
 *           type: number
 *         hauteur:
 *           type: number
 *         surface:
 *           type: number
 *         volume:
 *           type: number
 *         enDisponible:
 *           type: string
 *         enArchive:
 *           type: string
 *         enVedette:
 *           type: string
 *         enLiquidation:
 *           type: string
 *         description:
 *           type: string
 *         observations:
 *           type: string
 *         poids:
 *           type: number
 *         couleur:
 *           type: string
 *         unite1:
 *           type: string
 *         unite2:
 *           type: string
 *         coefficient:
 *           type: number
 *         emplacement:
 *           type: string
 *         raccourciPLU:
 *           type: string
 *         prixVenteHT2:
 *           type: number
 *         prixVenteHT3:
 *           type: number
 *         seuilAlerteQTS:
 *           type: number
 *         seuilRearpQTS:
 *           type: number
 *
 *         
 */

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: The articles managing API
 */


/**
* @swagger
* paths:
*   /articles/upload:
*     post:
*       summary: upload image
*       tags: [Articles]
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
 * /articles/newArticle:
 *   post:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                reference:
 *                  type: string
 *                codeBarre:
 *                  type: string
 *                designation:
 *                  type: string
 *                typeArticle:
 *                  type: string
 *                categorie:
 *                  type: string
 *                famille:
 *                  type: string
 *                sousFamille:
 *                  type: string
 *                marque:
 *                  type: string
 *                modele:
 *                  type: string
 *                tauxTVA:
 *                  type: string
 *                prixFourn:
 *                  type: number
 *                remiseF:
 *                  type: number
 *                marge:
 *                  type: number
 *                prixVenteHT:
 *                  type: number
 *                montantTVA:
 *                  type: number
 *                prixAchat:
 *                  type: number
 *                valeurStock:
 *                  type: number
 *                QteEnStock:
 *                  type: number
 *                prixTTC:
 *                  type: number
 *                plafondRemise:
 *                  type: number
 *                pVenteConseille:
 *                  type: number
 *                enVente:
 *                  type: string
 *                enAchat:
 *                  type: string
 *                refFournisseur:
 *                  type: string
 *                redevance:
 *                  type: number
 *                enBalance:
 *                  type: string
 *                enPromotion:
 *                  type: string
 *                enNouveau:
 *                  type: string
 *                longueur:
 *                  type: number
 *                largeur:
 *                  type: number
 *                hauteur:
 *                  type: number
 *                surface:
 *                  type: number
 *                volume:
 *                  type: number
 *                enDisponible:
 *                  type: string
 *                enArchive:
 *                  type: string
 *                enVedette:
 *                  type: string
 *                enLiquidation:
 *                  type: string
 *                description:
 *                  type: string
 *                observations:
 *                  type: string
 *                poids:
 *                  type: number
 *                couleur:
 *                  type: string
 *                unite1:
 *                  type: string
 *                unite2:
 *                  type: string
 *                coefficient:
 *                  type: number
 *                emplacement:
 *                  type: string
 *                raccourciPLU:
 *                  type: string
 *                prixVenteHT2:
 *                  type: number
 *                prixVenteHT3:
 *                  type: number
 *                seuilAlerteQTS:
 *                  type: number
 *                seuilRearpQTS:
 *                  type: number
 *     responses:
 *       200:
 *         description: The list of the articles
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
 *                    reference:
 *                      type: string
 *                    codeBarre:
 *                      type: string
 *                    designation:
 *                      type: string
 *                    typeArticle:
 *                      type: string
 *                    categorie:
 *                      type: string
 *                    famille:
 *                      type: string
 *                    sousFamille:
 *                      type: string
 *                    marque:
 *                      type: string
 *                    modele:
 *                      type: string
 *                    tauxTVA:
 *                      type: string
 *                    prixFourn:
 *                      type: number
 *                    remiseF:
 *                      type: number
 *                    marge:
 *                      type: number
 *                    prixVenteHT:
 *                      type: number
 *                    montantTVA:
 *                      type: number
 *                    prixAchat:
 *                      type: number
 *                    valeurStock:
 *                      type: number
 *                    QteEnStock:
 *                      type: number
 *                    prixTTC:
 *                      type: number
 *                    plafondRemise:
 *                      type: number
 *                    pVenteConseille:
 *                      type: number
 *                    enVente:
 *                      type: string
 *                    enAchat:
 *                      type: string
 *                    refFournisseur:
 *                      type: string
 *                    redevance:
 *                      type: number
 *                    enBalance:
 *                      type: string
 *                    enPromotion:
 *                      type: string
 *                    enNouveau:
 *                      type: string
 *                    longueur:
 *                      type: number
 *                    largeur:
 *                      type: number
 *                    hauteur:
 *                      type: number
 *                    surface:
 *                      type: number
 *                    volume:
 *                      type: number
 *                    enDisponible:
 *                      type: string
 *                    enArchive:
 *                      type: string
 *                    enVedette:
 *                      type: string
 *                    enLiquidation:
 *                      type: string
 *                    description:
 *                      type: string
 *                    observations:
 *                      type: string
 *                    poids:
 *                      type: number
 *                    couleur:
 *                      type: string
 *                    unite1:
 *                      type: string
 *                    unite2:
 *                      type: string
 *                    coefficient:
 *                      type: number
 *                    emplacement:
 *                      type: string
 *                    raccourciPLU:
 *                      type: string
 *                    prixVenteHT2:
 *                      type: number
 *                    prixVenteHT3:
 *                      type: number
 *                    seuilAlerteQTS:
 *                      type: number
 *                    seuilRearpQTS:
 *                      type: number
 *
 *
 *                         
 */

router.post('/newArticle', async (req, res) => {
  var body = req.body
  var forkenKey = { fournisseur: "", categorie: "", famille: "", sousFamille: "", modele: "", marque: "", unite1: "", unite2: "" }

  for (let key in forkenKey) {
    if (body[key] == "") {
      body[key] = null
    }
  }

  var societe = ObjectId(body.societe)
  body.societeRacine = await getSocieteRacine(societe)

  var messageErreur = await validateReferenceDesignation(body, body.societeRacine)

  if (messageErreur != "") {
    return res.send({ status: false, message: messageErreur })
  }

  for (let i = 0; i < body.prixWithQuantites.length; i++) {
    body.prixWithQuantites[i].id = undefined
  }

  const article = new Article(body);

  const result = await article.save()

  const articles = await Article.find({ societeRacine: body.societeRacine })

  const societes = await getSocietesBySocieteParent(body.societeRacine)

  for (let i = 0; i < articles.length; i++) {
    for (let j = 0; j < societes.length; j++) {

      const articleSociete = await ArticleSociete.find({ societe: societes[j].id, article: articles[i].id })

      if (articleSociete.length == 0) {
        const articleSociete = new ArticleSociete({
          article: articles[i].id,
          societe: societes[j].id,

          enVente: articles[i].enVente,
          enAchat: articles[i].enAchat,

          enBalance: articles[i].enBalance,
          enPromotion: articles[i].enPromotion,
          enNouveau: articles[i].enNouveau,
          enDisponible: articles[i].enDisponible,
          enArchive: articles[i].enArchive,
          enVedette: articles[i].enVedette,
          enLiquidation: articles[i].enLiquidation,

          qteTheorique: 0,
          qteEnStock: 0,

          seuilAlerteQTS: 0,
          seuilRearpQTS: 0,

          venteAvecStockNegative: "non",
          stockMin: 0,
          stockMax: 0,

        });

        const result = await articleSociete.save()
      }
    }
  }

  const articleSociete = await ArticleSociete.findOneAndUpdate({ societe: societe, article: result.id }, {
    seuilAlerteQTS: req.body.seuilAlerteQTS,
    seuilRearpQTS: req.body.seuilRearpQTS,

    venteAvecStockNegative: req.body.venteAvecStockNegative,
    stockMin: req.body.stockMin,
    stockMax: req.body.stockMax,
  })

  return res.send({ status: true, resultat: result })
})


router.post('/newSousProduit/:id', async (req, res) => {

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  var sousProduits = article.sousProduits

  sousProduits.push(req.body)

  await Article.findOneAndUpdate({ _id: req.params.id }, { sousProduits: sousProduits })

  const article2 = await Article.findById(req.params.id)

  return res.send({ status: true, resultat: article2.sousProduits })
})

router.post('/updateSousProduit/:id/:idSousProduit', async (req, res) => {

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  var sousProduits = article.sousProduits

  for (let i = 0; i < sousProduits.length; i++) {
    if (sousProduits[i]._id == req.params.idSousProduit) {
      sousProduits[i].variantes = req.body.variantes
      sousProduits[i].impactPrix = req.body.impactPrix
      sousProduits[i].impactPoids = req.body.impactPoids
      sousProduits[i].reference = req.body.reference
    }
  }

  await Article.findOneAndUpdate({ _id: req.params.id }, { sousProduits: sousProduits })

  const article2 = await Article.findById(req.params.id)

  return res.send({ status: true, resultat: article2.sousProduits })
})

router.get('/deleteSousProduit/:id/:idSousProduit', async (req, res) => {

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  var sousProduits = article.sousProduits
  var newSousProduits = []
  for (let i = 0; i < sousProduits.length; i++) {
    if (sousProduits[i]._id != req.params.idSousProduit) {
      newSousProduits.push(sousProduits[i])
    }
  }

  await Article.findOneAndUpdate({ _id: req.params.id }, { sousProduits: newSousProduits })

  const article2 = await Article.findById(req.params.id)

  return res.send({ status: true, resultat: article2.sousProduits })
})


/**
 * @swagger
 * /articles/modifierArticle/{id}:
 *   post:
 *     summary: Update the article by id
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *                reference:
 *                  type: string
 *                codeBarre:
 *                  type: string
 *                designation:
 *                  type: string
 *                typeArticle:
 *                  type: string
 *                categorie:
 *                  type: string
 *                famille:
 *                  type: string
 *                sousFamille:
 *                  type: string
 *                marque:
 *                  type: string
 *                modele:
 *                  type: string
 *                tauxTVA:
 *                  type: string
 *                prixFourn:
 *                  type: number
 *                remiseF:
 *                  type: number
 *                marge:
 *                  type: number
 *                prixVenteHT:
 *                  type: number
 *                montantTVA:
 *                  type: number
 *                prixAchat:
 *                  type: number
 *                valeurStock:
 *                  type: number
 *                QteEnStock:
 *                  type: number
 *                prixTTC:
 *                  type: number
 *                plafondRemise:
 *                  type: number
 *                pVenteConseille:
 *                  type: number
 *                enVente:
 *                  type: string
 *                enAchat:
 *                  type: string
 *                refFournisseur:
 *                  type: string
 *                redevance:
 *                  type: number
 *                enBalance:
 *                  type: string
 *                enPromotion:
 *                  type: string
 *                enNouveau:
 *                  type: string
 *                longueur:
 *                  type: number
 *                largeur:
 *                  type: number
 *                hauteur:
 *                  type: number
 *                surface:
 *                  type: number
 *                volume:
 *                  type: number
 *                enDisponible:
 *                  type: string
 *                enArchive:
 *                  type: string
 *                enVedette:
 *                  type: string
 *                enLiquidation:
 *                  type: string
 *                description:
 *                  type: string
 *                observations:
 *                  type: string
 *                poids:
 *                  type: number
 *                couleur:
 *                  type: string
 *                unite1:
 *                  type: string
 *                unite2:
 *                  type: string
 *                coefficient:
 *                  type: number
 *                emplacement:
 *                  type: string
 *                raccourciPLU:
 *                  type: string
 *                prixVenteHT2:
 *                  type: number
 *                prixVenteHT3:
 *                  type: number
 *                seuilAlerteQTS:
 *                  type: number
 *                seuilRearpQTS:
 *                  type: number
 *
 *     responses:
 *       200:
 *         description: The list of the articles
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
 *                    reference:
 *                      type: string
 *                    codeBarre:
 *                      type: string
 *                    designation:
 *                      type: string
 *                    typeArticle:
 *                      type: string
 *                    categorie:
 *                      type: string
 *                    famille:
 *                      type: string
 *                    sousFamille:
 *                      type: string
 *                    marque:
 *                      type: string
 *                    modele:
 *                      type: string
 *                    tauxTVA:
 *                      type: string
 *                    prixFourn:
 *                      type: number
 *                    remiseF:
 *                      type: number
 *                    marge:
 *                      type: number
 *                    prixVenteHT:
 *                      type: number
 *                    montantTVA:
 *                      type: number
 *                    prixAchat:
 *                      type: number
 *                    valeurStock:
 *                      type: number
 *                    QteEnStock:
 *                      type: number
 *                    prixTTC:
 *                      type: number
 *                    plafondRemise:
 *                      type: number
 *                    pVenteConseille:
 *                      type: number
 *                    enVente:
 *                      type: string
 *                    enAchat:
 *                      type: string
 *                    refFournisseur:
 *                      type: string
 *                    redevance:
 *                      type: number
 *                    enBalance:
 *                      type: string
 *                    enPromotion:
 *                      type: string
 *                    enNouveau:
 *                      type: string
 *                    longueur:
 *                      type: number
 *                    largeur:
 *                      type: number
 *                    hauteur:
 *                      type: number
 *                    surface:
 *                      type: number
 *                    volume:
 *                      type: number
 *                    enDisponible:
 *                      type: string
 *                    enArchive:
 *                      type: string
 *                    enVedette:
 *                      type: string
 *                    enLiquidation:
 *                      type: string
 *                    description:
 *                      type: string
 *                    observations:
 *                      type: string
 *                    poids:
 *                      type: number
 *                    couleur:
 *                      type: string
 *                    unite1:
 *                      type: string
 *                    unite2:
 *                      type: string
 *                    coefficient:
 *                      type: number
 *                    emplacement:
 *                      type: string
 *                    raccourciPLU:
 *                      type: string
 *                    prixVenteHT2:
 *                      type: number
 *                    prixVenteHT3:
 *                      type: number
 *                    seuilAlerteQTS:
 *                      type: number
 *                    seuilRearpQTS:
 *                      type: number
 *
 *
 *                         
 */
router.post('/modifierArticle/:id', async (req, res) => {

  /*const {error}=validateArticle(req.body)
  if(error) return res.status(400).send({status:false,message:error.details[0].message})
  */
  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  var forkenKey = { categorie: "", famille: "", sousFamille: "", modele: "", marque: "", unite1: "", unite2: "" }

  for (let key in forkenKey) {

    if (req.body[key] == "") {
      req.body[key] = null
    }
  }

  var messageErreur = await validateReferenceDesignationModifier(req.body, article.societeRacine, ObjectId(req.params.id))

  if (messageErreur != "") {
    return res.send({ status: false, message: messageErreur })
  }

  for (let i = 0; i < req.body.prixWithQuantites.length; i++) {
    req.body.prixWithQuantites[i].id = undefined
  }

  const result = await Article.findOneAndUpdate({ _id: req.params.id }, req.body)

  const article2 = await Article.findById(req.params.id)

  const articleSociete = await ArticleSociete.find({ societe: ObjectId(req.body.societe), article: article.id })

  if (articleSociete.length == 0) {

    const articleSociete = new ArticleSociete({
      article: article.id,
      societe: article.societe,

      enVente: req.body.enVente,
      enAchat: req.body.enAchat,

      enBalance: req.body.enBalance,
      enPromotion: req.body.enPromotion,
      enNouveau: req.body.enNouveau,
      enDisponible: req.body.enDisponible,
      enArchive: req.body.enArchive,
      enVedette: req.body.enVedette,
      enLiquidation: req.body.enLiquidation,

      qteTheorique: 0,
      qteEnStock: 0,

      seuilAlerteQTS: 0,
      seuilRearpQTS: 0,
      venteAvecStockNegative: req.body.venteAvecStockNegative,
      stockMin: req.body.stockMin,
      stockMax: req.body.stockMax,
    });

    const result = await articleSociete.save()

  } else {
    const articleSociete2 = await ArticleSociete.findOneAndUpdate({ _id: articleSociete[0].id }, {
      enVente: req.body.enVente,
      enAchat: req.body.enAchat,

      seuilAlerteQTS: req.body.seuilAlerteQTS,
      seuilRearpQTS: req.body.seuilRearpQTS,

      enBalance: req.body.enBalance,
      enPromotion: req.body.enPromotion,
      enNouveau: req.body.enNouveau,
      enDisponible: req.body.enDisponible,
      enArchive: req.body.enArchive,
      enVedette: req.body.enVedette,
      enLiquidation: req.body.enLiquidation,
      venteAvecStockNegative: req.body.venteAvecStockNegative,
      stockMin: req.body.stockMin,
      stockMax: req.body.stockMax,
    })
  }

  return res.send({ status: true, resultat: article2 })
})

/**
 * @swagger
 * /articles/deleteArticle/{id}:
 *   post:
 *     summary: Remove the article by id
 *     tags: [Articles]
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
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteArticle/:id', async (req, res) => {

  //if(req.user.user.role != "admin") return res.status(401).send({status:false})

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  const articleSocietes = await ArticleSociete.find({ article: article.id })

  for (let i = 0; i < articleSocietes.length; i++) {
    const articleSociete = await ArticleSociete.findOneAndDelete({ _id: articleSocietes[i].id })
  }

  if (await Article.findOneAndDelete({ _id: req.params.id })) {
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
 * /articles/listArticles:
 *   post:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
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
 *         description: The list of the articles
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
 *                            reference:
 *                              type: string
 *                            codeBarre:
 *                              type: string
 *                            designation:
 *                              type: string
 *                            typeArticle:
 *                              type: string
 *                            categorie:
 *                              type: string
 *                            famille:
 *                              type: string
 *                            sousFamille:
 *                              type: string
 *                            marque:
 *                              type: string
 *                            modele:
 *                              type: string
 *                            tauxTVA:
 *                              type: string
 *                            prixFourn:
 *                              type: number
 *                            remiseF:
 *                              type: number
 *                            marge:
 *                              type: number
 *                            prixVenteHT:
 *                              type: number
 *                            montantTVA:
 *                              type: number
 *                            prixAchat:
 *                              type: number
 *                            valeurStock:
 *                              type: number
 *                            QteEnStock:
 *                              type: number
 *                            prixTTC:
 *                              type: number
 *                            plafondRemise:
 *                              type: number
 *                            pVenteConseille:
 *                              type: number
 *                            enVente:
 *                              type: string
 *                            enAchat:
 *                              type: string
 *                            refFournisseur:
 *                              type: string
 *                            redevance:
 *                              type: number
 *                            enBalance:
 *                              type: string
 *                            enPromotion:
 *                              type: string
 *                            enNouveau:
 *                              type: string
 *                            longueur:
 *                              type: number
 *                            largeur:
 *                              type: number
 *                            hauteur:
 *                              type: number
 *                            surface:
 *                              type: number
 *                            volume:
 *                              type: number
 *                            enDisponible:
 *                              type: string
 *                            enArchive:
 *                              type: string
 *                            enVedette:
 *                              type: string
 *                            enLiquidation:
 *                              type: string
 *                            description:
 *                              type: string
 *                            observations:
 *                              type: string
 *                            poids:
 *                              type: number
 *                            couleur:
 *                              type: string
 *                            unite1:
 *                              type: string
 *                            unite2:
 *                              type: string
 *                            coefficient:
 *                              type: number
 *                            emplacement:
 *                              type: string
 *                            raccourciPLU:
 *                              type: string
 *                            prixVenteHT2:
 *                              type: number
 *                            prixVenteHT3:
 *                              type: number
 *                            seuilAlerteQTS:
 *                              type: number
 *                            seuilRearpQTS:
 *                              type: number
 *
 *
 *                   
 *                         
 */

router.post('/alert-stock', async (req, res) => {

  if (req.body.societe == null) {
    return
  }

  const societeRacine = await getSocieteRacine(ObjectId(req.body.societe + ""))
  const societe = ObjectId(req.body.societe + "")

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
      from: 'articlesocietes',
      let: { "article": "$_id", "societe": societe },
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
    $lookup: {
      from: 'sousfamilles',
      let: { "sousfamille": "$sousFamille" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$sousfamille"] },
            ]
          }
        }
      }],
      as: "sousfamilles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'marques',
      let: { "marque": "$marque" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$marque"] },
            ]
          }
        }
      }],
      as: "marques"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'modeles',
      let: { "modele": "$modele" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modele"] },
            ]
          }
        }
      }],
      as: "modeles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unitemesures',
      let: { "unite": { "$toObjectId": "$unite1" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites1"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unitemesures',
      let: { "unite": { "$toObjectId": "$unite2" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites2"
    }
  })

  pipeline.push({
    $set: {
      categorie: { $arrayElemAt: ["$categories.libelle", 0] },
      famille: { $arrayElemAt: ["$familles.libelle", 0] },
      sousFamille: { $arrayElemAt: ["$sousfamilles.libelle", 0] },
      marque: { $arrayElemAt: ["$marques.libelle", 0] },
      modele: { $arrayElemAt: ["$modeles.libelle", 0] },
      unite1: { $arrayElemAt: ["$unites1.libelle", 0] },
      unite2: { $arrayElemAt: ["$unites2.libelle", 0] },

      id: "$_id",

      qteEnStock: { $arrayElemAt: ["$articlesocietes.qteEnStock", 0] },
      qteTheorique: { $toString: { $arrayElemAt: ["$articlesocietes.qteTheorique", 0] } },
      seuilRearpQTS: { $arrayElemAt: ["$articlesocietes.seuilRearpQTS", 0] },
      seuilAlerteQTS: { $arrayElemAt: ["$articlesocietes.seuilAlerteQTS", 0] },
      stockMin: { $arrayElemAt: ["$articlesocietes.stockMin", 0] },
      stockMax: { $arrayElemAt: ["$articlesocietes.stockMax", 0] },

      enVente: { $toString: { $arrayElemAt: ["$articlesocietes.enVente", 0] } },
      enAchat: { $toString: { $arrayElemAt: ["$articlesocietes.enAchat", 0] } },

      enBalance: { $toString: { $arrayElemAt: ["$articlesocietes.enBalance", 0] } },
      enPromotion: { $toString: { $arrayElemAt: ["$articlesocietes.enPromotion", 0] } },
      enNouveau: { $toString: { $arrayElemAt: ["$articlesocietes.enNouveau", 0] } },
      enDisponible: { $toString: { $arrayElemAt: ["$articlesocietes.enDisponible", 0] } },
      enArchive: { $toString: { $arrayElemAt: ["$articlesocietes.enArchive", 0] } },
      enVedette: { $toString: { $arrayElemAt: ["$articlesocietes.enVedette", 0] } },
      enLiquidation: { $toString: { $arrayElemAt: ["$articlesocietes.enLiquidation", 0] } },

      prixFourn: { $toString: "$prixFourn" },
      remiseF: { $toString: "$remiseF" },
      marge: { $toString: "$marge" },
      prixVenteHT: { $toString: "$prixVenteHT" },
      tauxTVA: { $toString: "$tauxTVA" },
      montantTVA: { $toString: "$montantTVA" },
      prixAchat: { $toString: "$prixAchat" },
      valeurStock: { $toString: "$valeurStock" },
      prixTTC: { $toString: "$prixTTC" },
      plafondRemise: { $toString: "$plafondRemise" },
      pVenteConseille: { $toString: "$pVenteConseille" },
      longueur: { $toString: "$longueur" },
      largeur: { $toString: "$largeur" },
      hauteur: { $toString: "$hauteur" },
      surface: { $toString: "$surface" },
      volume: { $toString: "$volume" },
      prixVenteHT2: { $toString: "$prixVenteHT2" },
      prixVenteHT3: { $toString: "$prixVenteHT3" },
      poids: { $toString: "$poids" },
      coefficient: { $toString: "$coefficient" },
    }
  })

  pipeline.push({
    $project: { stockMin: 1, stockMax: 1, id: 1, reference: 1, codeBarre: 1, designation: 1, qteEnStock: 1, qteTheorique: 1, typeArticle: 1, prixFourn: 1, remiseF: 1, marge: 1, prixVenteHT: 1, tauxTVA: 1, montantTVA: 1, prixAchat: 1, valeurStock: 1, prixTTC: 1, plafondRemise: 1, pVenteConseille: 1, enVente: 1, enAchat: 1, refFournisseur: 1, redevance: 1, enBalance: 1, enPromotion: 1, enNouveau: 1, longueur: 1, largeur: 1, hauteur: 1, surface: 1, volume: 1, enDisponible: 1, enArchive: 1, enVedette: 1, enLiquidation: 1, description: 1, observations: 1, poids: 1, couleur: 1, unite1: 1, unite2: 1, coefficient: 1, emplacement: 1, raccourciPLU: 1, prixVenteHT2: 1, prixVenteHT3: 1, seuilAlerteQTS: 1, seuilRearpQTS: 1, categorie: 1, famille: 1, sousFamille: 1, marque: 1, modele: 1, isSeuilAlerteQTS: { $and: [{ "$lt": ["$qteEnStock", "$seuilAlerteQTS"] }, { "$gt": ["$seuilAlerteQTS", 0] }] }, isSeuilRearpQTS: { $and: [{ "$lte": ["$qteEnStock", "$seuilRearpQTS"] }, { "$gt": ["$seuilRearpQTS", 0] }] } }
  })

  pipeline.push({ $match: { $or: [{ "isSeuilAlerteQTS": true }, { "isSeuilRearpQTS": true }] } })

  pipeline.push({
    $set: {
      qteEnStock: { $toString: "$qteEnStock" },
      stockMin: { $toString: "$stockMin" },
      stockMin: { $toString: "$stockMin" },

      seuilRearpQTS: { $toString: "$seuilRearpQTS" },
      seuilAlerteQTS: { $toString: "$seuilAlerteQTS" },

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


  const articles = await Article.aggregate(pipeline)


  sommePipeline.push({
    $count: "total"
  })


  var nbrTotal = await Article.aggregate(sommePipeline)

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



router.post('/listArticles', async (req, res) => {

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

  pipeline.push({ $match: { societeRacine: societeRacine } })

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
    $lookup: {
      from: 'sousfamilles',
      let: { "sousfamille": "$sousFamille" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$sousfamille"] },
            ]
          }
        }
      }],
      as: "sousfamilles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'marques',
      let: { "marque": "$marque" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$marque"] },
            ]
          }
        }
      }],
      as: "marques"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'modeles',
      let: { "modele": "$modele" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modele"] },
            ]
          }
        }
      }],
      as: "modeles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unites',
      let: { "unite": "$unite1" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites1"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unites',
      let: { "unite": "$unite2" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites2"
    }
  })

  pipeline.push({
    $set: {
      categorie: { $arrayElemAt: ["$categories.libelle", 0] },
      famille: { $arrayElemAt: ["$familles.libelle", 0] },
      sousFamille: { $arrayElemAt: ["$sousfamilles.libelle", 0] },
      marque: { $arrayElemAt: ["$marques.libelle", 0] },
      modele: { $arrayElemAt: ["$modeles.libelle", 0] },
      unite2: { $arrayElemAt: ["$unites2.libelle", 0] },
      unite1: { $arrayElemAt: ["$unites1.libelle", 0] },
      id: "$_id",
      qteEnStock: { $toString: "$qteEnStock" },
      qteTheorique: { $toString: "$qteTheorique" },
      seuilRearpQTS: { $toString: "$seuilRearpQTS" },
      prixFourn: { $toString: "$prixFourn" },
      remiseF: { $toString: "$remiseF" },
      marge: { $toString: "$marge" },
      prixVenteHT: { $toString: "$prixVenteHT" },
      tauxTVA: { $toString: "$tauxTVA" },
      montantTVA: { $toString: "$montantTVA" },
      prixAchat: { $toString: "$prixAchat" },
      valeurStock: { $toString: "$valeurStock" },
      prixTTC: { $toString: "$prixTTC" },
      plafondRemise: { $toString: "$plafondRemise" },
      pVenteConseille: { $toString: "$pVenteConseille" },
      longueur: { $toString: "$longueur" },
      largeur: { $toString: "$largeur" },
      hauteur: { $toString: "$hauteur" },
      surface: { $toString: "$surface" },
      volume: { $toString: "$volume" },
      prixVenteHT2: { $toString: "$prixVenteHT2" },
      prixVenteHT3: { $toString: "$prixVenteHT3" },
      seuilAlerteQTS: { $toString: "$seuilAlerteQTS" },
      seuilRearpQTS: { $toString: "$seuilRearpQTS" },
      poids: { $toString: "$poids" },
      coefficient: { $toString: "$coefficient" },
      remiseParMontant: { $toString: "$remiseParMontant" },
    }
  })

  pipeline.push({
    $project: {
      sansRemise: 1,
      id: 1,
      reference: 1,
      codeBarre: 1,
      designation: 1,
      qteEnStock: 1,
      qteTheorique: 1,
      typeArticle: 1,
      prixFourn: 1,
      remiseF: 1,
      marge: 1,
      prixVenteHT: 1,
      tauxTVA: 1,
      montantTVA: 1,
      prixAchat: 1,
      valeurStock: 1,
      prixTTC: 1,
      plafondRemise: 1,
      pVenteConseille: 1,
      enVente: 1,
      enAchat: 1,
      refFournisseur: 1,
      redevance: 1,
      enBalance: 1,
      enPromotion: 1,
      enNouveau: 1,
      longueur: 1,
      largeur: 1,
      hauteur: 1,
      surface: 1,
      volume: 1,
      enDisponible: 1,
      enArchive: 1,
      enVedette: 1,
      enLiquidation: 1,
      description: 1,
      observations: 1,
      poids: 1,
      couleur: 1,
      unite1: 1,
      unite2: 1,
      coefficient: 1,
      emplacement: 1,
      raccourciPLU: 1,
      prixVenteHT2: 1,
      prixVenteHT3: 1,
      seuilAlerteQTS: 1,
      seuilRearpQTS: 1,
      categorie: 1,
      famille: 1,
      sousFamille: 1,
      marque: 1,
      modele: 1,
      remiseParMontant: 1,
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

  const articles = await Article.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await Article.aggregate(sommePipeline)

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
 * /articles/listArticlesSociete:
 *   post:
 *     summary: Returns the list of all the articles
 *     tags: [Articles]
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
 *         description: The list of the articles
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
 *                            reference:
 *                              type: string
 *                            codeBarre:
 *                              type: string
 *                            designation:
 *                              type: string
 *                            typeArticle:
 *                              type: string
 *                            categorie:
 *                              type: string
 *                            famille:
 *                              type: string
 *                            sousFamille:
 *                              type: string
 *                            marque:
 *                              type: string
 *                            modele:
 *                              type: string
 *                            tauxTVA:
 *                              type: string
 *                            prixFourn:
 *                              type: number
 *                            remiseF:
 *                              type: number
 *                            marge:
 *                              type: number
 *                            prixVenteHT:
 *                              type: number
 *                            montantTVA:
 *                              type: number
 *                            prixAchat:
 *                              type: number
 *                            valeurStock:
 *                              type: number
 *                            QteEnStock:
 *                              type: number
 *                            prixTTC:
 *                              type: number
 *                            plafondRemise:
 *                              type: number
 *                            pVenteConseille:
 *                              type: number
 *                            enVente:
 *                              type: string
 *                            enAchat:
 *                              type: string
 *                            refFournisseur:
 *                              type: string
 *                            redevance:
 *                              type: number
 *                            enBalance:
 *                              type: string
 *                            enPromotion:
 *                              type: string
 *                            enNouveau:
 *                              type: string
 *                            longueur:
 *                              type: number
 *                            largeur:
 *                              type: number
 *                            hauteur:
 *                              type: number
 *                            surface:
 *                              type: number
 *                            volume:
 *                              type: number
 *                            enDisponible:
 *                              type: string
 *                            enArchive:
 *                              type: string
 *                            enVedette:
 *                              type: string
 *                            enLiquidation:
 *                              type: string
 *                            description:
 *                              type: string
 *                            observations:
 *                              type: string
 *                            poids:
 *                              type: number
 *                            couleur:
 *                              type: string
 *                            unite1:
 *                              type: string
 *                            unite2:
 *                              type: string
 *                            coefficient:
 *                              type: number
 *                            emplacement:
 *                              type: string
 *                            raccourciPLU:
 *                              type: string
 *                            prixVenteHT2:
 *                              type: number
 *                            prixVenteHT3:
 *                              type: number
 *                            seuilAlerteQTS:
 *                              type: number
 *                            seuilRearpQTS:
 *                              type: number
 *
 *
 *                   
 *                         
 */

router.post('/listArticlesSociete', async (req, res) => {

  if (req.body.societe == null) {
    return
  }

  const societeRacine = await getSocieteRacine(ObjectId(req.body.societe + ""))
  const societe = ObjectId(req.body.societe + "")

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
      from: 'articlesocietes',
      let: { "article": "$_id", "societe": societe },
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
    $lookup: {
      from: 'sousfamilles',
      let: { "sousfamille": "$sousFamille" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$sousfamille"] },
            ]
          }
        }
      }],
      as: "sousfamilles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'marques',
      let: { "marque": "$marque" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$marque"] },
            ]
          }
        }
      }],
      as: "marques"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'modeles',
      let: { "modele": "$modele" },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$modele"] },
            ]
          }
        }
      }],
      as: "modeles"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unitemesures',
      let: { "unite": { "$toObjectId": "$unite1" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites1"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'unitemesures',
      let: { "unite": { "$toObjectId": "$unite2" } },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$_id", "$$unite"] },
            ]
          }
        }
      }],
      as: "unites2"
    }
  })

  pipeline.push({
    $set: {
      categorie: { $arrayElemAt: ["$categories.libelle", 0] },
      famille: { $arrayElemAt: ["$familles.libelle", 0] },
      sousFamille: { $arrayElemAt: ["$sousfamilles.libelle", 0] },
      marque: { $arrayElemAt: ["$marques.libelle", 0] },
      modele: { $arrayElemAt: ["$modeles.libelle", 0] },
      unite1: { $arrayElemAt: ["$unites1.libelle", 0] },
      unite2: { $arrayElemAt: ["$unites2.libelle", 0] },

      id: "$_id",

      qteEnStock: { $toString: { $arrayElemAt: ["$articlesocietes.qteEnStock", 0] } },
      qteTheorique: { $toString: { $arrayElemAt: ["$articlesocietes.qteTheorique", 0] } },
      seuilRearpQTS: { $toString: { $arrayElemAt: ["$articlesocietes.seuilRearpQTS", 0] } },
      seuilAlerteQTS: { $toString: { $arrayElemAt: ["$articlesocietes.seuilAlerteQTS", 0] } },

      enVente: { $toString: { $arrayElemAt: ["$articlesocietes.enVente", 0] } },
      enAchat: { $toString: { $arrayElemAt: ["$articlesocietes.enAchat", 0] } },

      enBalance: { $toString: { $arrayElemAt: ["$articlesocietes.enBalance", 0] } },
      enPromotion: { $toString: { $arrayElemAt: ["$articlesocietes.enPromotion", 0] } },
      enNouveau: { $toString: { $arrayElemAt: ["$articlesocietes.enNouveau", 0] } },
      enDisponible: { $toString: { $arrayElemAt: ["$articlesocietes.enDisponible", 0] } },
      enArchive: { $toString: { $arrayElemAt: ["$articlesocietes.enArchive", 0] } },
      enVedette: { $toString: { $arrayElemAt: ["$articlesocietes.enVedette", 0] } },
      enLiquidation: { $toString: { $arrayElemAt: ["$articlesocietes.enLiquidation", 0] } },

      prixFourn: { $toString: "$prixFourn" },
      remiseF: { $toString: "$remiseF" },
      marge: { $toString: "$marge" },
      prixVenteHT: { $toString: "$prixVenteHT" },
      tauxTVA: { $toString: "$tauxTVA" },
      montantTVA: { $toString: "$montantTVA" },
      prixAchat: { $toString: "$prixAchat" },
      prixAchatTTC:{ $toString: "$prixAchatTTC" },
      valeurStock: { $toString: "$valeurStock" },
      prixTTC: { $toString: "$prixTTC" },
      plafondRemise: { $toString: "$plafondRemise" },
      pVenteConseille: { $toString: "$pVenteConseille" },
      longueur: { $toString: "$longueur" },
      largeur: { $toString: "$largeur" },
      hauteur: { $toString: "$hauteur" },
      surface: { $toString: "$surface" },
      volume: { $toString: "$volume" },
      prixVenteHT2: { $toString: "$prixVenteHT2" },
      prixVenteHT3: { $toString: "$prixVenteHT3" },
      poids: { $toString: "$poids" },
      coefficient: { $toString: "$coefficient" },
      remiseParMontant: { $toString: "$remiseParMontant" },
    }
  })

  pipeline.push({
    $project: {
      id: 1,
      reference: 1,
      codeBarre: 1,
      designation: 1,
      qteEnStock: 1,
      qteTheorique: 1,
      typeArticle: 1,
      prixFourn: 1,
      remiseF: 1,
      marge: 1,
      prixVenteHT: 1,
      tauxTVA: 1,
      montantTVA: 1,
      prixAchat: 1,
      prixAchatTTC: 1,
      valeurStock: 1,
      prixTTC: 1,
      plafondRemise: 1,
      pVenteConseille: 1,
      enVente: 1,
      enAchat: 1,
      refFournisseur: 1,
      redevance: 1,
      enBalance: 1,
      enPromotion: 1,
      enNouveau: 1,
      longueur: 1,
      largeur: 1,
      hauteur: 1,
      surface: 1,
      volume: 1,
      enDisponible: 1,
      enArchive: 1,
      enVedette: 1,
      enLiquidation: 1,
      description: 1,
      observations: 1,
      poids: 1,
      couleur: 1,
      unite1: 1,
      unite2: 1,
      coefficient: 1,
      emplacement: 1,
      raccourciPLU: 1,
      prixVenteHT2: 1,
      prixVenteHT3: 1,
      seuilAlerteQTS: 1,
      seuilRearpQTS: 1,
      categorie: 1,
      famille: 1,
      sousFamille: 1,
      marque: 1,
      modele: 1,
      remiseParMontant: 1,
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


  const articles = await Article.aggregate(pipeline)


  sommePipeline.push({
    $count: "total"
  })


  var nbrTotal = await Article.aggregate(sommePipeline)

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
 * /articles/getById/{id}:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
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
 *         description: The article was deleted
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
 *                     reference:
 *                       type: string
 *                     codeBarre:
 *                       type: string
 *                     designation:
 *                       type: string
 *                     typeArticle:
 *                       type: string
 *                     categorie:
 *                       type: string
 *                     famille:
 *                       type: string
 *                     sousFamille:
 *                       type: string
 *                     marque:
 *                       type: string
 *                     modele:
 *                       type: string
 *                     tauxTVA:
 *                       type: string
 *                     prixFourn:
 *                       type: number
 *                     remiseF:
 *                       type: number
 *                     marge:
 *                       type: number
 *                     prixVenteHT:
 *                       type: number
 *                     montantTVA:
 *                       type: number
 *                     prixAchat:
 *                       type: number
 *                     valeurStock:
 *                       type: number
 *                     QteEnStock:
 *                       type: number
 *                     prixTTC:
 *                       type: number
 *                     plafondRemise:
 *                       type: number
 *                     pVenteConseille:
 *                       type: number
 *                     enVente:
 *                       type: string
 *                     enAchat:
 *                       type: string
 *                     refFournisseur:
 *                       type: string
 *                     redevance:
 *                       type: number
 *                     enBalance:
 *                       type: string
 *                     enPromotion:
 *                       type: string
 *                     enNouveau:
 *                       type: string
 *                     longueur:
 *                       type: number
 *                     largeur:
 *                       type: number
 *                     hauteur:
 *                       type: number
 *                     surface:
 *                       type: number
 *                     volume:
 *                       type: number
 *                     enDisponible:
 *                       type: string
 *                     enArchive:
 *                       type: string
 *                     enVedette:
 *                       type: string
 *                     enLiquidation:
 *                       type: string
 *                     description:
 *                       type: string
 *                     observations:
 *                       type: string
 *                     poids:
 *                       type: number
 *                     couleur:
 *                       type: string
 *                     unite1:
 *                       type: string
 *                     unite2:
 *                       type: string
 *                     coefficient:
 *                       type: number
 *                     emplacement:
 *                       type: string
 *                     raccourciPLU:
 *                       type: string
 *                     prixVenteHT2:
 *                       type: number
 *                     prixVenteHT3:
 *                       type: number
 *                     seuilAlerteQTS:
 *                       type: number
 *                     seuilRearpQTS:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:societe/:id', async (req, res) => {

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

  const article = await Article.findOne({ _id: req.params.id })

  if (article == null) {
    return res.send({ status: false })
  }

  const articleSociete = await ArticleSociete.find({ societe: req.params.societe, article: article.id })

  const sousProduits = await SousProduit.find({ article: req.params.id })

  var newArticle = {
    isFodec: article.isFodec,
    prixFodec: article.prixFodec,
    tauxDC: article.tauxDC,
    prixDC: article.prixDC,
    totalFrais: article.totalFrais,
    reference: article.reference,
    codeBarre: article.codeBarre,
    designation: article.designation,
    typeArticle: article.typeArticle,
    categorie: article.categorie,
    famille: article.famille,
    sousFamille: article.sousFamille,
    marque: article.marque,
    modele: article.modele,
    tauxTVA: article.tauxTVA,
    prixFourn: article.prixFourn,
    remiseF: article.remiseF,
    marge: article.marge,
    prixVenteHT: article.prixVenteHT,
    montantTVA: article.montantTVA,
    prixAchat: article.prixAchat,
    prixAchatTTC: article.prixAchatTTC,
    valeurStock: article.valeurStock,
    prixTTC: article.prixTTC,
    plafondRemise: article.plafondRemise,
    pVenteConseille: article.pVenteConseille,
    refFournisseur: article.refFournisseur,
    redevance: article.redevance,
    lotActive: article.lotActive,
    longueur: article.longueur,
    largeur: article.largeur,
    hauteur: article.hauteur,
    surface: article.surface,
    volume: article.volume,
    description: article.description,
    observations: article.observations,
    poids: article.poids,
    couleur: article.couleur,
    unite1: article.unite1,
    unite2: article.unite2,
    coefficient: article.coefficient,
    emplacement: article.emplacement,
    raccourciPLU: article.raccourciPLU,
    prixVenteHT2: article.prixVenteHT2,
    prixVenteHT3: article.prixVenteHT3,
    frais: article.frais,
    societeRacine: article.societeRacine,
    prixWithQuantites: article.prixWithQuantites,
    sansRemise: article.sansRemise,
    margeAppliqueeSur: article.margeAppliqueeSur,
    sousProduits: sousProduits,
    fournisseur: article.fournisseur,

    venteAvecStockNegative: articleSociete[0].venteAvecStockNegative,
    stockMin: articleSociete[0].stockMin,
    stockMax: articleSociete[0].stockMax,
    stocks: articleSociete[0].stocks,
    qteEnStock: articleSociete[0].qteEnStock,
    qteTheorique: articleSociete[0].qteTheorique,
    enVente: articleSociete[0].enVente,
    enAchat: articleSociete[0].enAchat,
    enBalance: articleSociete[0].enBalance,
    enPromotion: articleSociete[0].enPromotion,
    enNouveau: articleSociete[0].enNouveau,
    enDisponible: articleSociete[0].enDisponible,
    enArchive: articleSociete[0].enArchive,
    enVedette: articleSociete[0].enVedette,
    enLiquidation: articleSociete[0].enLiquidation,
    societe: articleSociete[0].societe,

    seuilAlerteQTS: article.seuilAlerteQTS,
    seuilRearpQTS: article.seuilRearpQTS,
    remiseParMontant: article.remiseParMontant,
    sousArticles: article.sousArticles,
  }

  return res.send({ status: true, resultat: newArticle })

})

/**
 * @swagger
 * /articles/getByIdCategorie/{id}:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
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
 *         description: The article was deleted
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
 *                     reference:
 *                       type: string
 *                     codeBarre:
 *                       type: string
 *                     designation:
 *                       type: string
 *                     typeArticle:
 *                       type: string
 *                     categorie:
 *                       type: string
 *                     famille:
 *                       type: string
 *                     sousFamille:
 *                       type: string
 *                     marque:
 *                       type: string
 *                     modele:
 *                       type: string
 *                     tauxTVA:
 *                       type: string
 *                     prixFourn:
 *                       type: number
 *                     remiseF:
 *                       type: number
 *                     marge:
 *                       type: number
 *                     prixVenteHT:
 *                       type: number
 *                     montantTVA:
 *                       type: number
 *                     prixAchat:
 *                       type: number
 *                     valeurStock:
 *                       type: number
 *                     QteEnStock:
 *                       type: number
 *                     prixTTC:
 *                       type: number
 *                     plafondRemise:
 *                       type: number
 *                     pVenteConseille:
 *                       type: number
 *                     enVente:
 *                       type: string
 *                     enAchat:
 *                       type: string
 *                     refFournisseur:
 *                       type: string
 *                     redevance:
 *                       type: number
 *                     enBalance:
 *                       type: string
 *                     enPromotion:
 *                       type: string
 *                     enNouveau:
 *                       type: string
 *                     longueur:
 *                       type: number
 *                     largeur:
 *                       type: number
 *                     hauteur:
 *                       type: number
 *                     surface:
 *                       type: number
 *                     volume:
 *                       type: number
 *                     enDisponible:
 *                       type: string
 *                     enArchive:
 *                       type: string
 *                     enVedette:
 *                       type: string
 *                     enLiquidation:
 *                       type: string
 *                     description:
 *                       type: string
 *                     observations:
 *                       type: string
 *                     poids:
 *                       type: number
 *                     couleur:
 *                       type: string
 *                     unite1:
 *                       type: string
 *                     unite2:
 *                       type: string
 *                     coefficient:
 *                       type: number
 *                     emplacement:
 *                       type: string
 *                     raccourciPLU:
 *                       type: string
 *                     prixVenteHT2:
 *                       type: number
 *                     prixVenteHT3:
 *                       type: number
 *                     seuilAlerteQTS:
 *                       type: number
 *                     seuilRearpQTS:
 *                       type: number
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/getByIdCategorie/:id', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

  var articles = []

  if (req.params.id == undefined || req.params.id == null || req.params.id == "") {
    articles = await Article.find({ societeRacine: societeRacine })
  } else {
    articles = await Article.find({ categorie: req.params.id })
  }

  var newArticles = []

  for (let i = 0; i < articles.length; i++) {
    var article = articles[i]
    const articleSociete = await ArticleSociete.find({ societe: req.body.societe, article: articles[i].id })
    var sousProduits = await SousProduit.find({ article: articles[i].id })

    var newArticle = {
      id: article.id,
      reference: article.reference,
      codeBarre: article.codeBarre,
      designation: article.designation,
      typeArticle: article.typeArticle,
      categorie: article.categorie,
      famille: article.famille,
      sousFamille: article.sousFamille,
      marque: article.marque,
      modele: article.modele,
      tauxTVA: article.tauxTVA,
      prixFourn: article.prixFourn,
      remiseF: article.remiseF,
      marge: article.marge,
      prixVenteHT: article.prixVenteHT,
      valeurStock: article.valeurStock,
      prixTTC: article.prixTTC,
      redevance: article.redevance,
      sousProduits: sousProduits,

      stocks: articleSociete[0].stocks,
      qteEnStock: articleSociete[0].qteEnStock,
      qteTheorique: articleSociete[0].qteTheorique,
    }

    newArticles.push(newArticle)
  }

  return res.send({ status: true, resultat: newArticles })
})

router.post('/getArticlesByIdCategorie', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))

  var articles = []

  if (req.body.categorie == undefined || req.body.categorie == null || req.body.categorie == "") {
    articles = await Article.find({ societeRacine: societeRacine })
  } else {
    articles = await Article.find({ categorie: req.body.categorie })
  }

  var newArticles = []

  for (let i = 0; i < articles.length; i++) {
    var article = articles[i]
    const articleSociete = await ArticleSociete.find({ societe: req.body.societe, article: articles[i].id })

    var newArticle = {
      id: article.id,
      reference: article.reference,
      codeBarre: article.codeBarre,
      designation: article.designation,
      typeArticle: article.typeArticle,
      categorie: article.categorie,
      famille: article.famille,
      sousFamille: article.sousFamille,
      marque: article.marque,
      modele: article.modele,
      tauxTVA: article.tauxTVA,
      prixFourn: article.prixFourn,
      remiseF: article.remiseF,
      marge: article.marge,
      prixVenteHT: article.prixVenteHT,
      valeurStock: article.valeurStock,
      prixTTC: article.prixTTC,
      redevance: article.redevance,
      sousProduits: article.sousProduits,

      stocks: articleSociete[0].stocks,
      qteEnStock: articleSociete[0].qteEnStock,
      qteTheorique: articleSociete[0].qteTheorique,
    }

    newArticles.push(newArticle)
  }

  return res.send({ status: true, resultat: newArticles })
})

/**
 * @swagger
 * /articles/getAllParametres:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
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
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  categories:
 *                    type: array
 *                  marques:
 *                    type: array
 *                  familles:
 *                    type: array
 *                  sousFamilles:
 *                    type: array
 *                  modeles:
 *                    type: array 
 *                  tauxTVA:
 *                    type: array 
 *                  categorieFamilles:
 *                    type: array
 *                  familleSousFamilles:
 *                    type: array            
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getAllParametres/:id', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.params.id))

    
  const fournisseurs = await Fournisseur.find({societeRacine:societeRacine})
  const categories = await Categorie.find({societeRacine:societeRacine})
  const categorieFamilles = await CategorieFamille.find({societeRacine:societeRacine})
  const familleSousFamilles = await FamilleSousFamille.find({societeRacine:societeRacine})
  const familles = await Famille.find({societeRacine:societeRacine})
  const sousFamilles = await SousFamille.find({societeRacine:societeRacine})
  const marques = await Marque.find({societeRacine:societeRacine})
  const modeles = await Modele.find({societeRacine:societeRacine})
  const tauxTVAs = await TauxTVA.find({societeRacine:societeRacine})
  const frais = await Frais.find({societeRacine:societeRacine})
  const uniteMesures = await UniteMesure.find({societeRacine:societeRacine})
  const articles = await Article.find({societeRacine:societeRacine}).select({reference:1, designation:1, codeBarre:1, id:1 })
  const typeTiers = await TypeTier.find({societeRacine:societeRacine}).select({libelle:1, id:1 })
  const variantes = await Variante.find({societeRacine:societeRacine})



  return res.send({
    status: true, variantes: variantes, typeTiers: typeTiers, fournisseurs: fournisseurs, articles: articles, frais: frais, categories: categories, categorieFamilles: categorieFamilles, familleSousFamilles: familleSousFamilles, familles: familles,
    sousFamilles: sousFamilles, marques: marques, modeles: modeles, tauxTVAs: tauxTVAs, uniteMesures: uniteMesures
  })

})

router.get('/getCodeBare/:id', async (req, res) => {

  var societeRacine = await getSocieteRacine(ObjectId(req.params.id))

  var isValid = false
  var codeBarre = ""

  while (!isValid) {
    codeBarre = getCodeBarre()
    const articles = await Article.find({ codeBarre: codeBarre, societeRacine: societeRacine })
    if (articles.length == 0) {
      isValid = true
    }
  }

  return res.send({ status: true, codeBarre: codeBarre })

})

/**
 * @swagger
 * /articles/bonLivraisons:
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  categories:
 *                    type: array
 *                  marques:
 *                    type: array
 *                  familles:
 *                    type: array
 *                  sousFamilles:
 *                    type: array
 *                  modeles:
 *                    type: array 
 *                  tauxTVA:
 *                    type: array 
 *                  categorieFamilles:
 *                    type: array
 *                  familleSousFamilles:
 *                    type: array            
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/bonLivraisons', async (req, res) => {

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
    sort = { article: -1 }
  }

  var pipeline = []

  pipeline.push({ $match: { date: { $lte: dateEnd, $gte: dateStart }, societe: societe } })

  pipeline.push({
    "$group":
    {
      "_id": {
        article: "$article",
        reference: "$reference",
        designation: "$designation"
      },

      "quantiteVentes": { "$sum": "$quantiteVente" },
      "totalTTC": { "$sum": "$totalTTC" },
      "totalTVA": { "$sum": "$totalTVA" },
      "totalHT": { "$sum": "$totalHT" },
      "totalRemise": { "$sum": "$totalRemise" },
    }
  })

  pipeline.push({
    $set: {
      article: "$_id.article",
      reference: "$_id.reference",
      designation: "$_id.designation",
      quantiteVentes: { $toString: "$quantiteVentes" },
      totalTTC: { $toString: "$totalTTC" },
      totalTVA: { $toString: "$totalTVA" },
      totalHT: { $toString: "$totalHT" },
      totalRemise: { $toString: "$totalRemise" },
    }
  })

  pipeline.push({
    $project: {
      _id: 0,
      article: 1,
      reference: 1,
      designation: 1,
      quantiteVentes: 1,
      totalTTC: 1,
      totalTVA: 1,
      totalHT: 1,
      totalRemise: 1,
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

  const articles = await BonLivraisonArticle.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

  var nbrTotal = await BonLivraisonArticle.aggregate(sommePipeline)


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
 * /articles/chiffreAffaires:  
 *   get:
 *     summary: Remove the article by id
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The article was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  categories:
 *                    type: array
 *                  marques:
 *                    type: array
 *                  familles:
 *                    type: array
 *                  sousFamilles:
 *                    type: array
 *                  modeles:
 *                    type: array 
 *                  tauxTVA:
 *                    type: array 
 *                  categorieFamilles:
 *                    type: array
 *                  familleSousFamilles:
 *                    type: array            
 *       404:
 *         description: The article was not found
 *       500:
 *         description: Some error happened
 */
router.post('/chiffreAffaires', async (req, res) => {

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

  let pipeline = []
  pipeline.push({ $match: { societe: societe } })

  pipeline.push({
    $lookup: {
      from: 'bonlivraisons',
      let: { "client": "$_id", "dateStart": dateStart, "dateEnd": dateEnd },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$client", "$$client"] },
              { "$gte": ["$date", "$$dateStart"] },
              { "$lte": ["$date", "$$dateEnd"] }
            ]
          }
        }
      }],
      as: "bonLivraisons"
    }
  })

  pipeline.push({
    $lookup: {
      from: 'bonretourclients',
      let: { "client": "$_id", "dateStart": dateStart, "dateEnd": dateEnd },
      pipeline: [{
        $match:
        {
          $expr: {
            "$and": [
              { "$eq": ["$client", "$$client"] },
              { "$gte": ["$date", "$$dateStart"] },
              { "$lte": ["$date", "$$dateEnd"] }
            ]
          }
        }
      }],
      as: "bonRetourClients"
    }
  })

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
    $set: {
      secteur: { $arrayElemAt: ["$secteur.typeS", 0] },
      chiffreAffaire: { $toString: { $subtract: [{ $sum: "$bonLivraisons.totalHT" }, { $sum: "$bonRetourClients.totalHT" }] } }
    }
  })

  pipeline.push({
    $project: { secteur: 1, code: 1, email: 1, createdAt: 1, raisonSociale: 1, chiffreAffaire: 1 }
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

//Partie de sousArticle
router.post('/newSousArticle/:id', async (req, res) => {

  const article = await Article.findById(req.params.id)

  if (!article) return res.status(401).send({ status: false })

  var sousArticles = article.sousArticles
  sousArticles.push(req.body)

  await Article.findOneAndUpdate({ _id: req.params.id }, { sousArticles: req.body })

  const article2 = await Article.findById(req.params.id)
  return res.send({ status: true, resultat: article2.sousArticles })
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

module.exports.routerArticle = router
