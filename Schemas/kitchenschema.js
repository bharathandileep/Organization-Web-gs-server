const mongoose = require('mongoose');

const kitchenschema = new mongoose.Schema({
    kitchen_id : {
        type : String,
       // required : true
    },
    f_name : {
        type : String,
       // required : true
    },
    l_name : {
        type : String,
       // required : true
    },
    username : {
        type : String,
       // required : true
    },
    password : {
        type : String,
       // required : true
    },
    phone_no : {
        type : Number,
       //c required : true
    },
    description :{
        type:String
    },
    // company_id :{
    //     type:mongoose.Schema.Types.ObjectId,
    // },

    // order_id : {
    //     type : mongoose.Schema.Types.ObjectId,
    //    required : false
    // },
    image_url: {
        type : String,
       // required : true
    },
    location_id : {
        type : Number,
       // required : true
    },
    created_by : {
        type : mongoose.Schema.Types.ObjectId,
       // required : true
    },
    created_at : {
        type : Date,
      //  required : true
    },
    updated_by : {
        type : mongoose.Schema.Types.ObjectId,
      //  required : true
    },
    updated_at : {
        type : Date,
       // required : true
    }
});

module.exports = kitchenschema;

