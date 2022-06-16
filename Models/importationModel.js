const { Personnel, validatePersonnel, getNumeroAutomatiquePersonnel } = require('../Models/personnelModel')
const {Secteur, validateSecteur, getNumeroAutomatiqueSecteur} =require('../Models/secteurModel')
const {TypeTier, validateTypeTier, getNumeroAutomatiqueTypeTier} =require('../Models/typeTierModel')
const {ModeReglement, validateModeReglement, getNumeroAutomatiqueModeReglement} =require('../Models/modeReglementModel')

const { Article, SousProduit, validateReferenceDesignation, validateReferenceDesignationModifier, validateArticle, validateArticlesPagination, getCodeBarre, } = require('../Models/articleModel')
const { BonLivraisonArticle } = require('../Models/bonLivraisonArticleModel')

const { ArticleSociete } = require('../Models/articleSocieteModel')
const { Frais } = require('../Models/fraisModel')

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
const { Variante } = require('../Models/varianteModel')

const xlsx = require('xlsx');



async function getIdFromColonne(item, key, societeRacine){

    if(item[key] === undefined || item[key] === null || item[key] === ""){
      return null
    }
  
    switch (key) {
      case 'typeTiers':
        var idTypeTier = await getTypeTier(item, key, societeRacine)
        return idTypeTier
        break;
      case 'modeReglement':
        var idModeReglement = await getModeReglement(item, key, societeRacine)
        return idModeReglement
        break;
      case 'agentPremierContact':
        var idPersonnel = await getPersonnel(item, key, societeRacine)
        return idPersonnel
        break;
      case 'agentCommercial':
        var idPersonnel = await getPersonnel(item, key, societeRacine)
        return idPersonnel
        break;
      case 'agentRecouvrement':
        var idPersonnel = await getPersonnel(item, key, societeRacine)
        return idPersonnel
        break;
      case 'secteur':
        var idSecteur = await getSecteur(item, societeRacine)
        return idSecteur
        break;
      case 'categorie':
        var idCategorie = await getCategorieArticle(item, societeRacine)
        return idCategorie
        break;
      case 'famille':
        var idFamille = await getFamilleArticle(item, societeRacine)
        return idFamille
        break;
      case 'sousFamille':
        var idSousFamille = await getSousFamilleArticle(item, societeRacine)
        return idSousFamille
        break;
      case 'unite1':
        var idUnite1 = await getUniteArticle(item, key, societeRacine)
        return idUnite1
        break;
      case 'unite2':
        var idUnite2 = await getUniteArticle(item, key, societeRacine)
        return idUnite2
        break;
      case 'marque':
        var idMarque = await getMarqueArticle(item, societeRacine)
        return idMarque
        break;
      case 'modele':
        var idModele = await getModeleArticle(item, societeRacine)
        return idModele
        break;
      default:
        return null
    } 
  
  }
  
  async function getCategorieArticle(item, societeRacine){
    var categoriesFilter = []
    
    if(!isNaN(item.categorie)){
      categoriesFilter = await Categorie.find({$or: [{num:Number(item.categorie)}, {libelle:item.categorie}], societeRacine:societeRacine})
    }else{
      categoriesFilter = await Categorie.find({libelle:item.categorie, societeRacine:societeRacine})
    }
  
    if(categoriesFilter.length > 0){
      return categoriesFilter[0].id
    }else{
      var numCategorie = await getNumeroAutomatiqueCategorie(societeRacine)
      var categorie = new Categorie({libelle: item.categorie, societeRacine:societeRacine, num:numCategorie.num})
      var categorieResult = await categorie.save()
      return categorieResult.id
    }
    
    return null
  }
  
  async function getFamilleArticle(item, societeRacine){
    
    var famillesFilter = []
  
    if(!isNaN(item.famille)){
      famillesFilter = await Famille.find({$or: [{num:Number(item.famille)}, {libelle:item.famille}], societeRacine:societeRacine})
    }else{
      famillesFilter = await Famille.find({libelle:item.famille, societeRacine:societeRacine})
    }
    
    var idFamille = ""
    if(famillesFilter.length > 0){
      idFamille = famillesFilter[0].id
    }else{
      var numero = await getNumeroAutomatiqueFamille(societeRacine)
      var famille = new Famille({libelle: posts[i].famille, societeRacine:societeRacine, num:numero.num})
      var familleResult = await famille.save()
      idFamille = familleResult.id
    }
    
    var familleCategories = await CategorieFamille.find({categorie:item.categorie, famille:idFamille})
    if(familleCategories.length === 0){
      var categorieFamille = new CategorieFamille({categorie:item.categorie, famille:idFamille, societeRacine:societeRacine})
      await categorieFamille.save() 
    } 
   
    return idFamille
  
  }
  
  async function getSousFamilleArticle(item, societeRacine){
    
    var sousFamillesFilter = []
    
    if(!isNaN(item.sousFamille)){
      sousFamillesFilter = await SousFamille.find({$or: [{num:Number(item.sousFamille)}, {libelle:item.sousFamille}], societeRacine:societeRacine})
    }else{
      sousFamillesFilter = await SousFamille.find({libelle:item.sousFamille, societeRacine:societeRacine})
    }
  
    if(sousFamillesFilter.length > 0){
      item.sousFamille = sousFamillesFilter[0].id
    }else{
      var numero = await getNumeroAutomatiqueSousFamille(societeRacine)
      var sousFamille = new SousFamille({libelle: item.sousFamille, societeRacine:societeRacine, num:numero.num})
      var sousFamilleResult = await sousFamille.save()
      item.sousFamille = sousFamilleResult.id
    }
  
    var familleSousFamilles = await FamilleSousFamille.find({sousFamille:item.sousFamille, famille:item.famille})
    if(familleSousFamilles.length === 0){
      var familleSousFamille = new FamilleSousFamille({sousFamille:item.sousFamille, famille:item.famille, societeRacine:societeRacine})
      await familleSousFamille.save() 
    }
  
    return item.sousFamille
  }
  
  async function getMarqueArticle(item, societeRacine){
    
    var marquesFilter = []
    
    if(!isNaN(item.marque)){
      marquesFilter = await Marque.find({$or: [{num:Number(item.marque)}, {libelle:item.marque}], societeRacine:societeRacine})
    }else{
      marquesFilter = await Marque.find({libelle:item.marque, societeRacine:societeRacine})
    }
  
    if(marquesFilter.length > 0){
      item.marque = marquesFilter[0].id
    }else{
      var numMarque = await getNumeroAutomatiqueMarque(societeRacine)
      var marque = new Marque({libelle: item.marque, societeRacine:societeRacine, num:numMarque.num})
      var marqueResult = await marque.save()
      item.marque = marqueResult.id
    }
  
    return item.marque
  }
  
  async function getModeleArticle(item, societeRacine){
    
    var modelesFilter = []
    
    if(!isNaN(item.modele)){
      modelesFilter = await Modele.find({$or: [{num:Number(item.modele)}, {libelle:item.modele}], societeRacine:societeRacine, marque:item.marque})
    }else{
      modelesFilter = await Modele.find({libelle:item.modele, societeRacine:societeRacine, marque:item.marque})
    }
  
    if(modelesFilter.length > 0){
      item.modele = modelesFilter[0].id
    }else{
      var numModele = await getNumeroAutomatiqueModele(societeRacine)
      var modele = new Modele({libelle: item.modele, societeRacine:societeRacine, num:numModele.num, marque:item.marque})
      var modeleResult = await modele.save()
      item.modele = modeleResult.id
    }
  
    return item.modele
  }
  
  async function getUniteArticle(item, key, societeRacine){
    
    var unitesFilter = []
    
    if(!isNaN(item[key])){
      unitesFilter = await UniteMesure.find({$or: [{num:Number(item[key])}, {libelle:item[key]}], societeRacine:societeRacine})
    }else{
      unitesFilter = await UniteMesure.find({libelle:item[key], societeRacine:societeRacine})
    }
  
    if(unitesFilter.length > 0){
      unites.push({id:unitesFilter[0].id, libelle:item[key]})
      item[key] = unitesFilter[0].id
    }else{
      var numUnite = await getNumeroAutomatiqueUnite(societeRacine)
      var unite = new UniteMesure({libelle: item[key], societeRacine:societeRacine, num:numUnite.num})
      var uniteResult = await unite.save()
      unites.push({id:uniteResult.id, libelle:item[key]})
      item[key] = uniteResult.id
    }
   
    return item[key]
  }
  
  async function saveArticles(posts, societeRacine){
    for(let i = 0; i < posts.length; i++){
      var article = new Article(posts[i])
      const resultArticle = await article.save()   
      
      const societes = await getSocietesBySocieteParent(societeRacine)
  
      for (let j = 0; j < societes.length; j++) {
  
        const articleSociete = await ArticleSociete.find({ societe: societes[j].id, article: resultArticle.id })
  
        if (articleSociete.length == 0) {
          const articleSociete = new ArticleSociete({
            article: resultArticle.id,
            societe: societes[j].id,
  
            enVente: resultArticle.enVente,
            enAchat: resultArticle.enAchat,
  
            enBalance: resultArticle.enBalance,
            enPromotion: resultArticle.enPromotion,
            enNouveau: resultArticle.enNouveau,
            enDisponible: resultArticle.enDisponible,
            enArchive: resultArticle.enArchive,
            enVedette: resultArticle.enVedette,
            enLiquidation: resultArticle.enLiquidation,
  
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
  }
  
  

  async function calculPrixArticles(posts, tauxFodec, societeRacine){
    
    for(let i = 0; i < posts.length; i++){
      posts[i].societeRacine = societeRacine
  
      if(posts[i].prixFourn === undefined){
        posts[i].prixFourn = 0 
      }
  
      if(posts[i].remiseF === undefined){
        posts[i].remiseF = 0 
      }
  
      if(posts[i].tauxDC === undefined){
        posts[i].tauxDC = 0 
      }
  
      if(posts[i].marge === undefined){
        posts[i].marge = 0 
      }
  
      if(posts[i].isFodec === undefined){
        posts[i].isFodec = "non" 
      }
  
      if(posts[i].remiseParMontant === undefined){
        posts[i].remiseParMontant = 0 
      }
  
      if(posts[i].tauxTVA === undefined){
        posts[i].tauxTVA = 0 
      }
  
      if(posts[i].margeAppliqueeSur === undefined){
        posts[i].margeAppliqueeSur = "Achat"
      }
  
      if(posts[i].totalFrais === undefined){
        posts[i].totalFrais = 0 
      }
      
      var prixAchat = Number(posts[i].prixFourn) - Number(posts[i].prixFourn) * Number(posts[i].remiseF / 100)
      var marge = Number(posts[i].marge)
      
      posts[i].prixDC = Number(prixAchat * posts[i].tauxDC / 100) 
      
      if(posts[i].isFodec == "oui"){
        posts[i].prixFodec = Number(prixAchat * tauxFodec / 100) 
      }else{
        posts[i].prixFodec = Number(0) 
      }
  
      posts[i].prixAchat = Number(prixAchat) + Number(posts[i].prixDC) + Number(posts[i].prixFodec)
      
      posts[i].prixAchat = posts[i].prixAchat - posts[i].remiseParMontant
      posts[i].prixAchatTTC = Number(posts[i].prixAchat + posts[i].prixAchat * posts[i].tauxTVA / 100)
  
      if(posts[i].margeAppliqueeSur == "Revient"){
        var prixRevient =  Number(posts[i].prixAchat) + Number(posts[i].totalFrais)
        posts[i].prixVenteHT = Number(prixRevient) + marge * prixRevient / 100
      }else{
        posts[i].prixVenteHT = Number(posts[i].prixAchat) + marge * posts[i].prixAchat / 100
      }
      
      posts[i].montantTVA = Number(posts[i].prixVenteHT * posts[i].tauxTVA / 100)
      posts[i].prixTTC = Number(posts[i].montantTVA) + Number(posts[i].prixVenteHT)
  
      posts[i].categorie = await getIdFromColonne(posts[i], "categorie", societeRacine)
      posts[i].famille = await getIdFromColonne(posts[i], "famille", societeRacine)
      posts[i].sousFamille = await getIdFromColonne(posts[i], "sousFamille", societeRacine)
      posts[i].marque = await getIdFromColonne(posts[i], "marque", societeRacine)
      posts[i].modele = await getIdFromColonne(posts[i], "modele", societeRacine)
      posts[i].unite1 = await getIdFromColonne(posts[i], "unite1", societeRacine)
      posts[i].unite2 = await getIdFromColonne(posts[i], "unite2", societeRacine)
      
    }
  
    return posts
  
  }
  
  
  function getNumberFromString(text){
    var numberString = ""
    for(let i = 0; i < text.length; i++){
      if(!isNaN(text[i])){
        numberString += text[i]
      } 
    }
    return Number(numberString)
  }
  
  function getTextFromString(text){
    var textString = ""
    for(let i = 0; i < text.length; i++){
      if(isNaN(text[i])){
        textString += text[i]
      } 
    }
    return textString
  }
  
  function getKeyFromString(shema, textCell){
    for(let key in shema){
      if(shema[key] == textCell){
        return key
      }
    }
    return "" 
  }
  
  
  function getJsonFromXlsx(pathFichier, shemaXlsx){
    const workbook = xlsx.readFile(pathFichier)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  
    var shema = shemaXlsx
    var keys = []
  
    for (let key in shema) {
      keys.push(key)
    }
    
    let posts = []
    let post = {}
    let compteur = 0
    var nomberLigne = 2
  
    for (let cell in worksheet) {
      const cellAsString = cell.toString();
  
      if (cellAsString[1] !== 'r' && cellAsString !== 'm' && getNumberFromString(cellAsString) === 1 && compteur < keys.length) {
         shema[keys[compteur]] = getTextFromString(cellAsString) 
         compteur++
      }
    }
  
    compteur = 0
  
    for (let cell in worksheet) {
      const cellAsString = cell.toString();
  
      if (cellAsString[1] !== 'r' && cellAsString !== 'm' && getNumberFromString(cellAsString) > 1) {
        if(getNumberFromString(cellAsString) !== nomberLigne){
          nomberLigne = getNumberFromString(cellAsString)
          posts.push(post)
          post = {}
        }
        
        if(getKeyFromString(shema, getTextFromString(cellAsString)) != ""){
          post[getKeyFromString(shema, getTextFromString(cellAsString))] = worksheet[cell].v
        }
      }
    }
    
    posts.push(post)
    
    for(let item of posts){
      for(let key in shema){
        if(item[key] === undefined){
          item[key] = null 
        }
      }
    }
    
    return posts
  }

  async function saveClients(posts, societeRacine){
    
    for(let i = 0; i < posts.length; i++){
      posts[i].societeRacine = societeRacine
      
      posts[i].typeTiers = await getIdFromColonne(posts[i], "typeTiers", societeRacine)
      posts[i].secteur = await getIdFromColonne(posts[i], "secteur", societeRacine)
      posts[i].modeReglement = await getIdFromColonne(posts[i], "modeReglement", societeRacine)
      posts[i].agentPremierContact = await getIdFromColonne(posts[i], "agentPremierContact", societeRacine)
      posts[i].agentCommercial = await getIdFromColonne(posts[i], "agentCommercial", societeRacine)
      posts[i].agentRecouvrement = await getIdFromColonne(posts[i], "agentRecouvrement", societeRacine)
      
      var client = new Client(posts[i])
      await client.save()
    }
  
    return posts
  
  }

  async function getSecteur(item, key, societeRacine){
    
    var secteursFilter = []
    
    if(!isNaN(item[key])){
      secteursFilter = await Secteur.find({$or: [{num:Number(item[key])}, {typeS:item[key]}], societeRacine:societeRacine})
    }else{
      secteursFilter = await Secteur.find({typeS:item[key], societeRacine:societeRacine})
    }
  
    if(secteursFilter.length > 0){
      item[key] = marquesFilter[0].id
    }else{
      var numSecteur = await getNumeroAutomatiqueSecteur(societeRacine)
      var secteur = new Secteur({typeS:item[key], societeRacine:societeRacine, num:numSecteur.num})
      var secteurResult = await secteur.save()
      item[key] = secteurResult.id
    }
  
    return item[key]
  }

  async function getTypeTier(item, key, societeRacine){
    
    var typeTiersFilter = []
    
    if(!isNaN(item[key])){
      typeTiersFilter = await TypeTier.find({$or: [{num:Number(item[key])}, {libelle:item[key]}], societeRacine:societeRacine})
    }else{
      typeTiersFilter = await TypeTier.find({libelle:item[key], societeRacine:societeRacine})
    }
  
    if(typeTiersFilter.length > 0){
      item[key] = typeTiersFilter[0].id
    }else{
      var numTypeTier = await getNumeroAutomatiqueTypeTier(societeRacine)
      var typeTier = new TypeTier({libelle:item[key], societeRacine:societeRacine, num:numTypeTier.num})
      var typeTierResult = await typeTier.save()
      item[key] = typeTierResult.id
    }
  
    return item[key]
  }

  async function getModeReglement(item, key, societeRacine){
    
    var modeReglementsFilter = []
    
    if(!isNaN(item[key])){
      modeReglementsFilter = await ModeReglement.find({$or: [{num:Number(item[key])}, {libelle:item[key]}], societeRacine:societeRacine})
    }else{
      modeReglementsFilter = await ModeReglement.find({libelle:item[key], societeRacine:societeRacine})
    }
  
    if(modeReglementsFilter.length > 0){
      item[key] = modeReglementsFilter[0].id
    }else{
      var numModeReglement = await getNumeroAutomatiqueModeReglement(societeRacine)
      var modeReglement = new ModeReglement({libelle:item[key], societeRacine:societeRacine, num:numModeReglement.num})
      var modeReglementResult = await modeReglement.save()
      item[key] = modeReglementResult.id
    }
  
    return item[key]
  }

  async function getPersonnel(item, key, societeRacine){
    
    var personnelsFilter = []
    
    if(!isNaN(item[key])){
      personnelsFilter = await Personnel.find({$or: [{num:Number(item[key])}, {nom:item[key]}], societeRacine:societeRacine})
    }else{
      personnelsFilter = await Personnel.find({nom:item[key], societeRacine:societeRacine})
    }
  
    if(personnelsFilter.length > 0){
      item[key] = personnelsFilter[0].id
    }else{
      var numPersonnel = await getNumeroAutomatiquePersonnel(societeRacine)
      var personnel = new Personnel({nom:item[key], societeRacine:societeRacine, num:numPersonnel.num})
      var personnelResult = await personnel.save()
      item[key] = personnelResult.id
    }
  
    return item[key]
  }
  
  module.exports.saveClients = saveClients
  module.exports.getJsonFromXlsx = getJsonFromXlsx
  module.exports.calculPrixArticles = calculPrixArticles
  module.exports.saveArticles = saveArticles