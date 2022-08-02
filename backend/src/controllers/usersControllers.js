
const {getAllUsersService, getUserByIdService, searchUserByUsernameService, addUserService} = require("../services/usersServices")

const getAllUsers = async (req, res) => {
    const users = await getAllUsersService();
    res.json(users);
}

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const users = await getUserByIdService(id);
    res.json(users);
}

const searchUserByUsername = async (req, res) => {
    const username = req.query.username; 
    const users = await searchUserByUsernameService(username);
    res.json(users);
}

const addUser = async (req, res) => {
    const user = await addUserService(req.body);
    res.json(user);
}

module.exports = {
    getAllUsers,
    getUserById,
    searchUserByUsername,
    addUser
}