module.exports.citasAleatorias = function(req, res){
  var numeroAleatorio, citas;
  numeroAleatorio = Math.floor(Math.random()*5 + 1);
  res.render('index', {
    title: "Citas aleatorias",
    citas: {
        "autor": "Friedrich Nietzsche",
        "citas": [
          "Without music, life would be a mistake.",
          "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
          "That which does not kill us makes us stronger.",
          "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
          "And those who were seen dancing were thought to be insane by those who could not hear the music."
        ]
      }
  });
};
