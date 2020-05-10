'use strict';

const uuid = require('uuid');
const todom = require('./models/createModel');
const insertService = require('./services/createService');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });
    return;
  }
  const params = todom.createModel(uuid.v1(), data.text, timestamp, timestamp);
  insertService.InsertIntoDb(params,callback);
};
