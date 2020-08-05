const moongodb = require('mongoose')

const dotenv = require('dotenv');
const result = dotenv.config();
const { parsed: envs } = result;

// Connect to the db
moongodb.connect(envs.url, { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, db) {
        if (err) throw err;
        //Write databse Insert/Update/Query code here..
        console.log("Connect Db !.");

    });












    
module.exports = moongodb