
const {getAllUsersService, addUserService} = require("../services/usersServices")

const getAllUsers = async (req, res) => {
    const users = await getAllUsersService();
    res.json(users);
}

const addUser = async (req, res) => {
    const user = await addUserService(req.body);
    res.json(user);
}

module.exports = {
    getAllUsers,
    addUser
}