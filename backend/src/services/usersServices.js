const {getAllUsers_DB, getUserById_DB, searchUserByUsername_DB, addUser_DB} = require("../db/querys/usersQuerys");

const getAllUsersService = async () => {
    return await getAllUsers_DB();
}

const getUserByIdService = async (id) => {
    return await getUserById_DB(id);
}

const searchUserByUsernameService = async (username) => {
    return await searchUserByUsername_DB(username);
}

const addUserService = async (user) => {
   return await addUser_DB(user);
}

module.exports = {
    getAllUsersService,
    getUserByIdService,
    searchUserByUsernameService,
    addUserService
}