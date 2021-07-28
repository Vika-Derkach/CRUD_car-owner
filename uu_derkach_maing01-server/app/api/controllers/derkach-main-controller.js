"use strict";
const DerkachMainAbl = require("../../abl/derkach-main-abl.js");

class DerkachMainController {
  init(ucEnv) {
    return DerkachMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new DerkachMainController();
