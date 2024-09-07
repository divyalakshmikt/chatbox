const mysql = require("mysql");
const QueryBuilder = require('node-querybuilder');
const dbConfig = require("../config/db.config.js");

// console.log("--------dbConfig---------- :", dbConfig)

var connection = new QueryBuilder(dbConfig, 'mysql', 'pool');

module.exports = connection;