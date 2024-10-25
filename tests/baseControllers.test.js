const BaseControllers = require("../controllers/baseControllers")
// const request = require("supertest")


const mockRequest = (body = {}) => ({ body }) // ini untuk kirim request body
const mockResponse = () => {
    const res = {} // ===> ini untuk menampun response json dan response status

    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
    /**
     * {
     *      json: "hello",
     *      status: 200
     * }
     */
}


describe("Ini Unit Testing", () => {
    // ini yang methd get
    test("ini yang function greeting yang caseny adalah BERHASIL", done => {
        /**
         * Disini kita bisa memberikan 3 case expect:
         * 1. kita bisa cek response statusnya, 200
         * 2. kita bisa cek isi dari response bodynya, sesuai dari messagenya apa "Hello World"
         * 3. kita bisa cek key yang ada di response, sesuai dari slide keynya adalah "message" ==> ini masih cari response body nya (*)
         */
        const req = mockRequest()
        const res = mockResponse()

        // console.log(res.json().json, "===> INI RESPONSE NYA YAA");
        // console.log(jest.fn(), "===> INI YANG FN");
        
        BaseControllers.greeting(req, res)

        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            message: "Hello World"
        })

        done()
    })

    test("ini yang function sum", done => {
        // ini yang pertama handle request dan response
        const req = mockRequest({
            value1: 4,
            value2: 5
        })
        const res = mockResponse()

        const expectResult = req.body.value1 + req.body.value2

        // ini yang kedua handle function yang dipakainya
        BaseControllers.sum(req, res)

        // ini yang ketiga untuk handle expect
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            result: expectResult
        })

        // ini yang keemapt jangan lupa dikasih done
        done()
    })
})