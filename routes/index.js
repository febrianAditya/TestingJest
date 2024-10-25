const express = require("express")
const routes = express.Router()
const BaseControllers = require("../controllers/baseControllers")
const UserControllers = require("../controllers/userControllers")


routes.get('/', (req, res) => {
    res.send('aku sampai di folder rouutes')
})


routes.post("/sum", BaseControllers.sum)


routes.get("/users", UserControllers.getAllDataUsers)

module.exports = routes