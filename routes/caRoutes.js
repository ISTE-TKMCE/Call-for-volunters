const express = require("express");
const caController = require("../controllers/caController");

const router = express.Router();

router.get("/", caController.index);
router.get("/register", caController.form);
router.post("/register", caController.add);
router.get("/success", caController.success);

module.exports = router;
