'use strict';

exports.FilterById = (id) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: id,
        },
    };

    return params;
}

exports.ListAllEntities = () => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE
    };

    return params;
}