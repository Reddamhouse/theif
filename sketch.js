var scene;
var scene1ended = false;
function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene2.mp4');
    scene.size(displayWidth, displayHeight);
    scene.play(); // set the video to loop and start playing
    scene.onended(scene1end);
}

function draw() {
    if (scene1ended) {
        if (mouseX >= displayWidth / 2 && mouseX <= displayWidth / 2 + 55 && mouseY >= displayHeight / 2 && mouseY <= displayHeight / 2 + 55) {
            console.log("get o nit")
        }
    }
}


function scene1end() {
    console.log("Scene 1 ");
    scene1ended = true;
    // check if mouse is inside the rectangle
    // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
    rect(displayWidth / 2, displayHeight / 2, 55, 55);
    rect(displayWidth / 2 + 70, displayHeight / 2, 55, 55);
}