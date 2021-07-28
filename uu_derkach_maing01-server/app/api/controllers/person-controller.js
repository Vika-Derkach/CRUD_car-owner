"use strict";
const PersonAbl = require("../../abl/person-abl.js");

class PersonController {

  update(ucEnv) {
    return PersonAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return PersonAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new PersonController();
