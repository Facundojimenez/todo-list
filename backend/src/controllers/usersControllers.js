
const {getAllUsersService, getUserByIdService, addDashboardToUserService, deleteDashboardFromUserService, updateDashboardFromUserService, searchUserByUsernameService, addUserService} = require("../services/usersServices")

const getAllUsers = async (req, res) => {
    const users = await getAllUsersService();
    res.json(users);
}

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id); 
    const user = await getUserByIdService(id);
    res.json(user);
}

const addDashboardToUser = async (req, res) => {
    const userId = parseInt(req.params.id); 
    const dashboard = req.body;
    const user = await addDashboardToUserService(userId, dashboard);
    res.json(user);
}

const updateDashboardFromUser = async (req, res) => {
    const userId = parseInt(req.params.id); 
    const newData = req.body;
    const user = await updateDashboardFromUserService(userId, newData);
    res.json(user);
}

const deleteDashboardFromUser = async (req, res) => {
    const userId = parseInt(req.params.id); 
    const dashboardId = parseInt(req.query.dashboardId)
    const user = await deleteDashboardFromUserService(userId, dashboardId);
    res.json(user);
}

const searchUserByUsername = async (req, res) => {
    const username = req.query.username; 
    const user = await searchUserByUsernameService(username);
    res.json(user);
}

const addUser = async (req, res) => {
    const user = await addUserService(req.body);
    res.json(user);
}

module.exports = {
    getAllUsers,
    getUserById,
    searchUserByUsername,
    addDashboardToUser,
    deleteDashboardFromUser,
    updateDashboardFromUser,
    addUser
}