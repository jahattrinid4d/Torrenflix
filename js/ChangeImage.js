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
    x = Math.floor(size*Math.random());
   
    $("#main").css('background',"url('" + image[x] + "')"); 
    localStorage.setItem("x",x);


}else{
    console.log(" No ha sido posible cargar otra imagen, porque ya está sorteado");
    $("#main").css('background',"url('" + image[localStorage.getItem("x")] + "')"); 
 

}















