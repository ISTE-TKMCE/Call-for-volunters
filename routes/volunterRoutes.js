const express = require('express');
const volController = require('../controllers/volController');

const router = express.Router();

router.get('/', volController.vol_index);
router.get('/register', volController.vol_form);
router.post('/register', volController.vol_add);


module.exports = router;