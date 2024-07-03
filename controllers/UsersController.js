const Users = require('../models/Users.js');

class UsersController {
    static getAllUsers = async (req, res) => {
        try {
            const data = await Users.find();
            res.status(200).send(data);
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}

module.exports = UsersController;