const {FraisMission} =require('../../Models/GMAOModels/fraisMissionModel')
const {Mission} =require('../../Models/GMAOModels/missionModel')
const {TypeFrais} =require('../../Models/GMAOModels/typeFraisModel')

const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const {Societe, getSocieteRacine, getSocietesBySocieteGParent } =require('../../Models/societeModel')
var ObjectId = require('mongodb').ObjectID;

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
 *     FraisMission:
 *       type: object
 *       required:
 *         - montant
 *         - typeFrais
 *         - mission
 *         - societeRacine
 *       properties:
 *         montant:
 *           type: number
 *         typeFrais:
 *           type: string
 *         mission:
 *           type: string
 *         societeRacine:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: FraisMissions
 *   description: The FraisMissions managing API
 */


/**
 * @swagger
 * paths:
 *   /fraisMissions/upload:
 *     post:
 *       summary: upload image
 *       tags: [FraisMissions]
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
 * /fraisMissions/newFraisMission:
 *   post:
 *     summary: Returns the list of all the FraisMissions
 *     tags: [FraisMissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                montant:
 *                  type: number
 *                typeFrais:
 *                  type: string
 *                mission:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the FraisMissions
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
 *                    montant:
 *                      type: number
 *                    typeFrais:
 *                      type: string
 *                    mission:
 *                      type: string
 *                    societeRacine:
 *                      type: string
 *
 */

router.post('/newFraisMission', async(req,res)=>{

    //const {error}=validateFraisMission(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    var body = req.body 

    body.societeRacine = await getSocieteRacine(ObjectId(body.societeRacine))

    const fraisMission=new FraisMission(body);

    const result=await fraisMission.save()

    return res.send({status:true,resultat:result})
})


/**
 * @swagger
 * /fraisMissions/modifierFraisMission/{id}:
 *   post:
 *     summary: Update the FraisMission by id
 *     tags: [FraisMissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The FraisMission id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                montant:
 *                  type: number
 *                typeFrais:
 *                  type: string
 *                mission:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the FraisMissions
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
 *                     montant:
 *                       type: number
 *                     typeFrais:
 *                       type: string
 *                     mission:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *
 *
 */

router.post('/modifierFraisMission/:id', async(req,res)=>{

   // const {error}=validateFraisMission(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    const fraisMission = await FraisMission.findById(req.params.id)
    
    if(!fraisMission) return res.status(401).send({status:false})
    const result = await FraisMission.findOneAndUpdate({_id:req.params.id}, req.body)

    const fraisMission2 = await FraisMission.findById(req.params.id)

    return res.send({status:true,resultat:fraisMission2})
})

/**
 * @swagger
 * /fraisMissions/deleteFraisMission/{id}:
 *   post:
 *     summary: Remove the FraisMission by id
 *     tags: [FraisMissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The FraisMission id
 *
 *     responses:
 *       200:
 *         description: The FraisMission was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The FraisMission was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteFraisMission/:id', async(req,res)=>{

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    
    const fraisMission = await FraisMission.findById(req.params.id)
    
    if(!fraisMission) return res.status(401).send({status:false})


    if(await FraisMission.findOneAndDelete({_id:req.params.id})){
        return res.send({status:true})
    }else{
        return res.send({status:false})
    }

})

/**
 * @swagger
 * /fraisMissions/getAllParametres:
 *   get:
 *     summary:
 *     tags: [FraisMissions]
 * 
 *     responses:
 *       200:
 *         description: The FraisMissions was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  fraisMissions:
 *                    type: array          
 *       404:
 *         description: The FraisMissions was not found
 *       500:
 *         description: Some error happened
 */
 router.get('/getAllParametres/:id', async(req,res)=>{

    var societeRacine = await getSocieteRacine(ObjectId(req.params.id))
  
    const fraisMissions = await FraisMission.find({societeRacine:societeRacine})
    const typefraiss = await TypeFrais.find({societeRacine:societeRacine})
    const missions = await Mission.find({societeRacine:societeRacine})

    return res.send({status:true, fraisMissions:fraisMissions,typefraiss:typefraiss,
                      missions:missions})     
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
 * /fraisMissions/listFraisMissions:
 *   post:
 *     summary: Returns the list of all the FraisMissions
 *     tags: [FraisMissions]
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
 *         description: The list of the FraisMissions
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
 *                            montant:
 *                              type: number
 *                            typeFrais:
 *                              type: string
 *                            mission:
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

 router.post('/listFraisMissions', async(req,res)=>{
  
    //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})
    var societeRacine = await getSocieteRacine(ObjectId(req.body.societeRacine))
  
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

    pipeline.push({ $match : { societeRacine:societeRacine } } )
    
    
    pipeline.push({
        $lookup: {
          from: 'missions',
          let: { "mission": "$mission"},
          pipeline: [{$match: 
              {$expr: {
                  "$and": [
                    { "$eq": [ "$_id", "$$mission" ] },
                  ]
                }
              }
            },
         ],
          as:"missions"
        }
    })
    pipeline.push({
        $lookup: {
          from: 'typefrais',
          let: { "typeFrais": "$typeFrais"},
          pipeline: [{$match: 
              {$expr: {
                  "$and": [
                    { "$eq": [ "$_id", "$$typeFrais" ] },
                  ]
                }
              }
            },
         ],
          as:"typefrais"
        }
    })
    
    pipeline.push({
      $set: {
        mission: { $arrayElemAt: ["$missions.libelle", 0] },
        typeFrais:{ $arrayElemAt: ["$typefrais.libelle", 0] },
        montant:{ $toString: "$montant" },
        id:"$_id"
      }
    })

    pipeline.push({
       $project: { 
           id:1, 
           mission:1,
           typeFrais:1,
           montant:1,
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

    const articles = await FraisMission.aggregate(pipeline)

    sommePipeline.push({
      $count: "total"
    })

    var nbrTotal = await FraisMission.aggregate(sommePipeline)

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
 * /fraisMissions/getById/{id}:
 *   get:
 *     summary: Remove the FraisMission by id
 *     tags: [FraisMissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The FraisMission id
 *
 *     responses:
 *       200:
 *         description: The FraisMission was deleted
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
 *                     montant:
 *                       type: number
 *                     typeFrais:
 *                       type: string
 *                     mission:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The FraisMission was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

    if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

    const fraisMission = await FraisMission.findOne({_id:req.params.id})

    return res.send({status:true,resultat:fraisMission})

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

module.exports.routerFraisMission=router