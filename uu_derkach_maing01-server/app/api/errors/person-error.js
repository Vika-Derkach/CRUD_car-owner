"use strict";

const DerkachMainUseCaseError = require("./derkach-main-use-case-error.js");
const PERSON_ERROR_PREFIX = `${DerkachMainUseCaseError.ERROR_PREFIX}person/`;

const Create = {
  UC_CODE: `${PERSON_ERROR_PREFIX}create/`,
  
};

const Update = {
  UC_CODE: `${PERSON_ERROR_PREFIX}update/`,
  
};

module.exports = {
  Update,
  Create
};
