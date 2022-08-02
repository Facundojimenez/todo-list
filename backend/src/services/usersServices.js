const {getAllUsersDB, addUserDB} = require("../db/querys/usersQuerys");

const getAllUsersService = async () => {
    return await getAllUsersDB();
}

const addUserService = async (data) => {
   return await addUserDB(data);
}

module.exports = {
    getAllUsersService,
    addUserService
}