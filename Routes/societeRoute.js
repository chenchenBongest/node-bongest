
const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

const {Exercice} =require('../Models/exerciceModel')
var dateFormat = require('dateformat');
const {User, validateDownloadData} =require('../Models/userModel')

const {ArticleSociete} =require('../Models/articleSocieteModel')
const {Societe, getSocieteRacine, getSocietesBySocieteParent } =require('../Models/societeModel')
var ObjectId = require('mongodb').ObjectID;
const {Article} =require('../Models/articleModel');
const { Utilisateur } = require('../Models/utilisateurModel');

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
 *     Societe:
 *       type: object
 *       required:
 *         - libelle
 *       properties:
 *         raisonSociale:
 *           type: string
 *         matriculeFiscale:
 *           type: string
 *         responsable:
 *           type: string
 *         cinResponable:
 *           type: string
 *         telephones:
 *           type: string
 *         mobiles:
 *           type: string
 *         fax:
 *           type: string
 *         localite:
 *           type: string
 *         email:
 *           type: string
 *         pays:
 *           type: string
 *         delegation:
 *           type: string
 *         codePostale:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Societes
 *   description: The Societes managing API
 */


/**
 * @swagger
 * paths:
 *   /societes/upload:
 *     post:
 *       summary: upload image
 *       tags: [Societes]
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
 * /societes/newSociete:
 *   post:
 *     summary: Returns the list of all the Societes
 *     tags: [Societes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 raisonSociale:
 *                   type: string
 *                 matriculeFiscale:
 *                   type: string
 *                 responsable:
 *                   type: string
 *                 cinResponable:
 *                   type: string
 *                 telephones:
 *                   type: string
 *                 mobiles:
 *                   type: string
 *                 fax:
 *                   type: string
 *                 localite:
 *                   type: string
 *                 email:
 *                   type: string
 *                 pays:
 *                   type: string
 *                 delegation:
 *                   type: string
 *                 codePostale:
 *                   type: string
 *     responses:
 *       200:
 *         description: The list of the societes
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
 *                    raisonSociale:
 *                      type: string
 *                    matriculeFiscale:
 *                      type: string
 *                    responsable:
 *                      type: string
 *                    cinResponable:
 *                      type: string
 *                    telephones:
 *                      type: string
 *                    mobiles:
 *                      type: string
 *                    fax:
 *                      type: string
 *                    localite:
 *                      type: string
 *                    email:
 *                      type: string
 *                    pays:
 *                      type: string
 *                    delegation:
 *                      type: string
 *                    codePostale:
 *                      type: string
 *
 */
router.post('/newSociete', async(req,res)=>{

    //const {error}=validateSociete(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    var body = req.body
    
    if(body.societeParent == ""){
      body.societeParent = null
    }

    var societeRacine = await getSocieteRacine(ObjectId(body.societeParent))
    body.societeRacine = societeRacine

    const societe = new Societe(req.body);

    var result = await societe.save()

    if(body.societeRacine == null){
      const resultM = await Societe.findOneAndUpdate({_id:result.id}, {societeRacine:result.id})
    }

    if(societeRacine != null){
      const articles = await Article.find({societeRacine:societeRacine})
      for(let i = 0; i < articles.length; i++){ 
          const articleSociete=new ArticleSociete({
            article:articles[i].id,
            societe:result.id,
      
            enVente:articles[i].enVente,
            enAchat:articles[i].enAchat,
      
            enBalance:articles[i].enBalance,
            enPromotion:articles[i].enPromotion,
            enNouveau:articles[i].enNouveau,
            enDisponible:articles[i].enDisponible,
            enArchive:articles[i].enArchive,
            enVedette:articles[i].enVedette,
            enLiquidation:articles[i].enLiquidation,
      
            qteTheorique:0,
            qteEnStock:0,
      
            seuilAlerteQTS:0,
            seuilRearpQTS:0,
    
          });
          const result2=await articleSociete.save()
      }
    }

    return res.send({status:true,resultat:result})

})


