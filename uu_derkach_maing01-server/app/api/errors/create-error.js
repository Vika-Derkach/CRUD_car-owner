"use strict";

const DerkachMainUseCaseError = require("./derkach-main-use-case-error.js");
const CREATE_ERROR_PREFIX = `${DerkachMainUseCaseError.ERROR_PREFIX}create/`;

const Delete = {
  UC_CODE: `${CREATE_ERROR_PREFIX}delete/`,
  
};

module.exports = {
  Delete
};
