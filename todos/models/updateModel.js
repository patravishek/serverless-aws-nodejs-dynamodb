'use strict';

exports.updateModel = (id, text, checked,timestamp) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: id,
        },
        ExpressionAttributeNames: {
            '#todo_text': 'text',
        },
        ExpressionAttributeValues: {
            ':text': text,
            ':checked': checked,
            ':updatedAt': timestamp,
        },
        UpdateExpression: 'SET #todo_text = :text, checked = :checked, updatedAt = :updatedAt',
        ReturnValues: 'ALL_NEW',
    };

    return params;
}