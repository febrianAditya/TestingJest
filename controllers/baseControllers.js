

class BaseControllers {

    static greeting(req, res) {
        const response = {
            "message": "Hello World"
        }
        res.status(200).json(response)
    }


    static sum(req, res) {
        // const value1 = req.body.value1
        // const value2 = req.body.value2
        const { value1, value2 } = req.body // ini destructring
        
        // console.log(typeof value1, "==> ini  yaa");

        const result = value1 + value2
        res.status(201).json({ result })
    }
}

module.exports = BaseControllers