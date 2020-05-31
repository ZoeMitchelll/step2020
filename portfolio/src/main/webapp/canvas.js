var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// c.fillRect(100,100,100,100);
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.stroke();
// for (var i = 0; i < 1; i++){
//     var x = Math.random() * Window.innerWidth;
//     var y = Math.random() * Window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.strokeStyle('blue');
//     c.stroke();
//}
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 2;
var dy = 2;
radius = 10;
function animate(){
    var c = canvas.getContext('2d');
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y, radius,0,Math.PI*2,false);
    c.strokeStyle = 'blue';
    c.stroke();
    if(x + radius >innerWidth || x-radius < 0){
        dx = -dx;
    }
    x += dx;
    if(y + radius >innerHeight || y-radius < 0){
        dy = -dy;
    }
    y += dy;
}
for(var i = 0; i<10; i++){
animate();
animate();
animate();}
