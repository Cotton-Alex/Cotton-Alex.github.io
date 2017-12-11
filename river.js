var rabbit = "topDrop";
var carrot = "topDrop";
var fox = "topDrop";
var boatLocation = 0;
var dropFrom = "";
var dropTo = "";
var waterFlow = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

//document.querySelector('#rabbit').addEventListener('click', move(rabbit));
//document.querySelector('#carrot').addEventListener('click', move(carrot));
//document.querySelector('#fox').addEventListener('click', move(fox));

function move(object) {
//    console.log("object = " + object);
//    document.getElementById('boat').appendChild(
//            document.getElementById(object)
//            );
    console.log(object + " triggered move function");
}

function drag(ev) {
    console.log("ev.target.parentNode.id = " + ev.target.parentNode.id);
    ev.dataTransfer.setData("text", ev.target.id);
    dropFrom = (ev.target.parentNode.id);
//    if ((dropFrom === "topDrop") && (boatLocation === 1)) {
//        return false;
//    }
//    if ((dropFrom === "bottomDrop") && (boatLocation === 0)) {
//        return false;
//    }
//    if (boatLocation === 0) {
//        document.getElementById("bottomDrop").setAttribute("onDrop", false);
//        document.getElementById("topDrop").setAttribute("onDrop", "drop(event)");
//    }
//    if (boatLocation === 1) {
//        document.getElementById("topDrop").setAttribute("onDrop", false);
//        document.getElementById("bottomDrop").setAttribute("onDrop", "drop(event)");
//    }
    console.log("------------------- drag");
    console.log("object = " + ev.target.id);
    console.log("dropFrom = " + dropFrom);
    console.log("boatLocation = " + boatLocation);
}

