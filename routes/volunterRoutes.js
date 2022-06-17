const express = require("express");
const volController = require("../controllers/volController");

const router = express.Router();

router.get("/", volController.index);
router.post("/register", volController.add);
router.get("/success", volController.success);

module.exports = router;
