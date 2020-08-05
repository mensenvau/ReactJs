const express = require("express");
const app = express();
const port = process.env.port || 5050;
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
const result = dotenv.config();
const { parsed: envs } = result;
const appRouter = require("./app/index")
    // console.log(envs);

app.use(bodyParser.json());
app.use("/", appRouter);

app.listen(port, () => {
    console.log("Connect server !. PORT : " + port)
});