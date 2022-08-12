
const {getAllUsersService, getUserByIdService, addDashboardToUserService, deleteDashboardFromUserService, updateDashboardFromUserService, searchUserByUsernameService, addUserService} = require("../services/usersServices")
const {checkIntegerId} = require("../utils/errorHandling")

const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        res.json(users);
    }catch(err){
        next(err.message)
    }
}

const getUserById = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id); 
        checkIntegerId(id)
        const user = await getUserByIdService(id);
        res.json(user);
    }catch(err){
        next(err.message)
    }
}

const addDashboardToUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id); 
        const dashboard = req.body;
        checkIntegerId(userId);
        const user = await addDashboardToUserService(userId, dashboard);
        res.json(user);
    }catch(err){
        next(err.message)
    }
}

const updateDashboardFromUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id); 
        const newData = req.body;
        checkIntegerId(userId)
        const user = await updateDashboardFromUserService(userId, newData);
        res.json(user);

    }catch(err){
        next(err.message)
    }
}

const deleteDashboardFromUser = async (req, res, next) => {
    try{
        const userId = parseInt(req.params.id); 
        const dashboardId = parseInt(req.query.dashboardId);
        checkIntegerId(userId);
        checkIntegerId(dashboardId);
        const user = await deleteDashboardFromUserService(userId, dashboardId);
        res.json(user);
    }catch(err){
        next(err.message)
    }
}

const searchUserByUsername = async (req, res, next) => {
    try{
        const username = req.query.username; 
        const user = await searchUserByUsernameService(username);
        res.json(user);
    }catch(err){
        next(err.message)
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    searchUserByUsername,
    addDashboardToUser,
    deleteDashboardFromUser,
    updateDashboardFromUser
}