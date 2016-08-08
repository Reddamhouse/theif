var scene;
function setup() {
    createCanvas(windowWidth, windowHeight);
    scene = createVideo('scene2.mp4');
    scene.play(); // set the video to loop and start playing
    scene.hide();
}


function draw() {
    // image(scene); // draw a second copy to canvas
}