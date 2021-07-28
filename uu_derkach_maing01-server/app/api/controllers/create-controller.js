"use strict";
const CreateAbl = require("../../abl/create-abl.js");

class CreateController {

  delete(ucEnv) {
    return CreateAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new CreateController();
