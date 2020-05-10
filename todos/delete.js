'use strict';

const model = require('./models/retrievalModel');
const deleteService = require('./services/deleteService');

module.exports.delete = (event, context, callback) => {
  const params = model.FilterById(event.pathParameters.id);
  const status = deleteService.DeleteFromDb(params);

  if(!status){
    callback(null, {
      statusCode: error.statusCode || 501,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t remove the todo item.',
    });
  }else{
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({}),
    };
    callback(null, response);
  }

};
