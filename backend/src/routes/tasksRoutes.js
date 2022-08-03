const {Router} = require("express");
const router = Router();
const {getAllTasks , getTaskById, addTask} = require("../controllers/tasksControllers")

router.get("/" , getAllTasks);
router.get("/:id", getTaskById);
router.post("/", addTask);


module.exports = router;