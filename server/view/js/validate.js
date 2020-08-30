function soloLetras(e) {
  var key = e.keyCode || e.which;
  var tecla = String.fromCharCode(key).toLowerCase();
  var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  var especiales = [8-37-39-46];

  var tecla_especial = false
  for(var i in especiales){
      if(key == especiales[i]){
          tecla_especial = true;
          break;
      }
  }
  if(letras.indexOf(tecla) == -1 || tecla_especial){
      /* Evitamos la pulsación */
      e.preventDefault();
      return false;
  }
}

  window.addEventListener("load", function() {
    /* Agrego un gestor de eventos "keypress" para todos los campos de tipo "text" */
    var inputs = document.querySelectorAll('input[type="text"]');
    /* No es posible usar .forEach en todos los navegadores por ser un NodeList */
    for (var i = 0; i < inputs.length ; i++) {
      inputs[i].addEventListener(
        "keypress",
        soloLetras,
        false
      );
    }
    for(var i = 0; i < inputs.length; i++){
      var aux = $(inputs[i]).val().trim();
      $(inputs[i]).val(aux);
    }


  });


document.getElementById("text").addEventListener('keyup', sanear);
function sanear(e) {
  let contenido = e.target.value;
  e.target.value = contenido.replace(" ", "");
}



