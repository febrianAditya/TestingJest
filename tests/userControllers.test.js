const request = require("supertest")
const app = require("../app")

describe("This is all about user test case", () => {


    test("Succes Get All Data User - 200", () => {
        // try {
        //     const resultData = await request(app).get("/users")

        //     return reul
        //     // console.log(resultData);
        // } catch (error) {
        //     console.log(error);
        // }

        return request(app)
            .get("/users")
            .then(response => {
                // console.log(response, "===> INI RESPONSE");
                // return response

                // expect(oneObj).toHaveProperty('name') // true
                // console.log(response.body, "==> ini apa yaa");
                
                expect(response.status).toBe(200)
                expect(response.body).toHaveProperty('first_name')
                expect(response.body).toHaveProperty('last_name')
                expect(response.body).toHaveProperty('gender')
                // expect(response.)
                return response
            })
            .catch(err => {
                console.log(err);
                // expect()
            })
    })
})