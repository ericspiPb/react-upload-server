var uploadController = require('../controllers/UploadController');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', uploadController.index);

module.exports = router;