/**
 * @swagger
 * /societes/modifierSociete/{id}:
 *   post:
 *     summary: Update the societe by id
 *     tags: [Societes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The societe id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                raisonSociale:
 *                  type: string
 *                matriculeFiscale:
 *                  type: string
 *                responsable:
 *                  type: string
 *                cinResponable:
 *                  type: string
 *                telephones:
 *                  type: string
 *                mobiles:
 *                  type: string
 *                fax:
 *                  type: string
 *                localite:
 *                  type: string
 *                email:
 *                  type: string
 *                pays:
 *                  type: string
 *                delegation:
 *                  type: string
 *                codePostale:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the societes
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
 *                     raisonSociale:
 *                       type: string
 *                     matriculeFiscale:
 *                       type: string
 *                     responsable:
 *                       type: string
 *                     cinResponable:
 *                       type: string
 *                     telephones:
 *                       type: string
 *                     mobiles:
 *                       type: string
 *                     fax:
 *                       type: string
 *                     localite:
 *                       type: string
 *                     email:
 *                       type: string
 *                     pays:
 *                       type: string
 *                     delegation:
 *                       type: string
 *                     codePostale:
 *                       type: string
 *
 *
 */

router.post('/modifierSociete/:id', async(req,res)=>{

    //const {error}=validateSociete(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const societe = await Societe.findById(req.params.id)


    if(!societe) return res.status(401).send({status:false})

    const result = await Societe.findOneAndUpdate({_id:req.params.id}, req.body)

    const societe2 = await Societe.findById(req.params.id)

    return res.send({status:true,resultat:societe2})
})

