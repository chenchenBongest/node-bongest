const { Article, SousProduit, validateReferenceDesignation, validateReferenceDesignationModifier, validateArticle, validateArticlesPagination, getCodeBarre, } = require('../Models/articleModel')
const { BonLivraisonArticle } = require('../Models/bonLivraisonArticleModel')

const { ArticleSociete } = require('../Models/articleSocieteModel')
const { Frais } = require('../Models/fraisModel')

const { getJsonFromXlsx, calculPrixArticles, saveArticles, saveClients} = require('../Models/importationModel')

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



router.post('/upload', upload.array('myFiles'), async (req, res) => {
    const files = req.files
    let arr = [];
    files.forEach(element => {
  
      arr.push(element.path)
  
    })
    return res.send(arr)
})

//importation articles with accessoires
router.post('/extractFromFile', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
  
    var posts = getJsonFromXlsx(req.body.pathFichier, req.body.shema)
  
    return res.send({ status: true, articles:posts})
  
  })

//importation articles with accessoires
router.post('/saveFileArticle', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
  
    var posts = getJsonFromXlsx(req.body.pathFichier, req.body.shema)
    
    posts = await calculPrixArticles(posts, req.body.tauxFodec, societeRacine)
  
    await saveArticles(posts, societeRacine)
  
    return res.send({ status: true})
})


//importation articles with accessoires
router.post('/saveFileClient', async (req, res) => {

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
  
    var posts = getJsonFromXlsx(req.body.pathFichier, req.body.shema)
  
    await saveClients(posts, societeRacine)
  
    return res.send({ status: true})
})


module.exports.routerImportation = router


