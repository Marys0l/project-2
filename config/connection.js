const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize('mysql://b99b66a567cdaa:67906a71@us-cdbr-east-04.cleardb.com/heroku_053dc4caf001f3d?reconnect=true');
} else {
  sequelize = new Sequelize('mysql://b99b66a567cdaa:67906a71@us-cdbr-east-04.cleardb.com/heroku_053dc4caf001f3d?reconnect=true');
}

module.exports = sequelize;
