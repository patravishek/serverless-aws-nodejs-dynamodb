const request = require('supertest');

describe("GET /", () => {
    test('It should return a list', async () => {
        const response = await request("http://localhost:3000").get("/dev/todos/0f8e5a50-90d6-11ea-9d9f-3121415b1063");
        
        expect(response.body.id).toBe("0f8e5a50-90d6-11ea-9d9f-3121415b1063");
        expect(response.body.text).toBe("Learn Serverless1");        
    });
});