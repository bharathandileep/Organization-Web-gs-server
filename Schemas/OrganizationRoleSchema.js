const mongoose = require('mongoose');

const OrganizationRoleSchema = new mongoose.Schema({

    role_id :{
        type :String ,
       // required : true
    },

    role_name :{
        type : String,

        //required : true
    },
    role_description :{
        type : String,

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
}
);

module.exports = OrganizationRoleSchema;










