var scene;
function setup() {
    createCanvas(displayWidth, displayHeight);
    scene = createVideo('scene2.mp4');
    scene.size(displayWidth, displayHeight);
    scene.play(); // set the video to loop and start playing
    scene.hide()
}


function draw() {
    image(scene); // draw a second copy to canvas
    scene.onended = function () {
        console.log("DF");

    }
}