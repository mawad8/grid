 setInterval(function(){
var x = Math.round(Math.random() * 255);
var y = Math.round(Math.random() * 255);
var z = Math.round(Math.random() * 255);
var q = "background-color:rgb("+x+", "+y+", "+z+");";
var h = "background-color:rgb("+y+", "+z+", "+x+");";
var wow = document.getElementById("d0");
wow.style = q;

}, 1000);

// var kk = function(f){
   
   
// var wow = document.getElementById("d1");


//     };
// kk(bb);
// var fan = function(f){
//     console.log("hello")
// };


// var nn = function(){
    

// };
// nn(fan);