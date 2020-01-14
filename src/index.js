const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const  routes = require("./routes");
require('dotenv').config();
const bodyPaser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('common'));// dev for development evironment. common for writing codes
app.use(bodyPaser.json());
app.use('/v1',routes);

app.listen(PORT,() => {
    console.log("listening on 3000");
});