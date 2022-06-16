const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema
const Schema1 = mongoose.Schema

const schemaUtilisateur=mongoose.Schema({
        nom:{type:String,default: 0},
        prenom:{type:String,default: 0},
        role:{type:Schema.Types.ObjectId, ref: 'Role',default: 'null'},
        login: {type: String, default: "", unique: true},
        email: {type: String, default: "", unique: true},
        password: {type: String, default: ""},
        telephone:{type:String,default: 0},
        adresse:{type:String,default: 0},
        codeForgotPassword: {type: String, default: ""},
        societeRacine:{type:Schema.Types.ObjectId, ref: 'Societe',default: 'null'},
    },
    { timestamps: true }
)

schemaUtilisateur.plugin(mongoosePaginate);

schemaUtilisateur.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Utilisateur = mongoose.model('Utilisateur',schemaUtilisateur)

function validateUtilisateur(Utilisateur){

    let schema = Joi.object({
        nom:Joi.string().allow('', null),
        prenom:Joi.string().allow('', null),
        role:Joi.string().allow('', null),
        email:Joi.string().allow('', null),
        password:Joi.string().allow('', null),
        telephone:Joi.string().allow('', null),
        adresse:Joi.string().allow('', null),
        codeForgotPassword:Joi.string().allow('', null),
        societeRacine:Joi.string().allow('', null),

    })

    return schema.validate(Utilisateur)
}

function validateLogin(login){

    const schema2 = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().min(6).required()
    })

    return schema2.validate(login)
}

function validateModifierMotPasse(request){

    const schema2 = Joi.object({
        email:Joi.string().required().email(),
        baseUrl:Joi.string().min(6).required()
    })

    return schema2.validate(request)
}

function validateNewPassowrd(request){

    const schema2 = Joi.object({
        code:Joi.string().min(6).required(),
        newPassword:Joi.string().min(6).required()
    })

    return schema2.validate(request)
}


module.exports.Utilisateur=Utilisateur
module.exports.validateUtilisateur=validateUtilisateur
module.exports.validateNewPassowrd=validateNewPassowrd
module.exports.validateLogin=validateLogin
module.exports.validateModifierMotPasse=validateModifierMotPasse
