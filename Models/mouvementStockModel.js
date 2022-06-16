const mongoose = require('mongoose')
const Joi = require('joi')
const mongoosePaginate = require('mongoose-paginate');
const { Article } = require('../Models/articleModel');
const { ArticleSociete } = require('../Models/articleSocieteModel');
const { Categorie } = require('../Models/categorieModel');
const { Famille } = require('../Models/familleModel');
const { SousFamille } = require('../Models/sousFamilleModel');
const { BonAchatArticle } = require('../Models/bonAchatArticleModel');

const Schema = mongoose.Schema
var ObjectId = require('mongodb').ObjectID;

const schemaMouvementStock = mongoose.Schema({
    libelle: { type: String, default: "" },
    ordre: { type: Number, default: 0 },
    valeurRetiree: { type: Number, default: 0 },
    tierNecessaire: { type: String, default: false },
    enCours: { type: String, default: false },
    image: { type: String, default: "" },
    societeRacine: { type: Schema.Types.ObjectId, ref: 'Societe', default: 'null' },
},
    { timestamps: true }
)

schemaMouvementStock.plugin(mongoosePaginate);

schemaMouvementStock.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const MouvementStock = mongoose.model('MouvementStock', schemaMouvementStock)

function validateMouvementStock(MouvementStock) {
    let schema = Joi.object({
        libelle: Joi.string().allow('', null),
        ordre: Joi.number().allow('', null),
        valeurRetiree: Joi.number().allow('', null),
        tierNecessaire: Joi.string().allow('', null),
        image: Joi.string().allow('', null),
    })

    return schema.validate(MouvementStock)
}

async function findByArticle(allArticles, article) {

    let listGlobal = [], listFin = []

    for (let item of allArticles) {
        if (article.sousArticle != undefined && item.article == article.sousArticle) {
            listGlobal.push(item)
        }
    }

    for (let item of 0) {
        let articleRe
        if (article.categorie.length > 0) {
            articleRe = await Article.find({ _id: item.article, categorie: article.categorie }).select({ reference: 1, designation: 1, id: 1, categorie: 1, famille: 1, sousFamille: 1 })

        } else {
            articleRe = await Article.findById({ _id: article.sousArticle }).select({ reference: 1, designation: 1, id: 1, categorie: 1, famille: 1, sousFamille: 1 })
        }

        if (articleRe.reference.length > 0) {
            listFin.push(item)
        }
    }

    return listFin
}


function rechercheIndice(x, tab) {
    for (let item in tab) {
        if (tab[item].id.toString() == x.toString()) {
            return item
        }
    }
    return -1
}

async function regrouperArticles(articles) {
    let i = 0
    let listFinal = []
    for (let item of articles) {
        let indice = rechercheIndice(item.id, listFinal)
        if (indice >= 0) {
            listFinal[indice].qteEntree += item.qteEntree
            listFinal[indice].qteSortie += item.qteSortie
        } else {
            listFinal[i] = item
            i++
        }
    }

    for (let item of listFinal) {
        const article = await Article.findById({ _id: item.id }).populate('categorie').populate('famille').populate('sousFamille')

        if (article != null && article != undefined) {
            item.categorie = article.categorie.libelle
            if (article.famille != null) {
                item.famille = article.famille.libelle
                item.sousFamille = article.sousFamille.libelle
            }

        }

        item.qteStock = item.qteEntree - item.qteSortie
    }

    return listFinal
}

async function filter(listGlobal, article) {

    if (article.categorie.length > 0) {
        listGlobal = await filterByCateg(listGlobal, article)
    }

    if (article.sousArticle.length > 0) {
        listGlobal = await filterByArticle(listGlobal, article)
    }

    if (article.famille.length > 0) {
        listGlobal = await filterByFamille(listGlobal, article)
    }
    if (article.sousFamille.length > 0) {
        listGlobal = await filterBySousFamille(listGlobal, article)
    }

    return listGlobal
}

async function filterByCateg(listGlobal, article) {
    let listFil = []
    for (let item of listGlobal) {
        if (item.categorie != null) {
            let categorie = await Categorie.find({ libelle: item.categorie })

            if (categorie[0]._id.toString() == article.categorie.toString()) {
                listFil.push({ id: item.id, reference: item.reference, designation: item.designation, categorie: item.categorie, famille: item.famille, sousFamille: item.sousFamille, qteEntree: item.qteEntree, qteSortie: item.qteSortie, qteStock: item.qteStock })
            }
        }
    }
    return listFil
}

async function filterByArticle(listGlobal, article) {
    let listFil = []
    for (let item of listGlobal) {
        if (item.id != null) {
            let articleO = await Article.findById({ _id: item.id })

            if (articleO._id.toString() == article.sousArticle.toString()) {
                listFil.push({ id: item.id, reference: item.reference, designation: item.designation, categorie: item.categorie, famille: item.famille, sousFamille: item.sousFamille, qteEntree: item.qteEntree, qteSortie: item.qteSortie, qteStock: item.qteStock })
            }
        }
    }
    return listFil
}

async function filterByFamille(listGlobal, article) {
    let listFil = []
    for (let item of listGlobal) {
        if (item.famille != null) {
            let famille = await Famille.find({ libelle: item.famille })

            if (famille[0]._id.toString() == article.famille.toString()) {
                listFil.push({ id: item.id, reference: item.reference, designation: item.designation, categorie: item.categorie, famille: item.famille, sousFamille: item.sousFamille, qteEntree: item.qteEntree, qteSortie: item.qteSortie, qteStock: item.qteStock })
            }
        }
    }
    return listFil
}

async function filterBySousFamille(listGlobal, article) {
    let listFil = []
    for (let item of listGlobal) {
        if (item.sousFamille != null) {
            let sousFamille = await SousFamille.find({ libelle: item.sousFamille })

            if (sousFamille[0]._id.toString() == article.sousFamille.toString()) {
                listFil.push({ id: item.id, reference: item.reference, designation: item.designation, categorie: item.categorie, famille: item.famille, sousFamille: item.sousFamille, qteEntree: item.qteEntree, qteSortie: item.qteSortie, qteStock: item.qteStock })
            }
        }
    }
    return listFil
}
module.exports.MouvementStock = MouvementStock
module.exports.validateMouvementStock = validateMouvementStock
module.exports.findByArticle = findByArticle
module.exports.regrouperArticles = regrouperArticles
module.exports.filter = filter 
module.exports.rechercheIndice = rechercheIndice 