/**
 * @swagger
 * /societes/deleteSociete/{id}:
 *   post:
 *     summary: Remove the Societe by id
 *     tags: [Societes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Societe id
 *
 *     responses:
 *       200:
 *         description: The Societe was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The Societe was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteSociete/:id', async(req,res)=>{

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const societe = await Societe.findById(req.params.id)

    if(!societe) return res.status(401).send({status:false})


    if(await Societe.findOneAndDelete({_id:req.params.id})){
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
 * /societes/listSocietes:
 *   post:
 *     summary: Returns the list of all the Societes
 *     tags: [Societes]
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
 *         description: The list of the Societes
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
 *                            raisonSociale:
 *                              type: string
 *                            matriculeFiscale:
 *                              type: string
 *                            responsable:
 *                              type: string
 *                            cinResponable:
 *                              type: string
 *                            telephones:
 *                              type: string
 *                            mobiles:
 *                              type: string
 *                            fax:
 *                              type: string
 *                            localite:
 *                              type: string
 *                            email:
 *                              type: string
 *                            pays:
 *                              type: string
 *                            delegation:
 *                              type: string
 *                            codePostale:
 *                              type: string
 *
 *
 *
 */

 router.post('/listSocietes', async(req,res)=>{
  
    //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

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
    
    pipeline.push({
      $lookup: {
        from: 'societes',
        let: { "societeParent": "$societeParent"},
        pipeline: [{$match: 
          {$expr: {
              "$and": [
                { "$eq": [ "$_id", "$$societeParent" ] },
              ]
            }
          }
        }],
        as:"societes"
      }
    })

    
    pipeline.push({
      $set: {
        societeParent: { $arrayElemAt: ["$societes.raisonSociale", 0] },
        id:"$_id",
      }
    })

    pipeline.push({
        $project: { 
            id:1,
            raisonSociale:1,
            societeParent:1,
            matriculeFiscale:1,
            responsable:1,
            cinResponable:1,
            telephones:1,
            mobiles:1,
            fax:1,
            localite:1,
            email:1,
            pays:1,
            gouvernorat:1,
            pays:1,
            delegation:1,
            codePostale:1,
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

    const articles = await Societe.aggregate(pipeline)

    sommePipeline.push({
      $count: "total"
    })

   
    var nbrTotal = await Societe.aggregate(sommePipeline)

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


router.post('/listSocietesWithSocieteRacine', async(req,res)=>{
  
  //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

  var societeRacine = await getSocieteRacine(ObjectId(req.body.societe))
  
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
  pipeline.push({ $match : {societeRacine:societeRacine} } )
   
  pipeline.push({
    $lookup: {
      from: 'societes',
      let: { "societeParent": "$societeParent"},
      pipeline: [{$match: 
        {$expr: {
            "$and": [
              { "$eq": [ "$_id", "$$societeParent" ] },
            ]
          }
        }
      }],
      as:"societes"
    }
  })

  
  pipeline.push({
    $set: {
      societeParent: { $arrayElemAt: ["$societes.raisonSociale", 0] },
      id:"$_id",
    }
  })

  pipeline.push({
     $project: { 
          id:1,
          raisonSociale:1,
          societeParent:1,
          matriculeFiscale:1,
          responsable:1,
          cinResponable:1,
          telephones:1,
          mobiles:1,
          fax:1,
          localite:1,
          email:1,
          pays:1,
          gouvernorat:1,
          pays:1,
          delegation:1,
          codePostale:1,



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

  const articles = await Societe.aggregate(pipeline)

  sommePipeline.push({
    $count: "total"
  })

 
  var nbrTotal = await Societe.aggregate(sommePipeline)

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
 * /societes/listSocietes:
 *   post:
 *     summary: Returns the list of all the Societes
 *     tags: [Societes]
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
 *         description: The list of the Societes
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
 *                            raisonSociale:
 *                              type: string
 *                            matriculeFiscale:
 *                              type: string
 *                            responsable:
 *                              type: string
 *                            cinResponable:
 *                              type: string
 *                            telephones:
 *                              type: string
 *                            mobiles:
 *                              type: string
 *                            fax:
 *                              type: string
 *                            localite:
 *                              type: string
 *                            email:
 *                              type: string
 *                            pays:
 *                              type: string
 *                            delegation:
 *                              type: string
 *                            codePostale:
 *                              type: string
 *
 *
 *
 */

 router.get('/allSocietesUtilisateur', verifytoken, async(req,res)=>{
 
  var societes = await getSocietesBySocieteParent(req.user.user.societeRacine)
 
  return res.send({status:true, societes:societes})
  
})

router.get('/allExercicesUtilisateur', verifytoken, async(req,res)=>{
  
  //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

  var exercices = await Exercice.find({societeRacine:req.user.user.societeRacine, isEnCours:"oui"})
  
  if(exercices.length == 0){
    var annee = (new Date()).getFullYear().toString()
    var exercicesCurrent = await Exercice.find({societeRacine:req.user.user.societeRacine, exercice:annee})
    if(exercicesCurrent.length == 1){
      await Societe.findOneAndUpdate({$or:[{_id:exercicesCurrent[0].id}, {_id:exercicesCurrent[0]._id}] }, {isEnCours:"oui"})
    }else{
      const exercicre =new Exercice({
        exercice:annee,
        isEnCours: "oui",
        societeRacine:req.user.user.societeRacine,
      });
      await exercicre.save()
    }
  }

  var exercices = await Exercice.find({societeRacine:req.user.user.societeRacine, isEnCours:"oui"})
  
  return res.send({status:true, exercices:exercices})
  
})


/**
 * @swagger
 * /Societes/getById/{id}:
 *   get:
 *     summary: Remove the Societe by id
 *     tags: [Societes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Societe id
 *
 *     responses:
 *       200:
 *         description: The Societe was deleted
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
 *                     raisonSociale:
 *                       type: string
 *                     matriculeFiscale:
 *                       type: string
 *                     responsable:
 *                       type: string
 *                     cinResponable:
 *                       type: string
 *                     telephones:
 *                       type: string
 *                     mobiles:
 *                       type: string
 *                     fax:
 *                       type: string
 *                     localite:
 *                       type: string
 *                     email:
 *                       type: string
 *                     pays:
 *                       type: string
 *                     delegation:
 *                       type: string
 *                     codePostale:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The Societe was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

    if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

    const societe = await Societe.findOne({_id:req.params.id})

    return res.send({status:true,resultat:societe})

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

module.exports.routerSociete=router
