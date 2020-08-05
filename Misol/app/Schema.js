const mongoose = require('./moongoDb');
const moongodb = require('./moongoDb');

const Schema = mongoose.Schema;

var UserSchema = new Schema({

    Fname: {
        type: String,
        required: true,
        max: 20
    },

    Lname: {
        type: String,
        required: true,
        max: 20
    },

    img: {
        data: Buffer,
        contentType: String
    },

    connect: {
        Email: {
            type: String,
            max: 20,
            required: true,
        },
        phone: {
            type: Number,
            max: 20,
            min: 5,
            required: true
        }

    },
    about: {
        type: String,
    },
    experienceData: {
        type: Number,
    }
});


module.exports = moongodb.model("User", UserSchema);