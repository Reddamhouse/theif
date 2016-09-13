var scene;
var scene1ended = false;
var scene2ended;
var scene2opt2ended;
var scene2;
var scene3;
var evor;
var gameOver = false;
var decision1failed = false, decision2failed = false, decision3failed = false;
var scene2option1;
var scene2option2;

scene2play = true;
var removeOptions1 = false;
var gamestarted = false;

function preload() { //loads font
    evor = loadFont("assets/Evogria.otf");
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    noLoop();
    background(0,0,0);
    fill(255, 255, 255).strokeWeight(0).textSize(400);
    textFont(evor);
    textAlign(CENTER);
    text("thief", displayWidth / 2, displayHeight / 2.5);
    textSize(50);
    text("An interactive film experience", displayWidth / 2, displayHeight / 2.1);
    text("PRESS ANY KEY TO START", displayWidth / 2, displayHeight / 1.2);
}

function draw() {

    //DRAWS STARTING TEXT

    //DRAWS GAMEOVER TEXT
    if (gameOver == true) {
        textSize(250);
        text("GAME OVER", displayWidth / 2, displayHeight / 2);
        textSize(80);
        text("PRESS ANY KEY TO TRY AGAIN", displayWidth / 2, displayHeight / 1.5);
    }

    //SCENE1 OPTIONS
    if (scene1ended == true) { //ONLY SHOW IF SCENE1 IS ENDED. SCENE1ENDED VAR STARTS AGAIN ON CHOICE TO DELETE
        console.log(touchX,touchY,displayWidth, displayHeight);

        if (touchX >= displayWidth / 6.144 && touchX <= displayWidth / 2.44585 && touchY >= displayHeight / 2.4 && touchY <= displayHeight / 1.9) {
            scene1opt1();
            console.log("Opt 1")
        }

        if (touchX >= displayWidth / 1.46565 && touchX <= displayWidth / 1.212 && touchY >= displayHeight / 2.4 && touchY <= displayHeight / 1.9) {
            scene1opt2();
            console.log("Opt 2")

        }

    }

    //SCENE2 OPTIONS
    if (scene2ended == true) {
        //TEST FOR MOUSE
        if (touchX >= displayWidth / 19.94805 && touchX <= displayWidth / 2.6574 && touchY >= displayHeight / 2.2 && touchY <= displayHeight / 1.9) {
            scene2opt1();
        }

        if (touchX >= displayWidth / 1.8156 && touchX <= displayWidth / 1.035 && touchY >= displayHeight / 2.2 && touchY <= displayHeight / 1.9) {
            scene2opt2();
        }
    }

    //SCENE3 OPTIONS
    if (scene2opt2ended == true) {
        //TEST FOR MOUSE
        if (touchX >= displayWidth / 13.3565 && touchX <= displayWidth / 2.8927 && touchY >= displayHeight / 2.215 && touchY <= displayHeight / 1.8783) {
            scene3opt1();
        }

        if (touchX >= displayWidth / 2 && touchX <= displayWidth / 1.05858 && touchY >= displayHeight / 2.215 && touchY <= displayHeight / 1.8783  ) {
            scene3opt2();
        }
    }
}
function touchStarted() {
keyOrPress()
}
function keyPressed() {
    keyOrPress();
}
function keyOrPress () {
    redraw();
    // console.log("D")
    if (!gamestarted) {
        gamestarted = true;
        scene1();
        clear();
        noCursor();
    }

    if (gameOver) {
        if (decision1failed) {
            gameOver = false;
            clear();
            scene1();
            decision1failed = false;
        }
        if (decision2failed) {
            gameOver = false;
            clear();
            scene1opt1();
            decision2failed = false;
        }

        if (decision3failed) {
            gameOver = false;
            clear();
            scene2opt2();
            decision3failed = false;
        }
    }
    if (keyCode == UP_ARROW) {
        skip();
    }
}
//exexcutes draw function to test for mouse
// function mousePressed() {
//     redraw(1);
// }

//
//SCENE F
// UNCTIONS
//

function scene1(){
    function scene1end() {
        scene1ended = true;
        cursor();
    }
    scene = createVideo('assets/opening.mp4');
    scene.size(displayWidth, displayHeight);
    cursor();
    scene.play(); // set the video to loop and start playing
    scene.onended(scene1end);
    // noLoop();

    if(decision1failed) {
        scene.time(41);
        // console.log(scene.time)
    }
}
function scene1opt1() { //BLACK WIRE, CONTINUES STORY
    console.log("game over")
    //These are the same for each scene function:
    noCursor(); //Remove cursor
    scene1ended = 3; //Sets the var to a val not a bool
    scene2 = createVideo('assets/decision1option2.mp4'); //Creates and fetches video
    scene2.size(displayWidth, displayHeight); //Setz size
    scene2.play(); //plays it
    scene2ended = false; //Just for skip if statemnt
    if(decision2failed) {
        scene2.time(11);
        // console.log(scene.time)
    }
    function scene2end() { //func
        scene2ended = true;
        cursor();
    }

    scene2.onended(scene2end); //executes function hoisted above ^
}

function scene1opt2() {
    noCursor();
    scene1ended = 3;
    scene3 = createVideo('assets/decision1option1.mp4');
    scene3.size(displayWidth, displayHeight);
    scene3.play();
    decision1failed = true;
    scene3.onended(gameOverf); // Plays game over instead of continuing story
}

function scene2opt1() {
    noCursor()
    scene2ended = 3;
    scene2option1 = createVideo('assets/decision2option1.mp4');
    scene2option1.size(displayWidth, displayHeight);
    scene2option1.play();
    decision2failed = true;
    scene2option1.onended(gameOverf);
}

function scene2opt2() {
    noCursor()
    scene2ended = 3;
    scene2option2 = createVideo('assets/decision2option2.mp4');
    scene2option2.size(displayWidth, displayHeight);
    scene2option2.play();

    function scene2opt2end() {
        scene2opt2ended = true;
        cursor()
    }
    if(decision3failed) {
        scene2option2.time(220);
        // console.log(scene.time)
    }
    scene2opt2ended = false; //Just for skip if statemnt
    scene2option2.onended(scene2opt2end);
}

function scene3opt1() {
    noCursor()
    scene2opt2ended = 3;
    scene3option1 = createVideo('assets/decision3option1.mp4');
    scene3option1.size(displayWidth, displayHeight);
    scene3option1.play();
    scene3opt1ended = false; //Just for skip if statemnt
	 function scene3opt1end() {
         window.location.reload(false);
        cursor()
    }
    scene3option1.onended(scene3opt1end);
}

function scene3opt2() {
    noCursor();
    scene2opt2ended = 3;
    scene3option2 = createVideo('assets/decision3option2.mp4');
    scene3option2.size(displayWidth, displayHeight);
    scene3option2.play();
    decision3failed = true;
	scene3option2.onended(gameOverf);
}
//
//
//


//Displays game-over text
function gameOverf() {
    gameOver = true;
    redraw();
    cursor();
}
// function skip() {
//     if (scene1ended == false) {
//         scene.time(50);
//         console.log("skip1")
//     }
//     if (scene2ended == false) {
//         scene2.time(11);
//         console.log("skip2")
//
//     }
//     if(scene2opt2ended == false) {
//         console.log("skip3");
//         scene2option2.time(220);
//     }
// }