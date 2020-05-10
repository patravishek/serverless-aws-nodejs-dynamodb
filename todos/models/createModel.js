'use strict';

exports.createModel = (id, text, createdAt, updatedAt) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: id,
            text: text,
            checked: false,
            createdAt: createdAt,
            updatedAt: updatedAt,
        },
    };

    return params;
}
