const {Router} = require("express");
const router = Router();
const {getAllStages , getStageById, deleteStageById, addTaskToStage, addStage} = require("../controllers/stagesControllers")



router.get("/" , getAllStages);
router.post("/", addStage);
router.get("/:id", getStageById);
router.delete("/:id", deleteStageById);
router.put("/:id", addTaskToStage);

module.exports = router;