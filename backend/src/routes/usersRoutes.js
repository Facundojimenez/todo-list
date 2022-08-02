const {Router} = require("express");
const {getAllUsers, addUser} = require("../controllers/usersControllers")

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);

module.exports = router;