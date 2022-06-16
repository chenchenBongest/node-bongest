const mongoose=require('mongoose')
const Joi=require('joi')
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema

const schemaBonRetourFournisseurArticle=mongoose.Schema({ 
   
    numero:{type:Number,default: 0},
    reference:{type:String,default: ""},
    designation:{type:String,default: ""},
    prixAchat:{type:Number,default: 0},
    remiseF:{type:Number,default: 0},
    prixFourn:{type:Number,default: 0},
    isFodec:{type:String,default: ""},
    prixFodec:{type:Number,default: 0},
    tauxDC:{type:Number,default: 0},
    prixDC:{type:Number,default: 0},
    totalFrais:{type:Number,default: 0},
    tauxRemise:{type:Number,default: 0},
    montantRemise:{type:Number,default: 0},
    prixSpecifique:{type:Number,default: 0},
    totalRemise:{type:Number,default: 0},
    totalHT:{type:Number,default: 0},
    tauxTVA:{type:Number,default: 0},
    totalTVA:{type:Number,default: 0},
    redevance:{type:Number,default: 0},
    totalTTC:{type:Number,default: 0},
    pVenteConseille:{type:Number,default: 0},
    marge:{type:Number,default: 0},

    article:{type: Schema.Types.ObjectId, ref: 'Article'},
    bonRetourFournisseur:{type: Schema.Types.ObjectId, ref: 'BonRetourFournisseur'},
    quantiteLivree:{type:Number,default: 0},
    date:{type:Date,default: new Date()},
    societe:{type:Schema.Types.ObjectId, ref: 'Societe',default: 'null'},
    quantiteLivree:{type:Number,default: 0},
  
    totalRedevance:{type:Number,default: 0},
    prixTTC:{type:Number,default: 0},
    plafondRemise:{type:Number,default: 0},
    unite1: {type:String,default: ""},
    unite2: {type:String,default: ""},
    coefficient: {type:Number,default: 0},

    sansRemise:{type:String,default: ""},
  
    quantiteAchat:{type:Number,default: 0},
    prixAchatHTReel :{type:Number,default: 0},
    quantiteAchat2:{type:Number,default: 0},
    prixAchatHTReel2 :{type:Number,default: 0},
  
    
},
{ timestamps: true }
)

schemaBonRetourFournisseurArticle.plugin(mongoosePaginate);

schemaBonRetourFournisseurArticle.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const BonRetourFournisseurArticle = mongoose.model('BonRetourFournisseurArticle',schemaBonRetourFournisseurArticle)


module.exports.BonRetourFournisseurArticle=BonRetourFournisseurArticle
