// Generamos el Schema.
var mongoose = require('mongoose');
/* Para generar el schema:

1. necesitamos saber como guardaremos la informacion.
2. necesitamos determinar que elementos guardaremos en funcion que elementos tienen las citas en la pagina.
*/

var citasSchema = new mongoose.Schema({
  index: {type: Number, required: true},
  referencia: {type: String, required: true},
  contenido: {type: String, required: true},
  creadoEn: {type: Date, "default": Date.now}
});

// compilamos el modelo.
mongoose.model('Citas', citasSchema);
