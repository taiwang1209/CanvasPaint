document.getElementById("red").onclick = function () {
    ctx.fillStyle= "red";  
    ctx.strokeStyle= "red";
};

document.getElementById("orange").onclick = function () {
    ctx.fillStyle= "orange";  
    ctx.strokeStyle= "orange";
};

document.getElementById("yellow").onclick = function () {
    ctx.fillStyle= "yellow";  
    ctx.strokeStyle= "yellow";
};

document.getElementById("green").onclick = function () {
    ctx.fillStyle= "green";  
    ctx.strokeStyle= "green";
};

document.getElementById("blue").onclick = function () {
    ctx.fillStyle= "blue";  
    ctx.strokeStyle= "blue";
};

document.getElementById("purple").onclick = function () {
    ctx.fillStyle= "purple";  
    ctx.strokeStyle= "purple";
};

document.getElementById("black").onclick = function () {
    ctx.fillStyle= "black";  
    ctx.strokeStyle= "black";
};

document.getElementById("white").onclick = function () {
    ctx.fillStyle= "white";  
    ctx.strokeStyle= "white";
};

document.getElementById("nowRGB").onclick = function () {
    ctx.fillStyle= nowRGB.style.backgroundColor;  
    ctx.strokeStyle= nowRGB.style.backgroundColor;
};


//RGB拉條

function showR(newVal){
    document.getElementById("showR").innerHTML = newVal;
}
function showG(newVal){
    document.getElementById("showG").innerHTML = newVal;
}
function showB(newVal){
    document.getElementById("showB").innerHTML = newVal;
}

    

function show(){
    nowRGB.style.backgroundColor = 
    ("rgb("+document.getElementById("inputR").value+','+
    document.getElementById("inputG").value+','+
    document.getElementById("inputB").value+")");
}
    

