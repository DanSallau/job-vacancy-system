"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "developement";
var config = require('../config/config.js')[env];
//var sequelize = new Sequelize('postgres://nuru:XY3f8FlsD4oL@localhost:5432/hantsitvforum_db', { dialect: 'postgres', protocol: 'postgres' })

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.dbPort,
  dialect: config.dialect,
  maxConcurrentQueries: 100,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

console.log('The config is ', config);
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;