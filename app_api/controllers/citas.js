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
      var $ = cheerio.load(html);
      $('#mw-content-text').children('ul').children('li').each(function(index){
        arr.push({
          "indice": index + 1,
          "contenido": $(this).text().split('\n').filter(function(elemento){
            return elemento !== '';
          })
        });
      });
      console.log(arr);
    }
  )
};
