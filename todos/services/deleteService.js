'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.DeleteFromDb = (params) => {
    const status = dynamoDb.delete(params, (error) => {
        if (error) {
            return false;
        } else {
            return true;
        }
    });

    return status;
}