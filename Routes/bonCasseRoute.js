const {BonCasse, getNumeroAutomatique} =require('../Models/bonCasseModel')
const {BonCasseArticle} =require('../Models/bonCasseArticleModel')
const {Article, getArticlesWithQuantites} =require('../Models/articleModel')
const {UniteMesure, validateUniteMesure} =require('../Models/uniteMesureModel')
const {Utilisateur} =require('../Models/utilisateurModel')

const {Societe, getSocieteRacine, getSocietesBySocieteParent } =require('../Models/societeModel')
const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');
var ObjectId = require('mongodb').ObjectID;

var dateFormat = require('dateformat');
const {User, validateDownloadData} =require('../Models/userModel')
const { ArticleSociete } = require('../Models/articleSocieteModel')
const { Console } = require('console')
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
 *     BonCasse:
 *       type: object
 *       required:
 *         - numero
 *         - date
 *         - totalRemise
 *         - totaleHT
 *         - totalTVA
 *         - tFiscale
 *         - totalTTC
 *         - totalGain
 *         - montantPaye
 *         - credit
 *         - magasinDepart
 *         - magasinArrive
 *         - societe
 *         - expeditions
 *       properties:
 *         numero:
 *           type: string
 *         date:
 *           type: string
 *         totalRemise:
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
 *         montantPaye:
 *           type: number
 *         credit:
 *           type: number
 *         magasinDepart:
 *           type: string
 *         magasinArrive:
 *           type: string
 *         societe:
 *           type: string
 *         expeditions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               transporteur:
 *                 type: string
 *               date:
 *                 type: string
 *               articles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     numero:
 *                      type: number
 *                     article:
 *                      type: string
 *                     reference:
 *                       type: string
 *                     designation:
 *                       type: string
 *                     quantiteVente:
 *                       type: number
 *                     quantiteLivree:
 *                       type: number
 *                     quantiteALivree:
 *                       type: number
 *                     quantiteRestant:
 *                       type: number
 *                     unite:
 *                       type: string
 *         
 */

/**
 * @swagger
 * tags:
 *   name: BonCasses
 *   description: The BonCasses managing API
 */


/**
 * @swagger
 * paths:
 *   /bonCasses/upload:
 *     post:
 *       summary: upload image
 *       tags: [BonCasses]
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
 * /bonCasses/newBonCasse:
 *   post:
 *     summary: Returns the list of all the BonCasses
 *     tags: [BonCasses]
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
 *                totalRemise:
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
 *                montantPaye:
 *                  type: number
 *                credit:
 *                  type: number
 *                magasinDepart:
 *                  type: string
 *                magasinArrive:
 *                  type: string
 *                expeditions:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      transporteur:
 *                        type: string
 *                      date:
 *                        type: string
 *                      articles:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            numero:
 *                              type: number
 *                            article:
 *                              type: string
 *                            reference:
 *                              type: string
 *                            designation:
 *                              type: string
 *                            quantiteVente:
 *                              type: number
 *                            quantiteLivree:
 *                              type: number
 *                            quantiteALivree:
 *                              type: number
 *                            quantiteRestant:
 *                              type: number
 *                            unite:
 *                              type: string 
 *     responses:
 *       200:
 *         description: The list of the BonCasses
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
 *                    totalRemise:
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
 *                    montantPaye:
 *                      type: number
 *                    credit:
 *                      type: number
 *                    magasinDepart:
 *                      type: string
 *                    magasinArrive:
 *                      type: string
 *                    expeditions:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          transporteur:
 *                            type: string
 *                          articles:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                numero:
 *                                  type: number
 *                                article:
 *                                  type: string
 *                                reference:
 *                                  type: string
 *                                designation:
 *                                  type: string
 *                                quantiteVente:
 *                                  type: number
 *                                quantiteLivree:
 *                                  type: number
 *                                quantiteALivree:
 *                                  type: number
 *                                quantiteRestant:
 *                                  type: number
 *                                unite:
 *                                  type: string
 *
 */
