const User = require("../schemas/usersSchemas")

const getAllUsers_DB = async () => {
    return await User.find({})
}

const getUserById_DB = async (id) => {
    return await User.findById(id)
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
    addUser_DB
}