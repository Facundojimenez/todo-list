const {Router} = require("express");
const {getAllUsers, getUserById, searchUserByUsername, addUser} = require("../controllers/usersControllers")
const userAuth = require("../utils/userAuth")
const router = Router();

router.get("/" ,getAllUsers);
router.get("/search", searchUserByUsername);
router.get("/:id", getUserById);
router.post("/", addUser);

router.post("/login", userAuth.login);
router.post("/signup", userAuth.signup);


module.exports = router;