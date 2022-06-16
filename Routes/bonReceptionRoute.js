const {BonReception, getNumeroAutomatique} =require('../Models/bonReceptionModel')
const {BonReceptionArticle} =require('../Models/bonReceptionArticleModel')
const {Parametres} =require('../Models/parametresModel')

const {Reception} =require('../Models/receptionModel')

const {Article, getArticlesWithQuantites, getArticlesWithQuantitesfilterBySearch} =require('../Models/articleModel')

const {ChargeDirecte} =require('../Models/chargeDirecteModel')
const {ArticleSociete, updateQteEnStock,updateQteTherique, updateQteTheriqueQteEnStock } =require('../Models/articleSocieteModel')
var ObjectId = require('mongodb').ObjectID;

const {Societe, getSocieteRacine, getSocietesBySocieteParent } =require('../Models/societeModel')
const {UniteMesure, validateUniteMesure} =require('../Models/uniteMesureModel')

const {Fournisseur} =require('../Models/fournisseurModel')
const {BonCommande} =require('../Models/bonCommandeModel')
const {BonCommandeArticle} =require('../Models/bonCommandeArticleModel')

const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const {User, validateDownloadData} =require('../Models/userModel')

const { Liltrage } = require('../Models/liltrageModel');
const { ModeReglement } = require('../Models/modeReglementModel');
const { Transporteur } = require('../Models/transporteursModel')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null,  file.originalname + Date.now())
    }
})


var upload = multer({ storage: storage })

/**
 * @swagger
 * components:
 *   schemas:
 *     BonReception:
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
 *               prixReception:
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
 *   name: BonReceptions
 *   description: The BonReceptions managing API
 */


/**
 * @swagger
 * paths:
 *   /bonReceptions/upload:
 *     post:
 *       summary: upload image
 *       tags: [BonReceptions]
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
router.post('/upload',upload.array('myFiles'),async(req,res)=>{
    const files = req.files
    let arr=[];
    files.forEach(element => {

        arr.push(element.path)

    })
    return res.send(arr)
})





/**
 * @swagger
 * /bonReceptions/newBonReception:
 *   post:
 *     summary: Returns the list of all the BonReceptions
 *     tags: [BonReceptions]
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
 *                      prixReception:
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
 *         description: The list of the BonReceptions
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
 *                          prixReception:
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
router.post('/newBonReception', async(req,res)=>{

    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    req.body.numero = numeroAutomatique.numero
    req.body.num = numeroAutomatique.num

    req.body.idBonCommandeTransfert = req.body.idTypeTransfert

    const bonReception = new BonReception(req.body);

    const result=await bonReception.save()

    for(let i = 0; i < req.body.articles.length; i++){
        let item = new BonReceptionArticle(req.body.articles[i])
        await updateQteEnStock(req.body.articles[i], "plus", "plus")
       
        item.bonReception = result.id
        item.date = result.date
        const resul = item.save()
    }

   /*var somme = await setLiltrageBonReception(result, req.body.reglements)

    req.body.montantPaye = somme
    req.body.restPayer = req.body.montantTotal - somme
    
    await BonReception.findOneAndUpdate({_id:req.params.id}, req.body)
   */
    return res.send({status:true,resultat:result})
    
})