router.post('/newBonCasse', async(req,res)=>{
    
    var societe = ObjectId(req.body.societe)
    var exercice = req.body.exercice
    var numeroAutomatique = await getNumeroAutomatique(societe, exercice)

    req.body.numero = numeroAutomatique.numero
    req.body.num = numeroAutomatique.num

    const bonCasse=new BonCasse(req.body);
    const result= await bonCasse.save()
    for(let i = 0; i < req.body.articles.length; i++){
        let item = new BonCasseArticle(req.body.articles[i])
  
        //modification stock de societe Arrivee et societe depart
        let articleSociete = await ArticleSociete.findOne({article:req.body.articles[i].article, societe:req.body.societe })
        await ArticleSociete.findOneAndUpdate({_id:articleSociete.id}, {qteEnStock:Number(articleSociete.qteEnStock) - Number(req.body.articles[i].quantiteVente), qteTheorique:Number(articleSociete.qteTheorique) - Number(req.body.articles[i].quantiteVente)})
        //modification stock de societe Arrivee et societe depart
        
        item.bonCasse = result.id
        item.date = result.date
        item.societe = societe
        const resul = item.save()
    }

    return res.send({status:true,resultat:result})
    
})


/**
 * @swagger
 * /bonCasses/modifierBonCasse/{id}:
 *   post:
 *     summary: Update the BonCasse by id
 *     tags: [BonCasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCasse id

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
 *                totalRemise:
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
 *                montantPaye:
 *                 type: number
 *                credit:
 *                 type: number
 *                magasinDepart:
 *                 type: string
 *                magasinArrive:
 *                 type: string
 *                expeditions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                      transporteur:
 *                        type: string
 *                      date:
 *                        type: string
 *                      articles:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                            numero:
 *                              type: number
 *                            article:
 *                              type: string
 *                            reference:
 *                              type: string
 *                            designation:
 *                              type: string
 *                            quantiteVente:
 *                              type: number
 *                            quantiteLivree:
 *                              type: number
 *                            quantiteALivree:
 *                              type: number
 *                            quantiteRestant:
 *                              type: number
 *                            unite:
 *                              type: string
 *     responses:
 *       200:
 *         description: The list of the BonCasses
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
 *                     montantPaye:
 *                      type: number
 *                     montantPaye:
 *                      type: number
 *                     magasinDepart:
 *                      type: string
 *                     magasinArrive:
 *                      type: string
 *                     expeditions:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          transporteur:
 *                            type: string
 *                          date:
 *                            type: string
 *                          articles:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                numero:
 *                                  type: number
 *                                article:
 *                                  type: string
 *                                reference:
 *                                  type: string
 *                                designation:
 *                                  type: string
 *                                quantiteVente:
 *                                  type: number
 *                                quantiteLivree:
 *                                  type: number
 *                                quantiteALivree:
 *                                  type: number
 *                                quantiteRestant:
 *                                  type: number
 *                                unite:
 *                                  type: string
 *
 *
 */

router.post('/modifierBonCasse/:id', async(req,res)=>{

    const bonCasse = await BonCasse.findById(req.params.id)

    if(!bonCasse) return res.status(401).send({status:false})

    /*var body = Object.keys(req.body).reduce((object, key) => {
        if (key !== "societe" && key !== "magasinDepart") {
          object[key] = req.body[key]
        }
        return object
    }, {})*/

    const result = await BonCasse.findOneAndUpdate({_id:req.params.id}, req.body)

    const bonCasse2 = await BonCasse.findById(req.params.id)

    const bonCasseArticles =  await BonCasseArticle.find({bonCasse:req.params.id})

    for(let i = 0; i < bonCasseArticles.length; i++){
        let article = await Article.findById(bonCasseArticles[i].article)
        
        //modification stock de societe Arrivee et societe depart
        let articleSociete = await ArticleSociete.findOne({article:bonCasseArticles[i].article, societe:bonCasse.societe })
        await ArticleSociete.findOneAndUpdate({_id:articleSociete.id}, {qteEnStock:Number(articleSociete.qteEnStock) + Number(bonCasseArticles[i].quantiteVente), qteTheorique:Number(articleSociete.qteTheorique) + Number(bonCasseArticles[i].quantiteVente)})
        //modification stock de societe Arrivee et societe depart
        
        const deleteItem = await BonCasseArticle.findOneAndDelete({_id:bonCasseArticles[i].id})
    }

    for(let i = 0; i < req.body.articles.length; i++){
        let item = new BonCasseArticle(req.body.articles[i])
        let article = await Article.findById(req.body.articles[i].article)
    
        //modification stock de societe Arrivee et societe depart
        let articleSociete = await ArticleSociete.findOne({article:req.body.articles[i].article, societe:req.body.societe })
        await ArticleSociete.findOneAndUpdate({_id:articleSociete.id}, {qteEnStock:Number(articleSociete.qteEnStock) - Number(req.body.articles[i].quantiteVente), qteTheorique:Number(articleSociete.qteTheorique) - Number(req.body.articles[i].quantiteVente)})
        //modification stock de societe Arrivee et societe depart
         
        item.bonCasse = result.id
        item.date = result.date
        item.societe = result.societe
        const resul = item.save()
    }
    return res.send({status:true,resultat:bonCasse2})
})


