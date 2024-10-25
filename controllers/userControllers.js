const fs = require("fs")
const dataUsers = fs.readFileSync("./db/dataUsers.json", "utf-8")

class UserControllers {

    static getAllDataUsers(req, res) {
        // console.log(dataUsers, "==> INI DATANYA");
        const dataManipulate = JSON.parse(dataUsers)
        // console.log(dataManipulate);

        res.status(200).json(dataManipulate)
        
    }
}


module.exports = UserControllers