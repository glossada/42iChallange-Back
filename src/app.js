const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const routes = require('./Routes/index');
const cors = require("cors");
const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(cors());
server.use(cors());
server.use((req, res, next) => {
  res.setHeader(
    "Set-Cookie",
    "cross-site-cookie=whatever; SameSite=None; Secure"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use('/',routes)
server.use(morgan('dev'));


module.exports = server;