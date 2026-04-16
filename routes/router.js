const { Router } = require("express");
const messageController = require("../controllers/messageController");

const router = Router();

router.post("/new", messageController.addMessagePost);
router.get("/new", messageController.addMessageGet);
router.get("/", messageController.showMessages);

module.exports = router;
