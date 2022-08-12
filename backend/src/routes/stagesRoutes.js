const {Router} = require("express");
const router = Router();
const { getStagesFromDashboard , getStageById, deleteStageById, updateStageById ,updateTaskFromStage,  deleteTaskFromStage , addTaskToStage, addStage} = require("../controllers/stagesControllers")



router.get("/" , getStagesFromDashboard);

router.post("/", addStage);
router.get("/:id", getStageById);
router.delete("/:id", deleteStageById);


router.put("/update/:id", updateStageById);
router.post("/addTask/:id", addTaskToStage);
router.delete("/deleteTask/:id", deleteTaskFromStage);
router.put("/updateTask/:id", updateTaskFromStage);

module.exports = router;