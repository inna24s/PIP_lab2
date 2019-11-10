var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasSize = 400;
var rText = document.querySelectorAll('button[name="r"]');
var yText = document.getElementById('y');
canvas.width = canvasSize;
canvas.height = canvasSize;
var rt=document.getElementById('send');

function draw() {
    // Сохраняем текущую матрицу трансформации
    ctx.save();
// Используем идентичную матрицу трансформации на время очистки
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
// Возобновляем матрицу трансформации
    ctx.restore();
    ctx.fillStyle = "#ff6100";

//Drawing the rectangle
    ctx.fillRect(canvasSize * 0.5, canvasSize * 0.5, canvasSize * 0.4, canvasSize * 0.2);

//Drawing the quarter of a circle
    ctx.beginPath();
    ctx.arc(canvasSize * 0.5, canvasSize * 0.5, canvasSize * 0.2, Math.PI, 1.5 * Math.PI);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.1, canvasSize * 0.5);
    ctx.fill();

//Drawing the triangle
    ctx.beginPath();
    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.9, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.3);
    ctx.fill();

//Drawing the coordinates
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#FFFFFF";

    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.5, canvasSize * 0.95);
    ctx.moveTo(canvasSize * 0.05, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.95, canvasSize * 0.5);

    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.5125, canvasSize * 0.075);
    ctx.moveTo(canvasSize * 0.5, canvasSize * 0.05);
    ctx.lineTo(canvasSize * 0.4875, canvasSize * 0.075);

    ctx.moveTo(canvasSize * 0.95, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.925, canvasSize * 0.4875);
    ctx.moveTo(canvasSize * 0.95, canvasSize * 0.5);
    ctx.lineTo(canvasSize * 0.925, canvasSize * 0.5125);

    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.1);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.1);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.3);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.3);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.7);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.7);
    ctx.moveTo(canvasSize * 0.495, canvasSize * 0.9);
    ctx.lineTo(canvasSize * 0.505, canvasSize * 0.9);

    ctx.moveTo(canvasSize * 0.1, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.1, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.3, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.3, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.7, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.7, canvasSize * 0.505);
    ctx.moveTo(canvasSize * 0.9, canvasSize * 0.495);
    ctx.lineTo(canvasSize * 0.9, canvasSize * 0.505);

//Drawing necessary text data
    ctx.font = "15px Arial";
    ctx.fillText("Y", canvasSize * 0.5125, canvasSize * 0.05);
    ctx.fillText("X", canvasSize * 0.95, canvasSize * 0.4875);

    ctx.stroke();
}

canvas.addEventListener('click', fraz, false);


function raz() {
    document.querySelector('#send[type="text"]').value = this.value;
    let k = this.value;
    draw();
    numR(this.value);
    var log = document.getElementById("log");
    canvas.addEventListener('click', getClickXY, false);


    function getClickXY(event) {
        var clickX = +(((event.layerX == undefined ? event.offsetX : event.layerX)-200)/80*k/2).toFixed(3);
        var clickY = +(((event.layerY == undefined ? event.offsetY : (- event.layerY))+200)/80*k/2).toFixed(3);
        ctx.fillRect(clickX*160/k +200 , -clickY*160/k+200, 5, 5);
        log.innerText = 'Координаты клика: x:'+ ( clickX) +' y: '+ clickY;
        yText.value=clickY;
        let inputX = document.getElementById("inputX");
        inputX.value=clickX;
        let btn = document.getElementById('sub');
        btn.click();
    }
    }

for (var i = 0; i < rText.length; i++) rText[i].addEventListener('click', raz, false);


function fraz() {
    if(rt.value.length===0) log.innerText="Выберите R!";
}

if (isNaN(rText)) {
    draw();
    textR("R");
}

function textR(str) {
    ctx.fillText(str, canvasSize * 0.5125, canvasSize * 0.1125);
    ctx.fillText(str + "/2", canvasSize * 0.5125, canvasSize * 0.3125);
    ctx.fillText(str, canvasSize * 0.8875, canvasSize * 0.4875);
    ctx.fillText(str + "/2", canvasSize * 0.6875, canvasSize * 0.4875);
    ctx.fillText("-" + str, canvasSize * 0.5125, canvasSize * 0.9125);
    ctx.fillText("-" + str + "/2", canvasSize * 0.5125, canvasSize * 0.7125);
    ctx.fillText("-" + str, canvasSize * 0.0875, canvasSize * 0.4875);
    ctx.fillText("-" + str + "/2", canvasSize * 0.2875, canvasSize * 0.4875);
}

function numR(str1) {
    ctx.fillText(str1, canvasSize * 0.5125, canvasSize * 0.1125);
    ctx.fillText(str1/2, canvasSize * 0.5125, canvasSize * 0.3125);
    ctx.fillText(str1, canvasSize * 0.8875, canvasSize * 0.4875);
    ctx.fillText(str1/2, canvasSize * 0.6875, canvasSize * 0.4875);
    ctx.fillText("-" + str1, canvasSize * 0.5125, canvasSize * 0.9125);
    ctx.fillText("-" + str1/2, canvasSize * 0.5125, canvasSize * 0.7125);
    ctx.fillText("-" + str1, canvasSize * 0.0875, canvasSize * 0.4875);
    ctx.fillText("-" + str1/2, canvasSize * 0.2875, canvasSize * 0.4875);
}


canvas.onmousemove = function (event) {
    if(rt.value.length===0) log.innerText="Выберите R!";
    else {
    let k = rt.value;
    var clickX = +(((event.layerX == undefined ? event.offsetX : event.layerX)-200)/80*k/2).toFixed(3);
    var clickY = +(((event.layerY == undefined ? event.offsetY : (- event.layerY))+200)/80*k/2).toFixed(3);

    log.innerText = 'Координаты клика: x:'+ ( clickX) +' y: '+ clickY;}

};