/**
 * @swagger
 * /bonReceptions/modifierBonReception/{id}:
 *   post:
 *     summary: Update the bonReception by id
 *     tags: [BonReceptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonReception id

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
 *                      prixReception:
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
 *         description: The list of the BonReceptions
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
 *                          prixReception:
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

router.post('/modifierBonReception/:id', async(req,res)=>{

    const bonReception = await BonReception.findById(req.params.id)

    if(bonReception.societe != req.body.societe){
        return res.send({status:false})
    }

    if(!bonReception) return res.status(401).send({status:false})

    /*var somme = await setLiltrageBonReception(bonReception, req.body.reglements)

    req.body.montantPaye = somme
    req.body.restPayer = req.body.montantTotal - somme
    */
    const result = await BonReception.findOneAndUpdate({_id:req.params.id}, req.body)

    const bonReception2 = await BonReception.findById(req.params.id)

    const bonReceptionArticles =  await BonReceptionArticle.find({bonReception:req.params.id})

    for(let i = 0; i < bonReceptionArticles.length; i++){
        await updateQteEnStock(bonReceptionArticles[i], "moin", "moin")
        const deleteItem = await BonReceptionArticle.findOneAndDelete({_id:bonReceptionArticles[i].id})
    }

    for(let i = 0; i < req.body.articles.length; i++){
        await updateQteEnStock(req.body.articles[i], "plus", "plus")
        let item = new BonReceptionArticle(req.body.articles[i])
        item.bonReception = result.id
        item.date = result.date
        const resul = item.save()
    }

    return res.send({status:true,resultat:bonReception2})
})





