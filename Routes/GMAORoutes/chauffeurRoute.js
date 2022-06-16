const { Chauffeur, validateChauffeur } = require('../../Models/GMAOModels/chauffeurModel')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var multer = require('multer');
const fs = require('fs');

const { Societe, getSocieteRacine, getSocietesBySocieteParent } = require('../../Models/societeModel')
var ObjectId = require('mongodb').ObjectID;
const { TypeTier } = require('../../Models/typeTierModel')


var dateFormat = require('dateformat');
const { User, validateDownloadData } = require('../../Models/userModel');

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
 *     Chauffeur:
 *       type: object
 *       required:
 *         - nom
 *         - prenom
 *         - role
 *         - email
 *         - telephone
 *         - adresse
 *         - societeRacine
 *       properties:
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         role:
 *           type: string
 *         email:
 *           type: string
 *         telephone:
 *           type: string
 *         adresse:
 *           type: string
 *         societeRacine:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Chauffeurs
 *   description: The Chauffeurs managing API
 */


/**
 * @swagger
 * paths:
 *   /chauffeurs/upload:
 *     post:
 *       summary: upload image
 *       tags: [Chauffeurs]
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
 * /chauffeurs/newChauffeur:
 *   post:
 *     summary: Returns the list of all the Chauffeurs
 *     tags: [Chauffeurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                nom:
 *                  type: string
 *                prenom:
 *                  type: string
 *                role:
 *                  type: string
 *                email:
 *                  type: string
 *                telephone:
 *                  type: string
 *                adresse:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the Chauffeurs
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
 *                    nom:
 *                      type: string
 *                    prenom:
 *                      type: string
 *                    role:
 *                      type: string
 *                    email:
 *                      type: string
 *                    telephone:
 *                      type: string
 *                    adresse:
 *                      type: string
 *                    societeRacine:
 *                      type: string
 *
 */

router.post('/newChauffeur', async (req, res) => {

    //const {error}=validateChauffeur(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})
    var body = req.body 

    body.societeRacine = await getSocieteRacine(ObjectId(body.societeRacine))

    const chauffeur=new Chauffeur(body);

    const result=await chauffeur.save()

    return res.send({status:true,resultat:result})
})


/**
 * @swagger
 * /chauffeurs/modifierChauffeur/{id}:
 *   post:
 *     summary: Update the Chauffeur by id
 *     tags: [Chauffeurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Chauffeur id

 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                nom:
 *                  type: string
 *                prenom:
 *                  type: string
 *                role:
 *                  type: string
 *                email:
 *                  type: string
 *                telephone:
 *                  type: string
 *                adresse:
 *                  type: string
 *                societeRacine:
 *                  type: string
 *     responses:
 *       200:
 *         description: The list of the Chauffeurs
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
 *                     nom:
 *                       type: string
 *                     prenom:
 *                       type: string
 *                     role:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     adresse:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *
 *
 */

router.post('/modifierChauffeur/:id', async (req, res) => {

    // const {error}=validateChauffeur(req.body)
    //if(error) return res.status(400).send({status:false,message:error.details[0].message})

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const chauffeur = await Chauffeur.findById(req.params.id)

    if (!chauffeur) return res.status(401).send({ status: false })


    const result = await Chauffeur.findOneAndUpdate({ _id: req.params.id }, req.body)

    const chauffeur2 = await Chauffeur.findById(req.params.id)

    return res.send({ status: true, resultat: chauffeur2 })
})

/**
 * @swagger
 * /chauffeurs/deleteChauffeur/{id}:
 *   post:
 *     summary: Remove the Chauffeur by id
 *     tags: [Chauffeurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Chauffeur id
 *
 *     responses:
 *       200:
 *         description: The Chauffeur was deleted
 *         content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  status:
 *                    type: boolean
 *       404:
 *         description: The Chauffeur was not found
 *       500:
 *         description: Some error happened
 */

router.post('/deleteChauffeur/:id', async (req, res) => {

    //if(req.user.user.role != "admin") return res.status(401).send({status:false})

    const chauffeur = await Chauffeur.findById(req.params.id)

    if (!chauffeur) return res.status(401).send({ status: false })


    if (await Chauffeur.findOneAndDelete({ _id: req.params.id })) {
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
 * /chauffeurs/listChauffeurs:
 *   post:
 *     summary: Returns the list of all the Chauffeurs
 *     tags: [Chauffeurs]
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
 *         description: The list of the Chauffeurs
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
 *                            nom:
 *                              type: string
 *                            prenom:
 *                              type: string
 *                            role:
 *                              type: string
 *                            email:
 *                              type: string
 *                            telephone:
 *                              type: string
 *                            adresse:
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

router.post('/listChauffeurs', async (req, res) => {

    //if(req.user.user.role != "admin" ) return res.status(400).send({status:false})

    var societeRacine = await getSocieteRacine(ObjectId(req.body.societeRacine))
  
    var sort = {}
    
    for( let key in req.body.orderBy){
        if(Number(req.body.orderBy[key]) != 0){
             sort[key] = req.body.orderBy[key]
        }  

    }

    if (Object.keys(sort).length == 0) {
        sort = { createdAt: -1 }
    }

   
    var listFilter =[]
    listFilter.push({societeRacine:societeRacine})
    

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

            listFilter.push({ $or: [objet1, objet2, objet3] })
        }
    }

    const options = {
        page: Number(req.body.page),
        limit: Number(req.body.limit),
        customLabels: myCustomLabels,
        //populate: 'client'
        sort: sort
    };

    var result = []

    if (listFilter.length > 1) {
        result = await Chauffeur.paginate({ $and: listFilter }, options)
    } else if (listFilter.length == 1) {
        result = await Chauffeur.paginate(listFilter[0], options)
    } else {
        result = await Chauffeur.paginate({}, options)
    }
    return res.send({ status: true, resultat: result, request: req.body })

})


/**
 * @swagger
 * /chauffeurs/getAllParametres/{id}:
 *   get:
 *     summary: Remove the Chauffeur by id
 *     tags: [Chauffeurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Chauffeur id
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
 *                  roles:
 *                    type: array          
 *       404:
 *         description: The bl was not found
 *       500:
 *         description: Some error happened
 */
 router.get('/getAllParametres/:id', async(req,res)=>{
    var societeRacine = await getSocieteRacine(ObjectId(req.params.id))
    const roles = await TypeTier.find({societeRacine:societeRacine})
    const chauffeurs = await Chauffeur.find({societeRacine:societeRacine})
    return res.send({status:true,roles:roles,chauffeurs:chauffeurs}) 
    
})


/**
 * @swagger
 * /chauffeurs/getById/{id}:
 *   get:
 *     summary: Remove the Chauffeur by id
 *     tags: [Chauffeurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Chauffeur id
 *
 *     responses:
 *       200:
 *         description: The Chauffeur was deleted
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
 *                     nom:
 *                       type: string
 *                     prenom:
 *                       type: string
 *                     role:
 *                       type: string
 *                     email:
 *                       type: string
 *                     telephone:
 *                       type: string
 *                     adresse:
 *                       type: string
 *                     societeRacine:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *       404:
 *         description: The Chauffeur was not found
 *       500:
 *         description: Some error happened
 */
router.get('/getById/:id', async (req, res) => {

    if (req.params.id == undefined || req.params.id == null || req.params.id == "") return res.status(400).send({ status: false })

    const chauffeur = await Chauffeur.findOne({ _id: req.params.id })

    return res.send({ status: true, resultat: chauffeur })

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

module.exports.routerChauffeur = router
