const createTodo = require('../../todos/create');
const eventGenerator = require('../testUtils/eventGenerator');
const getTodo = require('../../todos/get');

describe('create todo integration tests', () => {
    test('it should take a body and return an API Gateway response', async () => {
        const event = eventGenerator({
            body: {
                text: 'This is from Unit Testing1',
            },
        });

        createTodo.create(event,null, (error, res) =>{
            expect(res.statusCode).toBe(200);
            let body = JSON.parse(res.body);
            expect(body.TableName).toBe(process.env.DYNAMODB_TABLE);
            expect(body.Item.text).toBe('This is from Unit Testing1');

            let getEvent = eventGenerator({
                pathParametersObject: { id: body.Item.id }
            });

            getTodo.get(getEvent,null, (error, res) => {
                expect(res.statusCode).toBe(200);
                let getResponse = JSON.parse(res.body);
                expect(getResponse.text).toBe(body.Item.text);
            });
        });

        
    });
});