/**
 * @swagger
 * /bonReceptions/deleteBonReception/{id}:
 *   post:
 *     summary: Remove the bonReception by id
 *     tags: [BonReceptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bonReception id
 *
 *     responses:
 *       200:
 *         description: The bonReception was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The bonReception was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteBonReception/:id', async(req,res)=>{

    const bonReception = await BonReception.findById(req.params.id)
    
    var fournisseur = await Fournisseur.findById(bonReception.fournisseur)
    
    if(!bonReception) return res.status(401).send({status:false})

    const bonReceptionArticles =  await BonReceptionArticle.find({bonReception:req.params.id})

    for(let i = 0; i < bonReceptionArticles.length; i++){

        await updateQteEnStock(bonReceptionArticles[i], "moin", "moin")
        
        const deleteItem = await BonReceptionArticle.findOneAndDelete({_id:bonReceptionArticles[i].id})
   
        // if(fournisseur != undefined)
        // {
        //     const deleteHisto = await HistoriqueArticleReception.find({idArticle:bonReceptionArticles[i].article,nomFournisseur:fournisseur.id})
        //     for(let item of deleteHisto)
        //     {
        //         console.log("yyyyy")
        //         await HistoriqueArticleReception.deleteMany({})
        //    }
        // }
         
    }

   /* await setLiltrageBonReception(bonReception, [])
*/
    if(await BonReception.findOneAndDelete({_id:req.params.id})){
        return res.send({status:true})
    }else{
        return res.send({status:false})
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
 * /bonReceptions/listBonReceptions:
 *   post:
 *     summary: Returns the list of all the bonReceptions
 *     tags: [BonReceptions]
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
 *         description: The list of the BonReceptions
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
 *                                  prixReception:
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


 
 router.post('/listBonReceptions', async(req,res)=>{
  
    var dateStart =new Date(req.body.dateStart)
    var dateEnd = new Date(req.body.dateEnd)
    var societe = ObjectId(req.body.magasin)

    var sort = {}
    for( let key in req.body.orderBy){
        if(Number(req.body.orderBy[key]) != 0){
             sort[key] = req.body.orderBy[key]
        }  
    }

    if(Object.keys(sort).length == 0){
        sort = {createdAt:-1}
    }
   
    var pipeline = []

    pipeline.push({ $match : { date: { $lte: dateEnd, $gte: dateStart}, societe:societe } } )
    
    pipeline.push({
        $lookup: {
          from: 'fournisseurs',
          let: { "fournisseur": "$fournisseur"},
          pipeline: [{$match: 
              {$expr: {
                  "$and": [
                    { "$eq": [ "$_id", "$$fournisseur" ] },
                  ]
                }
              }
            },
         ],
          as:"fournisseurs"
        }
    })
   
    pipeline.push({
      $set: {
        fournisseur: { $arrayElemAt: ["$fournisseurs.raisonSociale", 0] },
        totalRemise:{ $toString: "$totalRemise" },
        totalHT:{ $toString: "$totalHT" },
        totalTVA:{ $toString: "$totalTVA" },
        tFiscale:{ $toString: "$timbreFiscale" },
        totalTTC:{ $toString: "$totalTTC" },
        totalGain:{ $toString: "$totalGain" },
   
        date:{ $dateToString: { 
            format: "%Y-%m-%d", date: "$date" 
        } },
        id:"$_id"
      }
    })

    pipeline.push({
       $project: { 
           id:1, 
           fournisseur:1,
           totalRemise:1,
           totalHT:1,
           totalTVA:1,
           tFiscale:1,
           totalTTC:1,
           totalGain:1,
           isTransfert:1,
           date:1,
           numero:1
        }
    })

    var search = req.body.search
    
    for( let key in search){
            
        if(search[key] != ""){
            var word1 = search[key].charAt(0).toUpperCase() + search[key].slice(1)
            var word2 = search[key].toUpperCase()
            var word3 = search[key].toLowerCase()

         
            var objet1 = {}
            objet1[key] = { $regex: '.*' + word1 + '.*' }
           
            var objet2 = {}
            objet2[key] = { $regex: '.*' + word2 + '.*' }
            
            var objet3 = {}
            objet3[key] = { $regex: '.*' + word3 + '.*' }

            let objectMatch = {$or:[objet1, objet2, objet3]}
            
            let objectParent = {$match : objectMatch}
            pipeline.push(objectParent)
        }  
    }

    
    var sommePipeline = []
    for(let key in pipeline){
      sommePipeline.push(pipeline[key])
    }

    pipeline.push({
      $sort:sort
    })

    var skip = Number(req.body.page - 1) * Number(req.body.limit)

    pipeline.push({$limit: skip + Number(req.body.limit)})

    pipeline.push({$skip: skip})

    const articles = await BonReception.aggregate(pipeline)

    sommePipeline.push({
      $count: "total"
    })

    var nbrTotal = await BonReception.aggregate(sommePipeline)

    if(nbrTotal.length == 0){
        nbrTotal = [{total:0}]
    }

    const nbrTotalTrunc = Math.trunc(nbrTotal[0].total / req.body.limit)
    var pages = nbrTotal[0].total / req.body.limit

    if(pages > nbrTotalTrunc){
      pages = nbrTotalTrunc + 1
    }

    const result = {docs:articles, pages:pages}
   
    return res.send({status:true, resultat:result, request:req.body})
    
})



/**
 * @swagger
 * /bonReceptions/getById/{id}:
 *   get:
 *     summary: Remove the bonReception by id
 *     tags: [BonReceptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bonReception id
 *
 *     responses:
 *       200:
 *         description: The bonReception was deleted
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
 *                          prixReception:
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
 *         description: The bonReception was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

    if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

    var idBonReceptions = []
    var ch = req.params.id
    while(ch.length > 0){
        var pos = ch.indexOf("&&")
        if(pos == -1){
            var id = ch
            ch = ""
            idBonReceptions.push(id)
        }else{
            var id = ch.substring(0, pos)
            ch = ch.substring(pos+2)
            idBonReceptions.push(id)
        }
    }
    
    var tabInteger = ["restPayer", "montantPaye","montantTotal", "totalFodec", "totalRedevance", "totalDC", "montantEscompte", "totalGainReel", "totalGainCommerciale", "totalTTC", "timbreFiscale", "totalRemise", "totalHT", "totalTVA"]
    var tabLigneArticle = ["montantRemise","prixSpecifique","totalRemise","totalHT","tauxTVA","totalTVA","redevance","totalTTC","pVenteConseille","marge","article","totalRedevance","tauxRemise","plafondRemise","prixTTC","prixTTC","prixTTC","prixTTC","totalFrais","prixDC","tauxDC","prixFodec","isFodec","prixFourn","remiseF","prixAchat","designation","reference","numero"]
    var newBonReception = {}
    newBonReception.numero = "New"
    newBonReception.date = new Date()
    
    for(let k = 0; k < tabInteger.length; k++){
       newBonReception[tabInteger[k]] = 0
    }
    
    console.log(idBonReceptions)
          
    var tabLigneBonReception = []
    var numero = 1
    
    for(let i = 0; i < idBonReceptions.length; i++){
        if(ObjectId.isValid(idBonReceptions[i])){
            var bonReceptionItem = {} 
            var bonReceptionArticles =  await BonReceptionArticle.find({bonReception:idBonReceptions[i]})
            var bonReception = await BonReception.findOne({_id:idBonReceptions[i]})
           
            for(let k = 0; k < tabInteger.length; k++){
                newBonReception[tabInteger[k]] += Number(bonReception[tabInteger[k]]) 
            }
            

            for(let j = 0; j < bonReceptionArticles.length; j++){
                var item = new BonReceptionArticle()
                console.log(item)
                var newItem = {}
                for(let key in item){
                    newItem[key] = bonReceptionArticles[j][key]
                }
                newItem.numero = numero
                newItem.bonReception = bonReception.numero
                tabLigneBonReception.push(newItem)
                numero++
            }
        }
    }

    //tabLigneBonReception = optimiserLigneArticles(tabLigneBonReception)

    console.log(tabLigneBonReception)
    return res.send({status:true,resultat:newBonReception, articles:tabLigneBonReception})

})

function optimiserLigneArticles(lignes){
    
    var newLigneBonReception = []
    var numero = 1
    for(let i = 0; i < lignes.length; i++){

        var isExiste = false
        for(let j = 0; j < newLigneBonReception.length; j++){
            if(lignes[i].article === newLigneBonReception[j].article){
               isExiste = true
            } 
        }  

        
        if(!isExiste){
            var sommeQuantite = 0
            var sommePrixAchatHT = 0

            for(let j = 0; j < lignes.length; j++){
                if(lignes[i].article === lignes[j].article){
                  sommeQuantite += lignes[j].quantiteAchat
                  sommePrixAchatHT += lignes[j].prixAchatHTReel
                } 
            }  
            
            var prixMoyenne = sommePrixAchatHT / sommeQuantite 
    
            newLigneBonReception.push(lignes[i])
            newLigneBonReception[numero - 1].quantiteAchat = sommeQuantite
            newLigneBonReception[numero - 1].prixAchatHTReel = prixMoyenne
            newLigneBonReception[numero - 1].numero = numero
            
        }
      
        
    }

    return newLigneBonReception

}

/**
 * @swagger
 * /bonReceptions/getAllParametres:
 *   get:
 *     summary: Remove the article by id
 *     tags: [BonReceptions]
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
router.post('/getAllParametres', async(req,res)=>{

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    const articles = await getArticlesWithQuantitesfilterBySearch(societe, societeRacine, {enAchat:'oui'})
    const clients = await Fournisseur.find({societeRacine:societeRacine})
    const uniteMesures = await UniteMesure.find({societeRacine:societeRacine})
    const modeReglements = await ModeReglement.find({societeRacine:societeRacine})
    const transporteurs = await Transporteur.find({societeRacine:societeRacine})
    const charges = await ChargeDirecte.find({societeRacine:societeRacine})
    return res.send({status:true, transporteurs:transporteurs, uniteMesures:uniteMesures, articles:articles, 
        clients:clients, numeroAutomatique:numeroAutomatique.numero, 
        modeReglements:modeReglements,charges:charges}) 
})




  
  
function verifytoken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'secretkey', (err, authData) => {
            if(err){
                res.sendStatus(403);
            }else{
                req.user = authData;
                next();
            }
        });

    }else{
        console.log("etape100");
        res.sendStatus(401);
    }
}
module.exports.routerBonReception=router
