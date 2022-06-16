const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');
const {ArticleSociete} =require('./articleSocieteModel')
var ObjectId = require('mongodb').ObjectID;

const Schema = mongoose.Schema
const schemaPrixSpecifiqueLigne=mongoose.Schema({
    
  article:{type: Schema.Types.ObjectId, ref: 'Article'},
  sousProduit:{type: Schema.Types.ObjectId, ref: 'SousProduit'},
  marge:{type:Number, default: 0},
  margePourcentage:{type:Number, default: 0},
  quantiteMin:{type:Number, default: 0},
  quantiteMax:{type:Number, default: 0},
  typeTier:{type: Schema.Types.ObjectId, ref: 'TypeTier'},
  client:{type: Schema.Types.ObjectId, ref: 'Client'},
  societeRacine:{type:Schema.Types.ObjectId, ref: 'Societe',default: 'null'},
  note:{type:String, default: 0},
  
},
{ timestamps: true })

schemaPrixSpecifiqueLigne.plugin(mongoosePaginate);

schemaPrixSpecifiqueLigne.method("toJSON", function() {
const { __v, _id, ...object } = this.toObject();
object.id = _id;
return object;
});

const PrixSpecifiqueLigne=mongoose.model('PrixSpecifiqueLigne',schemaPrixSpecifiqueLigne)


async function verifierIntervalleEntreQuantite(prix){
  
  var listPrix = []
  if(ObjectId.isValid(prix.id)){
    listPrix = await PrixSpecifiqueLigne.find({$and:[{_id:{$ne:prix.id}},{article:prix.article}, {sousProduit:prix.sousProduit}, {typeTier:prix.typeTier}, {client:prix.client}, {societeRacine:prix.societeRacine}, {$or: [{$and:[{quantiteMin:{$gte: prix.quantiteMin}}, {quantiteMin:{$lte: prix.quantiteMax}}]}, {$and:[{quantiteMax:{$gte: prix.quantiteMin}}, {quantiteMax:{$lte: prix.quantiteMax}}]}]} ]}) 
  }else{
    listPrix = await PrixSpecifiqueLigne.find({$and:[{article:prix.article}, {sousProduit:prix.sousProduit}, {typeTier:prix.typeTier}, {client:prix.client}, {societeRacine:prix.societeRacine}, {$or: [{$and:[{quantiteMin:{$gte: prix.quantiteMin}}, {quantiteMin:{$lte: prix.quantiteMax}}]}, {$and:[{quantiteMax:{$gte: prix.quantiteMin}}, {quantiteMax:{$lte: prix.quantiteMax}}]} ]} ]}) 
  }
  
  if(listPrix.length > 0 || (prix.marge == 0 && prix.margePourcentage == 0)){
    return false
  }else{
    return true
  }
}


module.exports.PrixSpecifiqueLigne=PrixSpecifiqueLigne
module.exports.verifierIntervalleEntreQuantite=verifierIntervalleEntreQuantite