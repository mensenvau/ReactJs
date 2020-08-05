const express = require("express");
const router = express.Router();


const nodemailer = require("nodemailer");

const dotenv = require('dotenv');
const result = dotenv.config();
const { parsed: envs } = result;
const random = require('random');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envs.email,
        pass: envs.password
    }
});



router.post("/", (req, res, err) => {

    // console.log(req.body);

    let rand = random.int(min = 1000, max = 9999) // uniform integer in [ min, max ]
    mailOptions = {
        from: "Parolni ko'rib saytga qayting !. ",
        to: req.body.mail,
        subject: 'Tastiqlash kodi !.',
        html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
         * {
          background-color: #0F0FA0;
          text-align: center;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }
        </style>
        </head>
        <body>
        
        <h1>Assalom alekum Mehnatkash inson!:.</h1>
        <p>Tastiqlash kodi : ${rand} </p>
        <p>Biz bilan bo'lin biz endi boshladig va siz bilan ulkan imperyaga aylanamiz </p
        
        </body>
        </html>
        
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(JSON.stringify({ error: "Parol yuborib bo'lmadi .", status: 101, mail: req.body.mail }));
        } else {
            res.send(JSON.stringify({ message: 'Parol yuborildi!.', status: 101, mail: req.body.mail }));
        }
    });


})

module.exports = router