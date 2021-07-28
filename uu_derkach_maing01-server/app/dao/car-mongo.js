"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class CarMongo extends UuObjectDao {
  async createSchema() {}

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async list(awid, pageInfo) {
    return await super.find({ awid }, pageInfo);
  }

  async get(awid, id) {
    return await super.findOne({ awid, id });
  }

  async update(uuObject) {
    const { awid, id } = uuObject;
    console.log(uuObject);
    return await super.findOneAndUpdate({ awid, id }, uuObject);
  }
}

module.exports = CarMongo;
