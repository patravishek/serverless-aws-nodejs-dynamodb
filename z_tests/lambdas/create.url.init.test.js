const request = require('supertest');
const testData = require('../testData/testData.json');

describe("POST /", () =>{
    test("It Should Save a Record In the Local Dynamo DB", async () => {
        const responseCreateApi = await request(testData.appUrl)
                                    .post("/dev/todos/")
                                    .send({ "text": testData.createToDo.requestBodyData })
                                    .set('Accept', 'application/json');
        expect(responseCreateApi.body.TableName).toBe(testData.dynamoDbTableName);

        const responseGetApi = await request(testData.appUrl).get("/dev/todos/"+responseCreateApi.body.Item.id);
        
        expect(responseGetApi.body.id).toBe(responseCreateApi.body.Item.id);
        expect(responseGetApi.body.text).toBe(testData.createToDo.requestBodyData);  
    });
});