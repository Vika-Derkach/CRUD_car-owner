"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/person-error.js");

const WARNINGS = {

};

class PersonAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("person");
  }

  async update(awid, dtoIn) {
    
  }

  async create(awid, dtoIn) {
    
  }

}

module.exports = new PersonAbl();
