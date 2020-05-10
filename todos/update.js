'use strict';

const updateModel = require('./models/updateModel');
const updateService = require('./services/updateService');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the todo item.',
    });
    return;
  }

  const params = updateModel.updateModel(event.pathParameters.id, data.text, data.checked, timestamp);
  const status = updateService.UpdateValuesToDb(params,callback);
};
