var scene;
function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene2.mp4');
    scene.play(); // set the video to loop and start playing
    scene.hide();
}


function draw() {
    image(scene,150,150); // draw a second copy to canvas
}