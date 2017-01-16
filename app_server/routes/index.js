var express = require('express');
var router = express.Router();
var controladorCitasAi = require('../controllers/citasAi');

/* GET home page. */
router.get('/', controladorCitasAi.citasAleatorias);

module.exports = router;
