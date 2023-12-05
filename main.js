


rightwristx = 0;
leftwristx = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(550 , 550);
    canvas.position(580,125);

    video = createCapture(VIDEO);
    video.size(550 , 550);

    posenet = ml5.poseNet(video , modelloaded);
    posenet.on("pose" , gotposes);
}

function gotposes(results)
{
    if (results.length > 0 ) 
    {
        console.log(results);
        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        difference = floor(leftwristx  -  rightwristx);
        console.log("right wrist x = " + rightwristx + " left wrist x = " + leftwristx + " difference = " + difference);
    }
}

function modelloaded()
{
    console.log("model is loaded");
}



function draw()
{
    background("#289985");
    fill("#FFE787");
    text("peter",50,400);
    textSize(difference);
    document.getElementById("font").innerHTML= "font size nof the text will be :" + difference + "px";
}