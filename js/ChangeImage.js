var hour = new Date().getHours();



   
    var image = new Array();
    image[0] = "../img/movies/sonic/main-banner.png";
    image[1] = "../img/movies/1917/main-banner.png";
    image[2] = "../img/movies/ad-astra/main-banner.png";
    image[3] = "../img/movies/frozen-2/main-banner.png";
    image[4] = "../img/movies/joker/main-banner.png";
    var size = image.length;
    
    
    





var horadeldia = 0;


console.log(hour);
$(document).ready(function(){
   

   
    if(hour > 6 && hour <= 12){
   
        $("#main").css('background',"url('" + image[localStorage.getItem("z")] + "')");    
        horadeldia = 1;
    }else if(hour > 12 && hour <= 18){
         horadeldia = 2;
        $("#main").css('background',"url('" + image[localStorage.getItem("y")] + "')");   
    }else{
        $("#main").css('background',"url('" + image[localStorage.getItem("x")] + "')"); 
          horadeldia = 3;
    }


//$("#main").css('background',"url('" + image[x] + "')");
if(horadeldia == 1){
        var z = Math.floor(size*Math.random());
        var tiempo = setInterval(function(){
        console.log("z : " + z);
        localStorage.setItem("z",z);
        console.log(localStorage.getItem("z"));
        x = localStorage.getItem("z");
       
      
    },10000);  
}else if(horadeldia == 2)
{
       var y = Math.floor(size*Math.random());
       var tiempo = setInterval(function(){    
        console.log("y : " + y);
        localStorage.setItem("y",y);
        console.log(localStorage.getItem("y"));
        y = localStorage.getItem("y");
       
      
    },10000);  
}else{
    var x = Math.floor(size*Math.random());
   var tiempo = setInterval(function(){
    console.log("x : " + x);
    localStorage.setItem("x",x);
    console.log(localStorage.getItem("x"));
    x = localStorage.getItem("x");
   
   
  
},10000);  
}

});



    


