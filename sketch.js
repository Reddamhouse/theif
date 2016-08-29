var scene;
var scene1ended = false;
var scene2;
var scene3;
scene2play = true;
var removeOptions1 = false;


function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene1.mp4');
    scene.size(displayWidth, displayHeight);
    scene.onended(scene1end);
    noLoop();


}

function draw() {
    if(scene1ended) { //ONLY SHOW IF SCENE1 IS ENDED. SCENE1ENDED VAR STARTS AGAIN ON CHOICE TO DELETE

        //OPTION 1
        rect(displayWidth / 2, displayHeight / 2, 55, 55); //Create rec 1

        //OPTION 2
        rect(displayWidth / 2 + 70, displayHeight / 2, 55, 55); //Make rectangle 2

        //TEST FOR MOUSE
        if (mouseX >= displayWidth / 2 && mouseX <= displayWidth / 2 + 55 && mouseY >= displayHeight / 2 && mouseY <= displayHeight / 2 + 55) {
            // console.log(scene1opt1);
            scene1opt1();
        }


        if (mouseX >= displayWidth / 2 + 70 && mouseX <= displayWidth / 2 + 55 + 70 && mouseY >= displayHeight / 2 && mouseY <= displayHeight / 2 + 55) {
            // console.log(scenplay)
            scene1opt2();
        }

    }
}

function keyPressed() {

    scene.play(); // set the video to loop and start playing

    if (keyCode == UP_ARROW) {
        skip();
    }
}
function scene1end() {
    console.log("Scene 1 ENDED");
    scene1ended = true;
    // check if mouse is inside the rectangle
    // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
    redraw();
}
function mousePressed() {
    redraw(2);
}
function scene1opt1() {
    console.log("Scene 2");
    scene2 = createVideo('scene1option1.mp4');
    scene2.size(displayWidth, displayHeight);
    scene2.play();
    clear();
    scene1ended = false;

}

function scene1opt2() {
    console.log("Scene 3");
    scene3 = createVideo('scene1option2.mp4');
    scene3.size(displayWidth, displayHeight);
    scene3.play();
    clear();
    scene1ended = false;

}

function skip() {
    scene.time(40);
}

// function keyPressed()
