const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({

    employee_id :{
        type : String,
       // required : true 
    },

    f_name :{
        type : String,

        //required : true
    },
    l_name :{
        type : String,

       // required : true
    },
    email :{
        type : String,

       // required : true
    },
    phone :{
        type : Number,

       // required : true
    },
    parent_org :{
        type:mongoose.Schema.Types.ObjectId,
    },
    
    hire_date :{
        type : Date,

       // required : true
    },
    job_title :{
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

module.exports = EmployeesSchema;










