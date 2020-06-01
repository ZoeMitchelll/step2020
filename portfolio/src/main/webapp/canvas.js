var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 2;
var dy = 2;
var radius = 10;
function animate(){
    var c = canvas.getContext('2d');
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI*2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    if(x + radius > innerWidth || x-radius < 0){
        dx = -dx;
    }
    x += dx;
    if(y + radius > innerHeight || y-radius < 0){
        dy = -dy;
    }
    y += dy;
}
for(var i = 0; i < 30; i++){
    animate();
}
