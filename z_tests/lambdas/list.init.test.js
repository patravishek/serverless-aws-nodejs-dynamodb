const listTodo = require('../../todos/list');

describe('list todo integration tests', () => {
    test('it should return all the records', async () => { 
        listTodo.list(null,null, (error, response) => {
            expect(response.statusCode).toBe(200);
            let body = JSON.parse(response.body);
            for(let item in body){
                if(item.text=='This is from Unit Testing1'){
                    expect(item.text).toBe('This is from Unit Testing1');
                }
            }
        });
    });
});
