const {Router} = require("express");
const {getAllUsers, getUserById, searchUserByUsername, addUser} = require("../controllers/usersControllers")
const {auth} = require("../utils/userAuth")
const router = Router();

router.get("/", auth, getAllUsers);
router.get("/search", searchUserByUsername);
router.get("/:id", getUserById);
router.post("/", addUser);

module.exports = router;