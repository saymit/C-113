function preload(){

}

function setup(){
canvas= createCanvas(500,350);
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();
tint_color= "";

}

function applyfilter(){
    tint_color= document.getElementById("color_name").value;
}

function draw(){
image(video,0,0,500,350);
tint(tint_color);
}

    function take_snapshot(){
        save('photo.png');
    }

