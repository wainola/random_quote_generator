var apiOptions = {
  server: 'http://localhost:3000'
};
var ruta = '/api/citas/listaCitas';
var opcionesDeRequest = {
  url: apiOptions.server + ruta,
  data: {}
};
$(document).ready(function(){
  $.get(opcionesDeRequest, function(data){
    $('#contenidoCita').append(data[0].contenido);
    $('#referenciaCita').append(data[0].referencia);
  });
});
$('#nuevaCita').on('click', function(){
  $('#contenidoCita').empty();
  $('#referenciaCita').empty();
  var numeroAleatorio = Math.floor(Math.random()*30);
  console.log(numeroAleatorio);
  $.get(opcionesDeRequest, function(data){
    $('#contenidoCita').append(data[numeroAleatorio].contenido);
    $('#referenciaCita').append(data[numeroAleatorio].referencia);
  });
});
