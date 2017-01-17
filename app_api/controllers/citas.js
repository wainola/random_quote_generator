var mongoose = require('mongoose');
// requerimos la base de datos.
var Citas = mongoose.model('Citas');
var request = require('request');
var cheerio = require('cheerio');

var enviarRespuestaJson = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.listaDeCitas = function(req, res){
  var opcionesRequest, arr, autores, datoProvisorio;
  arr = [];
  autores = [];
  datoProvisorio = '';
  opcionesRequest = {
    url: 'https://en.wikiquote.org/wiki/Artificial_intelligence',
    method: 'GET',
    json: {}
  };
  request(
    opcionesRequest,
    function(err, res, html){
      var $ = cheerio.load(html);
      $('#mw-content-text').children('ul').children('li').each(function(index){
        arr.push({
          "indice": index + 1,
          "contenido": $(this).text().split('\n').filter(function(elemento){
            return elemento !== '';
          })
        });
      });
      // Procesando un dato particular de la entrada 17.
      $('#mw-content-text').children('dl').children('dd').each(function(index){
        if(index === 0){
          datoProvisorio;
        } else{
          datoProvisorio = $(this).text().split('\n');
        };
      });
      // eliminacion de strings vacios.
      datoProvisorio = datoProvisorio.filter(function(elemento){
        return elemento !== '';
      });
      for(i in datoProvisorio){
        arr[16].contenido.push(datoProvisorio[i]);
      }
      //console.log(arr[16].contenido);
      // Eliminamos elementos que no sirven dado el indice que le indiquemos.
      arr.splice(32);
      //console.log(arr);
      // Procesamos los datos para separar autor de obra.;
      for(i in arr){
        if(arr[i].contenido.length > 2){
          autores.push({
            referencia: arr[i].contenido[2]
          });
          arr[i].contenido.splice(2);
        } else {
          autores.push({
            referencia: arr[i].contenido[1]
          });
          arr[i].contenido.splice(1);
        }
      }
      // Creamos la base de datos.
      for(var i = 0; i < arr.length, i < autores.length; i++){
        Citas.create({
          index: arr[i].indice,
          referencia: autores[i].referencia,
          contenido: arr[i].contenido,
        });
      }
    }
  )
};

module.exports.listarCitasJson = function(req, res){
  Citas.find(function(err, citas){
    if(err){
      enviarRespuestaJson(res, 404, err);
    } else if (!citas){
      enviarRespuestaJson(res, 404, {
        "mensaje": "no hay citas almacenadas"
      });
    } else {
      enviarRespuestaJson(res, 200, citas);
    }
  });
}
