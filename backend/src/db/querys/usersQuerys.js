const User = require("../schemas/usersSchemas")
const {Dashboard} = require("../schemas/dashboardsSchemas")

const getAllUsers_DB = async () => {
    return await User.find({})
}

const getUserById_DB = async (id) => {
    return await User.findById(id)
}

const addDashboardToUser_DB = async (userId, dashboard) => {
    const newDashboard = new Dashboard({
        ...dashboard
    });
    ///me traigo el user, le agrego la tarea y lo guardo de nuevo
    const userUpdate = await getUserById_DB(userId);
    userUpdate.dashboards.push(newDashboard);
    return await userUpdate.save()
}

const updateDashboardFromUser_DB = async (userId, newData) => {
    const userUpdate = await getUserById_DB(userId);
    const dashboardUpdate = userUpdate.dashboards.find(dashboardIteration => dashboardIteration._id === newData.dashboardId);
    
    if(newData.title){
        dashboardUpdate.title = newData.title;
    }

    userUpdate.dashboards = userUpdate.dashboards.map( dashboardIteration => {
        if(dashboardIteration._id === dashboardUpdate._id){
            return dashboardUpdate
        }
        return dashboardIteration;
    })

    return await userUpdate.save();
}

const deleteDashboardFromUser_DB = async (userId, dashboardId) => {
    const userUpdate = await getUserById_DB(userId);

    userUpdate.dashboards = userUpdate.dashboards.filter( dashboardIteration => dashboardIteration._id !== dashboardId)
    return await userUpdate.save()
}

const searchUserByUsername_DB = async (username) => {
    console.log(username)
    return await User.findOne({username: username})
}

const addUser_DB = async (user) => {
    const newUser = new User({
        ...user
    });
    return await newUser.save();
}

module.exports = {
    getAllUsers_DB,
    getUserById_DB,
    searchUserByUsername_DB,
    addDashboardToUser_DB,
    deleteDashboardFromUser_DB,
    updateDashboardFromUser_DB,
    addUser_DB
}