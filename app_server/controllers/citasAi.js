var request = require('request');
var apiOptions = {
  server: 'http://localhost:3000'
}

module.exports.cargaPagina = function(req, res){
  res.render('index', {
    title: 'Citas aleatorias'
  });
};

// Construimos una funcion que renderice todo el contenido que ya esta
// puesto en la funcion citasAleatorias.
/*var renderizarCitasAleatorias = function(req, res, responseBody){
  var mensaje;
  if(!(responseBody instanceof Array)){
    mensaje = 'Error en la carga de las citas';
    responseBody = [];
  } else {
    if(!responseBody.length){
      mensaje = 'No existen citas guardadas';
    }
  }
  res.render('index', {
    title: 'Citas aleatorias',
    citas: responseBody,
    mensaje : mensaje
  });
};*/
/*module.exports.citasAleatorias = function(req ,res){
  var opcionesDeRequest, ruta;
  ruta = '/api/citas/listaCitas';
  opcionesDeRequest = {
    url: apiOptions.server + ruta,
    method: 'GET',
    json: {}
  };
  request(
    opcionesDeRequest,
    function(err, response, body){
      var data = body;
      renderizarCitasAleatorias(req, res, data);
    }
  );
};*/
