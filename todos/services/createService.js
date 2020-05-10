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

exports.InsertIntoDb = (params, callback) => {
    dynamoDb.put(params, (error) =>{
        
        if(error){
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t fetch the todo item.',
            });
        }
        else{
            const response = {
                statusCode: 200,
                body: JSON.stringify(params),
            };
            callback(null, response);
        }
    });
}