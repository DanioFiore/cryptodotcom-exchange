const UsersModel = require('../models/UsersModel.js');

class UsersController {
    static getAllUsers = async (req, res) => {
        try {
            const data = await UsersModel.find();
            res.status(200).send(data);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}

module.exports = UsersController;