"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/owner-error.js");

const WARNINGS = {
  CreateUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class OwnerAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("owner");
  }

  // async list(awid, dtoIn) {

  // }

  async list(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("listDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.list(awid, dtoIn);
    } catch (e) {
      throw Errors.List.OwnerListDaoFailed(uuAppErrorMap, { dtoIn, cause: e });
    }

    return { ...dtoOut, uuAppErrorMap };
  }

  async delete(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("deleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.delete(awid, dtoIn.id);
    } catch (e) {
      throw Errors.Delete.OwnerDeleteDaoFailed(uuAppErrorMap, { dtoIn, cause: e });
    }

    return { ...dtoOut, uuAppErrorMap };
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("createDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.create({ ...dtoIn, awid });
    } catch (e) {
      throw Errors.Create.OwnerCreateDaoFailed(uuAppErrorMap, { dtoIn, cause: e });
    }

    return { ...dtoOut, uuAppErrorMap };
  }
}

module.exports = new OwnerAbl();
