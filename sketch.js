var scene;
var scene1ended = false;
var scene2;
scene2play = true;
var removeOptions1 = false;


function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene2.mp4');
    scene.size(displayWidth, displayHeight);
    scene.play(); // set the video to loop and start playing
    scene.onended(scene1end);
    noLoop();


}

function draw() {
    if(scene1ended) {
        rect(displayWidth / 2, displayHeight / 2, 55, 55);
        rect(displayWidth / 2 + 70, displayHeight / 2, 55, 55);
        if (mouseX >= displayWidth / 2 && mouseX <= displayWidth / 2 + 55 && mouseY >= displayHeight / 2 && mouseY <= displayHeight / 2 + 55) {
            console.log(scene2play);
            scene2playf();
        }
        if (mouseX >= displayWidth / 2 + 70 && mouseX <= displayWidth / 2 + 55 + 70 && mouseY >= displayHeight / 2 && mouseY <= displayHeight / 2 + 55) {
            console.log(scene2play)
        }
    }
}
function scene1end() {
    console.log("Scene 1 ");
    scene1ended = true;
    // check if mouse is inside the rectangle
    // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
    redraw();
}
function mousePressed() {
    redraw(2);
}
function scene2playf() {
    console.log("Scene 2");
    scene2 = createVideo('scene3.mp4');
    scene2.size(displayWidth, displayHeight);
    scene2.play();
    clear();
    scene1ended = false;

}

