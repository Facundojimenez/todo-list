const {getAllUsers_DB, getUserById_DB, searchUserByUsername_DB, addDashboardToUser_DB, updateDashboardFromUser_DB, deleteDashboardFromUser_DB, addUser_DB} = require("../db/querys/usersQuerys");

const getAllUsersService = async () => {
    return await getAllUsers_DB();
}

const getUserByIdService = async (id) => {
    return await getUserById_DB(id);
}

const updateDashboardFromUserService = async (userId, newData) => {
    return await updateDashboardFromUser_DB(userId, newData);
}

const addDashboardToUserService = async (userId, dashboard) => {
    return await addDashboardToUser_DB(userId, dashboard);
}

const deleteDashboardFromUserService = async (userId, dashboardId) => {
    return await deleteDashboardFromUser_DB(userId, dashboardId);
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
    addDashboardToUserService,
    updateDashboardFromUserService,
    deleteDashboardFromUserService,
    addUserService
}