/**
 * @swagger
 * /bonCasses/addExpedition/{id}:
 *   post:
 *     summary: Update the BonCasse by id
 *     tags: [BonCasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCasse id
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
 *                      quantiteVente:
 *                        type: number
 *                      quantiteALivree:
 *                        type: number
 *                      quantiteRestant:
 *                        type: number
 *                      unite:
 *                        type: string 
 *     responses:
 *       200:
 *         description: The list of the BonCasses
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

 router.post('/addExpedition/:id', async(req,res)=>{

    const bonCasse = await BonCasse.findById(req.params.id)

    if(!bonCasse) return res.status(401).send({status:false})

    
    var expeditions = []

    expeditions.push(req.body)

    for(let i = 0; i < bonCasse.expeditions.length; i++){
        expeditions.push(bonCasse.expeditions[i])
    }

    const result = await BonCasse.findOneAndUpdate({_id:req.params.id}, {expeditions:expeditions})

    const bonCasse2 = await BonCasse.findById(req.params.id)

    return res.send({status:true,resultat:bonCasse2.expeditions})
})


/**
 * @swagger
 * /bonCasses/deleteBonCasse/{id}:
 *   post:
 *     summary: Remove the BonCasse by id
 *     tags: [BonCasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCasse id
 *
 *     responses:
 *       200:
 *         description: The BonCasse was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The BonCasse was not found
 *       500:
 *         description: Some error happened
 */
