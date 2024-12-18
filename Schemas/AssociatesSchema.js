const mongoose = require('mongoose');

const AssociatesSchema = new mongoose.Schema({

    organization_id :{
        type : String,
       // required : true
    },

    kitchen_id :{
        type : [mongoose.Schema.Types.ObjectId],

        //required : true
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
}
);

module.exports = AssociatesSchema;










