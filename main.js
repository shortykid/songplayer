song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;


function preload(){
song1 = loadSound("music1.mp3");
song2 = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
    image(video,0,0,600,500)

    fill("#FF0000");
    stroke("#FF0000");

    
    
}

function play(){
   
}

function gotPoses(results)
{
    
}