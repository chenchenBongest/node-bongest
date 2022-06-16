const {SituationReglement, validateSituationReglement} =require('../Models/situationReglementModel')
const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

var dateFormat = require('dateformat');
const {User, validateDownloadData} =require('../Models/userModel')

const {Societe, getSocieteRacine, getSocietesBySocieteParent } =require('../Models/societeModel')
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
 *     SituationReglement:
 *       type: object
 *       required:
 *         - libelle
 *       properties:
 *         libelle:
 *           type: string
 *         code:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: SituationReglements
 *   description: The SituationReglements managing API
 */


/**
 * @swagger
 * paths:
 *   /situationReglements/upload:
 *     post:
 *       summary: upload image
 *       tags: [SituationReglements]
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
 * /situationReglements/newSituationReglement:
 *   post:
 *     summary: Returns the list of all the SituationReglements
 *     tags: [SituationReglements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                code:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the SituationReglements
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
 *                    code:
 *                      type: string
 *
 */

router.post('/newSituationReglement', async(req,res)=>{

    //const {error}=validateSituationReglement(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    var body = req.body 

    body.societeRacine = await getSocieteRacine(ObjectId(body.societe))
    
    const situationReglement=new SituationReglement(body);

    const result=await situationReglement.save()

    return res.send({status:true,resultat:result})
})


/**
 * @swagger
 * /situationReglements/modifierSituationReglement/{id}:
 *   post:
 *     summary: Update the SituationReglement by id
 *     tags: [SituationReglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SituationReglement id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                libelle:
 *                  type: string
 *                code:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the SituationReglements
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
 *                     code:
 *                       type: string
 *
 *
 */

router.post('/modifierSituationReglement/:id', async(req,res)=>{

   // const {error}=validateSituationReglement(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const situationReglement = await SituationReglement.findById(req.params.id)

    if(!situationReglement) return res.status(401).send({status:false})


    const result = await SituationReglement.findOneAndUpdate({_id:req.params.id}, req.body)

    const situationReglement2 = await SituationReglement.findById(req.params.id)

    return res.send({status:true,resultat:situationReglement2})
})

/**
 * @swagger
 * /situationReglements/deleteSituationReglement/{id}:
 *   post:
 *     summary: Remove the SituationReglement by id
 *     tags: [SituationReglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SituationReglement id
 *
 *     responses:
 *       200:
 *         description: The SituationReglement was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The SituationReglement was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteSituationReglement/:id', async(req,res)=>{

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const situationReglement = await SituationReglement.findById(req.params.id)

    if(!situationReglement) return res.status(401).send({status:false})


    if(await SituationReglement.findOneAndDelete({_id:req.params.id})){
        return res.send({status:true})
    }else{
        return res.send({status:false})
    }

})

/**
 * @swagger
 * /situationReglements/getAllParametres:
 *   get:
 *     summary: Remove the projet by id
 *     tags: [SituationReglement]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The projet id
 * 
 *     responses:
 *       200:
 *         description: The projet was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *                  situationReglements:
 *                    type: array         
 *       404:
 *         description: The projet was not found
 *       500:
 *         description: Some error happened
 */
 router.get('/getAllParametres/:id', async(req,res)=>{
    var societeRacine = await getSocieteRacine(ObjectId(req.params.id))
  
    const situationReglements = await SituationReglement.find({societeRacine:societeRacine})
    
    return res.send({status:true, situationReglements:situationReglements }) 
    
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
 * /situationReglements/listSituationReglements:
 *   post:
 *     summary: Returns the list of all the SituationReglements
 *     tags: [SituationReglements]
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
 *         description: The list of the SituationReglements
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
 *                            code:
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

 router.post('/listSituationReglement', async(req,res)=>{
  
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
   
    var listFilter =[]
    listFilter.push({societeRacine:societeRacine})
    
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

            listFilter.push({$or:[objet1, objet2, objet3]})
        }  
    }

    const options = {
        page: Number(req.body.page),
        limit: Number(req.body.limit),
        customLabels: myCustomLabels,
        //populate: 'client'
        sort:sort
    };

    var result = []
    
    if(listFilter.length > 1){
      result = await  SituationReglement.paginate({$and:listFilter}, options) 
    }else if(listFilter.length == 1){
      result = await  SituationReglement.paginate(listFilter[0], options)
    }else{
      result = await  SituationReglement.paginate({}, options)
    }

    return res.send({status:true, resultat:result, request:req.body})
    
})


/**
 * @swagger
 * /situationReglements/getById/{id}:
 *   get:
 *     summary: Remove the SituationReglement by id
 *     tags: [SituationReglements]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SituationReglement id
 *
 *     responses:
 *       200:
 *         description: The SituationReglement was deleted
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
 *                     code:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The SituationReglement was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async(req,res)=>{

    if(req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({status:false})

    const situationReglement = await SituationReglement.findOne({_id:req.params.id})

    return res.send({status:true,resultat:situationReglement})

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

module.exports.routerSituationReglement=router
