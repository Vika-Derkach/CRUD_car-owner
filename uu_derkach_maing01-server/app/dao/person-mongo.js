"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class PersonMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = PersonMongo;
