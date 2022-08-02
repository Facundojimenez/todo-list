const User = require("../schemas/usersSchemas")

const getAllUsersDB = async () => {
    return await User.find({})
}

const addUserDB = async (user) => {
    const newUser = new User({
        ...user
    });
    return await newUser.save();
}

module.exports = {
    getAllUsersDB,
    addUserDB
}