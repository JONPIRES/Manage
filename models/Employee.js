const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        img:{
            type:String,
            required: true
        },
        birthDate:{
            type:String,
            required: true
        },
        title:{
            type:String,
            required: true
        }

    }
)

const Employee  = mongoose.model('Manager', employeeSchema )

module.exports = Employee;