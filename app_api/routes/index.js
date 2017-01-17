var express = require('express');
var router = express.Router();
var controladorCitas = require('../controllers/citas');

router.get('/citas', controladorCitas.listaDeCitas);
router.get('/citas/listaCitas', controladorCitas.listarCitasJson);

module.exports = router;
