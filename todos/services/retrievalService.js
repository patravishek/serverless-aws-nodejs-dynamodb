'use strict';

let options = {};
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    };
}

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

exports.GetEntityById = (params, callback) => {
    dynamoDb.get(params, (error, result) => {
        if (error) {
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the todo item.',
            });
        }
        else {
            const response = {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result.Item),
            };
            callback(null, response);
        }

    });
}

exports.GetAllEntities = (params, callback) => {
    dynamoDb.scan(params, (error, result) => {
        if (error) {
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the todo item.',
            });
        } else {
            callback(null, {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result.Items)
            });
        }
    });
}