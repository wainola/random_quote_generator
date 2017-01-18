var express = require('express');
var router = express.Router();
var controladorCitas = require('../controllers/citas');

router.get('/citas', controladorCitas.listaDeCitas);
router.get('/citas/listaCitas', controladorCitas.listarCitasJson);
router.delete('/citas/borrar/:citaid', controladorCitas.borrarCita);


module.exports = router;
