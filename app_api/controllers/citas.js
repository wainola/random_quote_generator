var mongoose = require('mongoose');
// requerimos la base de datos.
var Citas = mongoose.model('Citas');
var request = require('request');
var cheerio = require('cheerio');

module.exports.listaDeCitas = function(){
  var opcionesRequest;
  opcionesRequest = {
    url: 'https://en.wikiquote.org/wiki/Artificial_intelligence',
    method: 'GET',
    json: {}
  };
  request(
    opcionesRequest,
    function(err, res, html){
      var arr = [], i, elementos;
      var datoProvisorio = '';
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
        }
        // eliminamos strings vacios.
        //arr[16].contenido.push(datoProvisorio);
      });
      datoProvisorio = datoProvisorio.filter(function(elemento){
        return elemento !== '';
      })
      for(i in datoProvisorio){
        arr[16].contenido.push(datoProvisorio[i]);
      }
      //arr[16].contenido.push(datoProvisorio);
      // Procesamos los datos para separar autor de obra.
      console.log(arr);
      console.log(arr[16]);
    }
  )
};
