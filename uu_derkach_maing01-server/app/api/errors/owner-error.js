"use strict";

const HatcheryMainUseCaseError = require("./derkach-main-use-case-error.js");

const OWNER_ERROR_PREFIX = `${HatcheryMainUseCaseError.ERROR_PREFIX}owner/`;

const Create = {
  UC_CODE: `${OWNER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  OwnerCreateDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}testCaseCreateDaoFailed`;
      this.message = "Creating test case by testCase DAO create failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${OWNER_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  OwnerDeleteDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}testCaseDeleteDaoFailed`;
      this.message = "Creating test case by testCase DAO delete failed.";
    }
  },
};

const List = {
  UC_CODE: `${OWNER_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  OwnerListDaoFailed: class extends HatcheryMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}testCaseListDaoFailed`;
      this.message = "Creating test case by testCase DAO list failed.";
    }
  },
};

module.exports = {
  Delete,
  List,

  Create,
};
