const request = require("supertest")
const app = require("../app")


describe("Integration Testing", () => {
    test("testing sum 2 + 2", () => {

        return request(app)
            .post("/sum")
            .send(
                {
                    value1: 2,
                    value2: 2
                }
            )
            .then(response => {
                // handle res status
                expect(response.status).toBe(201)

                // handle response body value
                expect(response.body.result).toBe(4)
            })
    })

})