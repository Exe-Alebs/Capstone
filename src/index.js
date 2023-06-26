"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var db_1 = require("./database/db");
var dotenv_1 = require("dotenv");
var routes_1 = require("./Routes/routes");
var cors = require('cors');
(0, dotenv_1.config)();
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes_1.default);
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    (0, db_1.default)();
    console.log("Server running on port ".concat(PORT, " \u26A1"));
});
