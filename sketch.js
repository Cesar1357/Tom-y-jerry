var canvas,bg;
var cat, mouse;
var catimg1, mouseimg1, catimg2, mouseimg2;


function preload() {
    bgimg = loadImage("garden.png");
    catimg1 = loadAnimation("tomOne.png")
    mouseimg1 = loadAnimation("jerryOne.png")
    catimg2 = loadAnimation("tomTwo.png", "tomThree.png")
    mouseimg2 = loadAnimation("jerryTwo.png", "jerryThree.png")
    catimg3 = loadAnimation("tomFour.png");
    mouseimg3 = loadAnimation("jerryFour.png");
    //carga aquí las imágenes

}

function setup(){
    canvas = createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catimg1);
    cat.scale = 0.2;
    mouse = createSprite(100,600);
    mouse.addAnimation("ratonse", mouseimg1);
    mouse.scale = 0.2;

    //crea aquí los sprites de Tom y Jerry

}

function draw() {

    background(bgimg); //Observación: nombre de variable bg dentro de background :o 

    //escribe aquí la condición para evaluar si Tom y Jerry chocan

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("ultima", catimg3);
        cat.changeAnimation("ultima");
        mouse.addAnimation("ultimaa", mouseimg3);
        mouse.changeAnimation("ultimaa");
        cat.x=300;
        cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

   ///Escribe aquí el código para la animación de movimiento y cambio

   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("ratonmolestando", mouseimg2);
       mouse.changeAnimation("ratonmolestando");
       mouse.frameDelay = 25;

       cat.velocityX = -5;
       cat.addAnimation("gatocam", catimg2);
       cat.changeAnimation("gatocam");

   
   }
}