var status = "";
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++)
        {
        
        document.getElementById("status").innerHTML = "Status : baby detected";
        document.getElementById("number_of_objects").innerHTML = :"+ objects.length;
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);        
        }
    }
}