'use strict';

const listModel = require('./models/retrievalModel');
const listService = require('./services/retrievalService');

module.exports.list = (event, context, callback) => {
  const params = listModel.ListAllEntities();
  listService.GetAllEntities(params, callback);
};
