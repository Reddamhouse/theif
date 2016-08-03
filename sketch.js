var scene;
function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene2.mp4');
    scene.loop(); // set the video to loop and start playing
    scene.hide();
}


function draw() {
    background(150);
    image(scene,10,10); // draw the video frame to canvas
    filter('GRAY');
    image(scene,150,150); // draw a second copy to canvas
}