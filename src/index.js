const express = require("express");
const cors = require('cors');
const app = express();
const  routes = require("./routes");
require('dotenv').config();
const bodyPaser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(morgan('common'));// dev for development evironment. common for writing codes
app.use(bodyPaser.json());
app.use('/v1',routes);

app.listen(process.env.port,() => {
    console.log("listening on 3000");
});