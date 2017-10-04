var canvas = document.getElementById("myCanvas");
var brush = document.getElementById("rad");
var swatches = document.getElementsByClassName("swatch");
var ctx = canvas.getContext("2d");
var radius = 5;
var dragging = false;
var minRad = 1;
var maxRad = 10;
var defaultRad = 5;

var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");


ctx.lineWidth =	radius*2;

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	ctx.beginPath();
}

var putPoint = function(e) {
	if(dragging){
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
	}
}

canvas.addEventListener("mouseup", disengage);
canvas.addEventListener("mousedown", engage);
canvas.addEventListener('mousemove', putPoint);

//筆刷粗度
var setRadius = function(newRadius){
	if(newRadius < minRad)
		newRadius = minRad;
	else if(newRadius > maxRad)
		newRadius = maxRad;
	radius = newRadius;	
	ctx.lineWidth =	radius*2;
	brush.innerHTML = radius;
}

//加粗
btnPlus.addEventListener("click", function(){
	setRadius(radius+1);
}) 

//減細
btnMinus.addEventListener("click", function(){
	setRadius(radius-1);
})

//清空
function clearctx(){
	ctx.clearRect(0,0,600,350);
}
