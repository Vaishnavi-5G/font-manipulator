
nose_x = 0;
nose_y = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    document.getElementById("square_sides").innerHTML = "width And Height of a Square will be = " + difference + "px";
    fill("#FF0000");
    stroke("#32CD32");
    textSize(difference);
    text('word', nose_x, nose_y);
    
}
function modalLoaded() {
    console.log('poseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x="+nose_x+"nose y=" + nose_y);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor (leftWristX - rightWristX); 

        console.log("leftWrist = " + leftWristX + "rightWristX =" + rightWristX + "difference = " + difference);
    }


}
