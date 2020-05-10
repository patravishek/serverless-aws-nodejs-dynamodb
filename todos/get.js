'use strict';

const model = require('./models/retrievalModel');
const getData = require('./services/retrievalService');

module.exports.get = (event, context, callback) => {
  const params = model.FilterById(event.pathParameters.id);
  getData.GetEntityById(params, callback);
};