router.post('/deleteBonCasse/:id', async(req,res)=>{

    const bonCasse = await BonCasse.findById(req.params.id)

    if(!bonCasse) return res.status(401).send({status:false})

    const bonCasseArticles =  await BonCasseArticle.find({bonCasse:req.params.id})

    for(let i = 0; i < bonCasseArticles.length; i++){
        let article = await Article.findById(bonCasseArticles[i].article)
        
        //modification stock de societe Arrivee et societe depart
        let articleSociete = await ArticleSociete.findOne({article:bonCasseArticles[i].article, societe:bonCasse.societe })
        await ArticleSociete.findOneAndUpdate({_id:articleSociete.id}, {qteEnStock:Number(articleSociete.qteEnStock) + Number(bonCasseArticles[i].quantiteVente), qteTheorique:Number(articleSociete.qteTheorique) + Number(bonCasseArticles[i].quantiteVente)})
        //modification stock de societe Arrivee et societe depart
        
        const deleteItem = await BonCasseArticle.findOneAndDelete({_id:bonCasseArticles[i].id})
    }

    if(await BonCasse.findOneAndDelete({_id:req.params.id})){
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
 * /bonCasses/listBonCasses:
 *   post:
 *     summary: Returns the list of all the BonCasses
 *     tags: [BonCasses]
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
 *         description: The list of the BonCasses
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
 *                            totalRemise:
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
 *                            montantPaye:
 *                              type: number
 *                            credit:
 *                              type: number
 *                            magasinDepart:
 *                              type: string
 *                            magasinArrive:
 *                              type: string
 *                            expeditions:
 *                              type: array
 *                              items:
 *                                type: object
 *                                properties:
 *                                  transporteur:
 *                                    type: string
 *                                  date:
 *                                    type: string
 *                                  articles:
 *                                    type: array
 *                                    items:
 *                                      type: object
 *                                      properties:
 *                                        numero:
 *                                          type: number
 *                                        article:
 *                                          type: string
 *                                        reference:
 *                                          type: string
 *                                        designation:
 *                                          type: string
 *                                        quantiteVente:
 *                                          type: number
 *                                        quantiteLivree:
 *                                          type: number
 *                                        quantiteALivree:
 *                                          type: number
 *                                        quantiteRestant:
 *                                          type: number
 *                                        unite:
 *                                          type: string
 *                                  createdAt:
 *                                    type: string
 *                                  updatedAt:
 *                                    type: string
 *
 *
 *
 */

 router.post('/listBonCasses', async(req,res)=>{
    
    var dateStart =new Date(req.body.dateStart)
    var dateEnd = new Date(req.body.dateEnd)
    var societe = ObjectId(req.body.societe)

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

    pipeline.push({ $match : { date: { $lte: dateEnd, $gte: dateStart}, societe: societe } } )
    
    pipeline.push({
        $lookup: {
          from: 'utilisateurs',
          let: { "utilisateur": "$utilisateur"},
          pipeline: [{$match: 
              {$expr: {
                  "$and": [
                    { "$eq": [ "$_id", "$$utilisateur" ] },
                  ]
                }
              }
            },
         ],
          as:"utilisateurs"
        }
    })

    pipeline.push({
      $set: {
        utilisateur: { $arrayElemAt: ["$utilisateurs.login", 0] } ,
        
        date:{ $dateToString: { 
            format: "%Y-%m-%d", date: "$date" 
        } },
        id:"$_id"
      }
    })

    pipeline.push({
       $project: { 
           id:1, 
           date:1,
           numero:1,
           utilisateur:1
        }
    })

    var search = req.body.search
    
    for(let key in search){
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

    const articles = await BonCasse.aggregate(pipeline)

    sommePipeline.push({
      $count: "total"
    })

    var nbrTotal = await BonCasse.aggregate(sommePipeline)

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
 * /bonCasses/getById/{id}:
 *   get:
 *     summary: Remove the BonCasse by id
 *     tags: [BonCasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The BonCasse id
 *
 *     responses:
 *       200:
 *         description: The BonCasse was deleted
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
 *                     totalRemise:
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
 *                     montantPaye:
 *                       type: number
 *                     credit:
 *                       type: number
 *                     magasinDepart:
 *                       type: string
 *                     magasinArrive:
 *                       type: string
 *                     expeditions:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          transporteur:
 *                            type: string
 *                          date:
 *                            type: string
 *                          articles:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                numero:
 *                                  type: number
 *                                article:
 *                                  type: string
 *                                reference:
 *                                  type: string
 *                                designation:
 *                                  type: string
 *                                quantiteVente:
 *                                  type: number
 *                                quantiteLivree:
 *                                  type: number
 *                                quantiteALivree:
 *                                  type: number
 *                                quantiteRestant:
 *                                  type: number
 *                                unite:
 *                                  type: number
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The BonCasse was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

    if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

    var bonCasse = await BonCasse.findOne({_id:req.params.id})

    const bonCasseArticles =  await BonCasseArticle.find({bonCasse:req.params.id})

    return res.send({status:true,resultat:bonCasse, bonCasseArticles:bonCasseArticles})

})


/**
 * @swagger
 * /bonCasses/getAllParametres:
 *   get:
 *     summary: Remove the article by id
 *     tags: [BonCasses]
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
 *                  articles:
 *                    type: array   
 *                  societes:
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
    
    const articles = await getArticlesWithQuantites(societe, societeRacine)
    const uniteMesures = await UniteMesure.find({societeRacine:societeRacine})
    const societes =  await getSocietesBySocieteParent(societeRacine)
    const utilisateurs =  await Utilisateur.find({societeRacine:societeRacine}).select({id:1, nom:1, prenom:1, email:1})
    /*var societesFiltree = []
    for(let item of societes){
        if(item.id != societe){
            societesFiltree.push(item)
        }
    }*/
    return res.send({status:true, uniteMesures:uniteMesures, articles:articles, numeroAutomatique:numeroAutomatique.numero, societes:societes, utilisateurs:utilisateurs}) 
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
module.exports.routerBonCasse=router
