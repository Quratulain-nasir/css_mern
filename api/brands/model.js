const { Schema, model } = require('mongoose');

const BrandSchema = new Schema({
        customId: { type: String, unique: true, required: true },
    BrandName :{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    BrandImage :{
        type: String ,
        required : true
    }
})


const Brand = model('brand' , BrandSchema)
module.exports = {Brand}
