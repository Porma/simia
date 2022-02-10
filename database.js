// https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

let mongoose = require('mongoose');
let config = require('./config');

const server = config.db.server;
const database = config.db.database;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    console.log(`mongodb://${server}/${database}`)
    mongoose.connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.log("Database connection error");
      });
  }
}

module.exports = new Database()
