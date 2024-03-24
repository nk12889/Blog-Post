const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/',adminController.homePage)





module.exports = router;