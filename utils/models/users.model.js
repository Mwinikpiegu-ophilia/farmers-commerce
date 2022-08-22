const mongoose = require("mongoose");

const {schema,model } = mongoose;
const usersSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: string,
        required: true,
        unique: true,
    },

    phone:{
        type: string,
        require: true,
        unique: true,
    },

    location:{
        type: string,
        require: true,
        unique: true,
    },

    password:{
        type: string,
        require: true,
        unique: true, 
    },

});

const user = model("user",usersSchema);

module.export= User;



