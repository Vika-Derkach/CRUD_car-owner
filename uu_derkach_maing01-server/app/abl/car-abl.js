"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/car-error.js");

const WARNINGS = {
  CreateUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
    message: "DtoIn contains unsupported keys.",
  },
};

class CarAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("car");
  }
  async update(awid, dtoIn) {
    let validationResult = this.validator.validate("updateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );
    //find з бази данних
    let car = await this.dao.get(awid, dtoIn.id);
    if (!car) throw new Errors.Update.CarUpdateNotExist(uuAppErrorMap, { dtoIn });
    let obj = { ...car, ...dtoIn };
    let dtoOut;

    try {
      dtoOut = await this.dao.update(obj);
    } catch (e) {
      throw new Errors.Update.CarUpdateDaoFailed(uuAppErrorMap, { dtoIn, cause: e });
    }

    return { ...dtoOut, uuAppErrorMap };
  }

  async list(awid, dtoIn) {
    let validationResult = this.validator.validate("listDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut = await this.dao.list(awid, dtoIn);

    return { ...dtoOut, uuAppErrorMap };
  }

  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("createDtoInType", dtoIn);
    const uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.CreateUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut;

    try {
      dtoOut = await this.dao.create({ ...dtoIn, awid });
    } catch (e) {
      throw Errors.Create.CarCreateDaoFailed(uuAppErrorMap, { dtoIn, cause: e });
    }

    return { ...dtoOut, uuAppErrorMap };
  }
}

module.exports = new CarAbl();
