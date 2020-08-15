var dest = new Date("sep 3, 2020 10:00:00").getTime();
var n = setInterval(function() {
var now  = new Date() .getTime()
var diff = dest - now;
var days = Math.floor(diff/(1000*60*60*24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));   
var minutes = Math.floor((diff % (1000 * 60 * 60)) /(1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) /(1000));        
document.getElementById('demo').innerHTML = days +' d, ' + hours +' hrs: ' + minutes +'m, ' +seconds +'s: ';  
},1000);