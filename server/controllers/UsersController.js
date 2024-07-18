import User from '../models/User';

exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
