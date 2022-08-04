const {Router} = require("express");
const router = Router();
const {getAllStages , getStageById, deleteStageById, updateStageById , addTaskToStage, addStage} = require("../controllers/stagesControllers")



router.get("/" , getAllStages);
router.post("/", addStage);
router.get("/:id", getStageById);
router.delete("/:id", deleteStageById);
router.put("/:id", addTaskToStage);
router.put("/update/:id", updateStageById);

module.exports = router;