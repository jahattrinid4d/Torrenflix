var hour = new Date().getMinutes();
console.log(hour);
var x = 0;
var image;
var i = 0;

var iteraciones = 0;

    image = new Array();
    image[0] = "../img/movies/sonic/main-banner.png";
    image[1] = "../img/movies/1917/main-banner.png";
    image[2] = "../img/movies/ad-astra/main-banner.png";
    image[3] = "../img/movies/frozen-2/main-banner.png";
    image[4] = "../img/movies/joker/main-banner.png";
    var size = image.length;
    x = Math.floor(size*Math.random());
    var horadeldia = 0;






var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if(reloadCount > 5){
    reloadCount = 0;
    
}
console.log(reloadCount);
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
  
   
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
  
    history.replaceState(state, null, document.URL);

}
console.log(reloadCount);
if(reloadCount == 1){
    console.log("Capturando primera imagen");
    console.log(x);
  
    $("#main").css('background',"url('" + image[x] + "')"); 
    localStorage.setItem("x",x);
     $("#main").css('background',"url('" + image[x] + "')"); 
                                      

}else{
  
    console.log(" No ha sido posible cargar otra imagen, porque ya está sorteado");
    $("#main").css('background',"url('" + image[localStorage.getItem("x")] + "')"); 
    console.log(localStorage.getItem("x"));
}

$(document).ready( () => {
switch(localStorage.getItem("x")){
    case "0":
        $("#title").html("Sonic: La película (2020)");
        $("#description").html(`Tom Wachowski, el sheriff de la ciudad de Green Hills, viajará a San Francisco para ayudar a Sonic, un erizo azul antropomórfico que corre a velocidades supersónicas, en su batalla contra el maligno Dr. Robotnik y sus aliados.

        Acción, Ciencia ficción, Comedia, Familia`);
    break;
    case "1":
        $("#title").html("1917 (2019)");
        $("#description").html(`En lo más crudo de la Primera Guerra Mundial, dos jóvenes soldados británicos, Schofield y Blake reciben una misión aparentemente imposible. En una carrera contrarreloj, deberán atravesar el territorio enemigo para entregar un mensaje que evitará un mortífero ataque contra cientos de soldados, entre ellos el propio hermano de Blake.
        Bélica, Drama, Acción, Suspense, Historia
        1h 59m`);
     
    break;
    case "2":
        $("#title").html("Ad astra: hacia las estrellas (2019)");
        $("#description").html(`El futuro cercano, un tiempo en el que tanto la esperanza como la adversidad impulsan a la humanidad a mirar hacia las estrellas y más allá. Mientras un misterioso fenómeno amenaza con destruir la vida en el planeta Tierra, el astronauta Roy McBride emprende una misión a través de la inmensidad del espacio y sus muchos peligros para descubrir la verdad sobre una expedición perdida que décadas antes afrontó audazmente el vacío y el silencio en busca de lo desconocido.

        Ciencia ficción, Drama
        2h 3m`);
    break;
    case "3":
        $("#title").html("Frozen 2 (2019)");
        $("#description").html(`¿Por qué Elsa nació con poderes mágicos? La respuesta la está llamando y amenazando su reino. Junto con Anna, Kristoff, Olaf y Sven, se embarcará en un peligroso, pero extraordinario viaje. En Frozen: Una Aventura Congelada, Elsa temía que sus poderes fueran demasiado para el mundo. En Frozen 2, ella debe esperar que sean suficientes. Del equipo ganador del Óscar®, los directores Jennifer Lee y Chris Buck, y el productor Peter Del Vecho; con las voces originales en inglés de Idina Menzel, Kristen Bell, Jonathan Groff y Josh Gad; y la música de los compositores Kristen Anderson-Lopez y Robert Lopez, ganadores del premio de la Academia, llega Frozen 2, la nueva película animada de Disney.

        Animación, Familia, Aventura
        1h 43m`);
    break;
    case "4":
        $("#title").html("Joker (2019)");
        $("#description").html(`Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.

        Crimen, Suspense, Drama
        2h 2m`);
    break;



}


});