function drop(ev) {
    ev.preventDefault();
    object = (ev.target.id);
    //var dropFrom = (ev.target.parentNode.id);
    var dropTo = (ev.target.id);
    console.log("------------------- drop");
    console.log("object = " + object);
    console.log("dropFrom = " + dropFrom);
    console.log("dropTo = " + dropTo);
//        if (((dropFrom === "topDrop") && (dropTo === "bottomDrop")) || ((dropFrom === "bottomDrop") && (dropTo === "topDrop")))
//            return false;
    if (!ev.target.getAttribute("ondrop"))
        return false;
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function dropBoat(ev) {
    ev.preventDefault();
    //var dropFrom = (ev.target.parentNode.id);
    var dropTo = (ev.target.id);
    console.log("------------------- dropBoat");
    console.log("object = " + ev.target.id);
    console.log("dropFrom = " + dropFrom);
    console.log("dropTo = " + dropTo);
    var dropFrom = (ev.target.parentNode.id);
    var targetChildCount = ev.target.childElementCount;
    if (targetChildCount === 1) {
        return false;
    }
    if (!ev.target.getAttribute("ondrop"))
        return false;
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function boatCross() {
    var carrotParentNode = document.getElementById("carrot").parentNode;
    var carrotParentId = (carrotParentNode.id);
    var rabbitParentNode = document.getElementById("rabbit").parentNode;
    var rabbitParentId = (rabbitParentNode.id);
    var foxParentNode = document.getElementById("fox").parentNode;
    var foxParentId = (foxParentNode.id);
    var waterHeight = (document.getElementById("water").offsetHeight);
    console.log("------------------- boatCross");
    console.log("carrotParentId = " + carrotParentId);
    console.log("rabbitParentId = " + rabbitParentId);
    console.log("foxParentId = " + foxParentId);
    console.log("waterheight = " + waterHeight);
//    draggableUpdate(carrotParentId, rabbitParentId, foxParentId);
    if (boatLocation === 0) {
        document.getElementById("topDrop").setAttribute("ondrop", "drop(event)");
        document.getElementById("topDrop").setAttribute("ondragover", "allowdrop(event)");
        document.getElementById("bottomDrop").setAttribute("ondrop", null);
        document.getElementById("bottomDrop").setAttribute("ondragover", null);
        if (carrotParentId === "topDrop" && rabbitParentId === "topDrop" && foxParentId !== "topDrop") {
            console.log("(boatLocation === 0) error");
            document.getElementById("carrot").setAttribute("src", "images/carrot_bite.png");
            console.log("carrot changed to carrot_bite");
            document.getElementById("boat").style.bottom = "0%";
            boatLocation = 1;
            draggableUpdate(carrotParentId, rabbitParentId, foxParentId);
            return;
        } else if (rabbitParentId === "topDrop" && foxParentId === "topDrop" && carrotParentId !== "topDrop") {
            console.log("(boatLocation === 0) error");
            document.getElementById("rabbit").setAttribute("src", "images/Rabbit_bite.png");
            console.log("rabbit changed to Rabbit_bite");
            document.getElementById("boat").style.bottom = "0%";
            boatLocation = 1;
            draggableUpdate(carrotParentId, rabbitParentId, foxParentId);
            return;
        } else
            document.getElementById("boat").style.bottom = "0%";
        boatLocation = 1;
        draggableUpdate(carrotParentId, rabbitParentId, foxParentId);
        return;
    }
    if (boatLocation === 1) {
        document.getElementById("topDrop").setAttribute("ondrop", null);
        document.getElementById("topDrop").setAttribute("ondragover", null);
        document.getElementById("bottomDrop").setAttribute("ondrop", "drop(event)");
        document.getElementById("bottomDrop").setAttribute("ondragover", "allowdrop(event)");
        if (carrotParentId === "bottomDrop" && rabbitParentId === "bottomDrop" && foxParentId !== "bottomDrop") {
            console.log("(boatLocation === 1) error");
            document.getElementById("carrot").setAttribute("src", "images/carrot_bite.png");
            console.log("carrot changed to carrot_bite");
            document.getElementById("boat").style.bottom = null;
            boatLocation = 0;
            return false;
        } else if (rabbitParentId === "bottomDrop" && foxParentId === "bottomDrop" && carrotParentId !== "bottomDrop") {
            console.log("(boatLocation === 1) error");
            document.getElementById("rabbit").setAttribute("src", "images/Rabbit_bite.png");
            console.log("rabbit changed to Rabbit_bite");
            document.getElementById("boat").style.bottom = null;
            boatLocation = 0;
            return false;
        } else
            document.getElementById("boat").style.bottom = null;
        boatLocation = 0;

        return;
    } else {
        console.log("function boatCross error");
    }

}
function draggableUpdate(carrotParentId, rabbitParentId, foxParentId) {
    console.log("------------------- draggableUpdate");
    console.log("carrotParentId = " + carrotParentId);
    console.log("rabbitParentId = " + rabbitParentId);
    console.log("foxParentId = " + foxParentId);
    if (boatLocation === 0) {
        if (carrotParentId === "topDrop") {
            document.getElementById("carrot").setAttribute("draggable", "true");
        }
        if (rabbitParentId === "topDrop") {
            document.getElementById("rabbit").setAttribute("draggable", "true");
        }
        if (foxParentId === "topDrop") {
            document.getElementById("fox").setAttribute("draggable", "true");
        }
        if (carrotParentId === "bottomDrop") {
            document.getElementById("carrot").setAttribute("draggable", "false");
        }
        if (rabbitParentId === "bottomDrop") {
            document.getElementById("rabbit").setAttribute("draggable", "false");
        }
        if (foxParentId === "bottomDrop") {
            document.getElementById("fox").setAttribute("draggable", "false");
            return;
        }
    }
    else if (boatLocation === 1) {
        if (carrotParentId === "topDrop") {
            document.getElementById("carrot").setAttribute("draggable", "false");
        }
        if (rabbitParentId === "topDrop") {
            document.getElementById("rabbit").setAttribute("draggable", "false");
        }
        if (foxParentId === "topDrop") {
            document.getElementById("fox").setAttribute("draggable", "false");
        }
        if (carrotParentId === "bottomDrop") {
            document.getElementById("carrot").setAttribute("draggable", "true");
        }
        if (rabbitParentId === "bottomDrop") {
            document.getElementById("rabbit").setAttribute("draggable", "true");
        }
        if (foxParentId === "bottomDrop") {
            document.getElementById("fox").setAttribute("draggable", "true");
            return;
        }
    }else{
        console.log("function draggableUpdate error");
    }
}

function draw(x, y) {
    var canvas = document.getElementById("canvasWater");
    var ctx = canvas.getContext("2d");
    //ctx.save();

    waterFlow++;
    if (waterFlow === 90) {
        waterFlow = 0;
    }

    //console.log(waterFlow);

    for (x = -100; x <= 600; x += 1) {
        y = -10 - Math.sin((x - waterFlow) * Math.PI / 45) * 9;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 0 - Math.sin((x - waterFlow + 20) * Math.PI / 45) * 12;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 10 - Math.sin((x + waterFlow) * Math.PI / 45) * 8;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#99ebff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 20 - Math.sin((x - waterFlow * 2) * Math.PI / 45) * 10;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 30 - Math.sin((x + waterFlow) * Math.PI / 45) * 12;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 40 - Math.sin((x - waterFlow + 10) * Math.PI / 45) * 8;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#99ebff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 50 - Math.sin((x + waterFlow * 2) * Math.PI / 45) * 11;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 60 - Math.sin((x - waterFlow) * Math.PI / 45) * 9;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 70 - Math.sin((x + waterFlow) * Math.PI / 45) * 12;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#99ebff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 80 - Math.sin((x - waterFlow - 15) * Math.PI / 45) * 9;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 90 - Math.sin((x + waterFlow) * Math.PI / 45) * 11;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 100 - Math.sin((x - waterFlow * 2) * Math.PI / 45) * 8;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#99ebff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 110 - Math.sin((x + waterFlow + 20) * Math.PI / 45) * 10;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 120 - Math.sin((x - waterFlow) * Math.PI / 45) * 12;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 130 - Math.sin((x + waterFlow + 35) * Math.PI / 45) * 8;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#99ebff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 140 - Math.sin((x - waterFlow) * Math.PI / 45) * 10;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#4ddbff";
    ctx.fill();
    ctx.beginPath();

    for (x = -100; x <= 600; x += 1) {
        y = 150 - Math.sin((x + waterFlow * 2) * Math.PI / 45) * 11;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(600, 500);
    ctx.lineTo(-100, 500);
    ctx.fillStyle = "#00ccff";
    ctx.fill();
    ctx.beginPath();

    var loopTimer = setTimeout('draw()', 60);

    //ctx.stroke();
}