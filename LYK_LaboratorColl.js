const {Date}= require("mongoose");
const mongoose =require("mongoose");
const {objectId}=require("mongodb");
const LaboratorCollDetailSchema=mongoose.Schema(
     {
      Lbid:{
           type:String,
       },
     AssetName:{
            type:String,
       },
      ServiceLife:{
            type:Number,
      },
      price:{
            type:Number,
      },
      AssetDetail:{
             type:Array,
      },
      Agent:{
             type:Object,
      },
      manufacturer:{
             CompanyName:String,
             CompanyPhone:String,
             CompanyAddress:String,
             inPrice:Number,
      },
      AssetClass:{
             type:String,
      },
      AssetManager:{
             type:String,
      },
      Affiliatedunit:{
             type:String,
      },
    });


    module.exports = mongoose.model("LaboratorColl",LaboratorCollDetailSchema,"LaboratorColl");