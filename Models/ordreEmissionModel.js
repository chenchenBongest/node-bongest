const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema
const Schema1 = mongoose.Schema

const schemaOrdreEmission=mongoose.Schema({
        numero:{type:String,default: ""},
        exercice:{type:String,default: ""},
        num:{type:Number,default: 1},

        budget:{type:Number,default: 0},    
        trajet:{type:Number,default: 0},        
        camion:{type:String,default: ""},          
        chauffeur:{type: Schema.Types.ObjectId, ref: 'Chauffeur'},
        bonLivraison:{type:String,default: ""},
        societe:{type:Schema.Types.ObjectId, ref: 'Societe',default: 'null'},
  
    },
    { timestamps: true }

)

schemaOrdreEmission.plugin(mongoosePaginate);

schemaOrdreEmission.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const OrdreEmission = mongoose.model('OrdreEmission',schemaOrdreEmission)

function validateOrdreEmission(OrdreEmission){

    let schema = Joi.object({
        budget:Joi.number().allow('', null),   
        trajet:Joi.number().allow('', null),        
        camion:Joi.string().allow('', null),      
        chauffeur:Joi.string().allow('', null),
        bonLivraison:Joi.string().allow('', null),
        societe:Joi.string().allow('', null),
    })

    return schema.validate(OrdreEmission)
}

async function getNumeroAutomatique(idSociete, exercice){
    var exerciceString = exercice+""
    let lastDoc = (await OrdreEmission.find({societe:idSociete, exercice:exerciceString}).sort({_id: -1}).limit(1))[0];
    var exerciceString = exerciceString.substring(2,4)
    if(lastDoc != undefined){
        var num = lastDoc.num + 1
        var numString = num + ""
        var somme = numString+""
        for(let i = 0 ; i < (8 - numString.length); i++){
            somme = "0" + somme
        }
        
        return {numero:"OrM"+exerciceString+"-"+somme, num:num}
    }else{
        return {numero:"OrM"+exerciceString+"-00000001", num:1}
    }
}

module.exports.getNumeroAutomatique=getNumeroAutomatique


module.exports.OrdreEmission=OrdreEmission
module.exports.validateOrdreEmission=validateOrdreEmission
