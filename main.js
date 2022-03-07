scoreL=0;
scoreR=0;
function setup(){
    canvas=createCanvas(500,450);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet("video",modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model is loaded fsdihjdhgfuihukriegjfhjgfdkihiujogdf");
}
function gotPoses(results){
    if(results.length > 0){
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWist = " + scoreLeftWrist + " fsdhusdoiufdhsfhdsjhfdsjhfdsjkfhjdsfhks");
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftwristX + " leftWraadsstY = " + leftwristY);
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("right wrist x= " +rightwristX+ " right wrist y = " + rightwristY);
    }
}


song="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500)
    if (scoreL>0.2){
        circle(leftwristX,leftwristY,20);
        song2.stop();
        if (song == isPlaying(false)){
            song.play();
            document.getElementById("yes").innerHTML="song1";
        } else{
            song.stop();
            song2.play();
            document.getElementById("yes").innerHTML="song2";
        }
    }	
}
function play(){
    song.play();
}
