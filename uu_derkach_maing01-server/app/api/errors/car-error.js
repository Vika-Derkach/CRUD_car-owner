"use strict";

const HatcheryMainUseCaseError = require("./derkach-main-use-case-error.js");
const CAR_ERROR_PREFIX = `${HatcheryMainUseCaseError.ERROR_PREFIX}car/`;

const Create = {
  UC_CODE: `${CAR_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CarCreateDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}testCaseCreateDaoFailed`;
      this.message = "Creating test case by testCase DAO create failed.";
    }
  },
};

const Update = {
  UC_CODE: `${CAR_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  CarUpdateDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}testCaseUpdateDaoFailed`;
      this.message = "Updating test case by testCase DAO create failed.";
    }
  },

  CarUpdateNotExist: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}testCaseUpdateDaoFailed`;
      this.message = "Car is not exist.";
    }
  },
};

const List = {
  UC_CODE: `${CAR_ERROR_PREFIX}list/`,
};

module.exports = {
  Update,
  List,

  Create,
};
