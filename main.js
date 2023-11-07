var img = "";
var status = "";
var object = "";
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: detectando objetos";
    video.hide();
}

function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
    image(video,0,0,380,380);
   /*fill("#18AE09");
    text("Perro",45,75);
    noFill();
    stroke("#18AE09");
    rect(30,60,450,350);*/
    if(status !=""){
        r = random(255)
        g =random(255)
        b =random(255)
        objectDetector.detect(video,gotResults);
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML = "Estado: Objetos detectados";
            document.getElementById("numero_objetos").innerHTML = "Numero de objetos detectados:"+objetos.length;
            fill(r,g,b);
            porcentaje = floor(object[i].comfidence*100);
            text(object[i].label+" "+porcentaje+"%",object[i].x,object[i].y);
            noFill();
            stroke(r,g,b);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}

}
function modelLoaded(){
    console.log("Modelo Cargado");
    status = true;
    objectDetector.detect(video,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}