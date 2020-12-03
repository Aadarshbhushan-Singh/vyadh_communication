// {<script type="text/javascript">
//             var video=document.querySelector("#videoElement");
//             navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;
//             if(navigator.getUserMedia){
//                 navigator.getUserMedia({video:true},handleVideo,videoError);
//             }
//             function handleVideo(stream){
//                 video.srcObject=stream;
//                 video.play();
//             }
//             function videoError(e){
                
//             }
// </script>}

//For the video of webcam
var video=document.querySelector("#videoElement");
navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;
if(navigator.getUserMedia){
    navigator.getUserMedia({video:true},handleVideo,videoError);
}
function handleVideo(stream){
    video.srcObject=stream;
    video.play();
}
function videoError(e){
    
}

// Adding functionality to the navigation buttons
document.getElementById("navigation_home").onclick=function(){
    location.href="index.html";
};

document.getElementById("navigation_autonomous").onclick=function(){
    location.href="autonomous.html";
};

document.getElementById("navigation_control").onclick=function(){
    location.href="control.html";
};

document.getElementById("navigation_science").onclick=function(){
    location.href="science.html";
};

//Selecting the camera buttons for future use
/*
var cam1=document.querySelector("#cam_01");
var cam2=document.querySelector("#cam_02");
var cam3=document.querySelector("#cam_03");
var cam4=document.querySelector("#cam_04");
var cam5=document.querySelector("#cam_05");
var cam6=document.querySelector("#cam_06");

cam1.addEventListener("click", function(){
    goLive();
});

cam2.addEventListener("click", function(){
    goLive();
});

cam3.addEventListener("click", function(){
    goLive();
});

cam4.addEventListener("click", function(){
    goLive();
});

cam5.addEventListener("click", function(){
    goLive();
});

cam6.addEventListener("click", function(){
    goLive();
});

function goLive(){

};*/


// Assinging value to the keys
var keyValue=0;
console.log("Original Value: ", keyValue);
window.addEventListener("keydown", checkKeyDown, false);
function checkKeyDown(key){
    //Q
    if (key.keyCode=="81"){
        keyValue=81;
        console.log("Changed Value: ", keyValue);
    } //w
    else if(key.keyCode=="87"){
        keyValue=87;
        console.log("Changed Value: ", keyValue);
    } //e
    else if(key.keyCode=="69"){
        keyValue=69;
        console.log("Changed Value: ", keyValue);
    }// r
    else if(key.keyCode=="82"){
        keyValue=82;
        console.log("Changed Value: ", keyValue);
    } //t
    else if(key.keyCode=="84"){
        keyValue=84;
        console.log("Changed Value: ", keyValue);
    } // y
    else if(key.keyCode=="89"){
        keyValue=89;
        console.log("Changed Value: ", keyValue);
    }// A
    else if(key.keyCode=="65"){
        keyValue=65;
        console.log("Changed Value: ", keyValue);
    } // S
    else if(key.keyCode=="83"){
        keyValue=83;
        console.log("Changed Value: ", keyValue);
    } //T
    else if(key.keyCode=="68"){
        keyValue=68;
        console.log("Changed Value: ", keyValue);
    } //F
    else if(key.keyCode=="70"){
        keyValue=70;
        console.log("Changed Value: ", keyValue);
    } // G
    else if(key.keyCode=="71"){
        keyValue=71;
        console.log("Changed Value: ", keyValue);
    } // H
    else if(key.keyCode=="72"){
        keyValue=72;
        console.log("Changed Value: ", keyValue);
    }// 8
    else if(key.keyCode=="56" || key.keyCode=="104"){
        keyValue=56;
        console.log("Changed Value: ",keyValue);
    }// 4
    else if(key.keyCode=="52" || key.keyCode=="100"){
        keyValue=52;
        console.log("Changed value: ",keyValue);
    }// 5
    else if(key.keyCode=="53" || key.keyCode=="101"){
        keyValue=53;
        console.log("Changed value: ",keyValue);
    }// 6
    else if(key.keyCode=="54" || key.keyCode=="102"){
        keyValue=54;
        console.log("Changed value: ",keyValue);
    }// 0
    else if (key.keyCode=="48" || key.keyCode=="96"){
        keyValue=48;
        console.log("Changed value: ",keyValue);
    }
}

window.addEventListener("keyup", checkKeyUp, false);
function checkKeyUp(key){
    //q
    if (key.keyCode=="81"){
        keyValue=0;
        console.log("Value reseted: ", keyValue);
    } //w
    else if (key.keyCode=="87"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    }// e
    else if (key.keyCode=="69"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } // r
    else if (key.keyCode=="82"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } // t
    else if (key.keyCode=="84"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    }  // y
    else if (key.keyCode=="89"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    }  // A
    else if (key.keyCode=="65"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } // S
    else if (key.keyCode=="83"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } //d
    else if (key.keyCode=="68"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    }// f
    else if (key.keyCode=="70"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } // G
    else if (key.keyCode=="71"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    } // H
    else if (key.keyCode=="72"){
        keyValue=0;
        console.log("Value reseted to: ", keyValue);
    }// 8
    else if(key.keyCode=="56" || key.keyCode=="104"){
        keyValue=0;
        console.log("Value reseted to: ",keyValue);
    }// 4
    else if(key.keyCode=="52" || key.keyCode=="100"){
        keyValue=0;
        console.log("Value reseted to: ",keyValue);
    }// 5
    else if(key.keyCode=="53" || key.keyCode=="101"){
        keyValue=0;
        console.log("Value reseted to: ",keyValue);
    }// 6
    else if(key.keyCode=="54" || key.keyCode=="102"){
        keyValue=0;
        console.log("Value reseted to: ",keyValue);
    }// 0
    else if (key.keyCode=="48" || key.keyCode=="96"){
        keyValue=0;
        console.log("Value reseted to: ",keyValue);
    };
}

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const cam0 = document.getElementById("cam0");
const cam1 = document.getElementById("cam1");
const cam2 = document.getElementById("cam2");
const cam3 = document.getElementById("cam3");
const cam4 = document.getElementById("cam4");
const cam5 = document.getElementById("cam5");
cam0.running = false;
cam1.running = false;
cam2.running = false;
cam3.running = false;
cam4.running = false;
cam5.running = false;

cam0.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera0");
        cam.lastElementChild.setAttribute("src", "#");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera0");
        cam.innerHTML = `<div class="camera-title">cam0</div>
                       <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});

cam1.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera1");
        cam.lastElementChild.setAttribute("src", "#");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera1");
        cam.innerHTML = `<div class="camera-title">cam1</div>
                        <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});

cam2.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera2");
        cam.lastElementChild.setAttribute("src", "#");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera2");
        cam.innerHTML = `<div class="camera-title">cam2</div>
                        <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});

cam3.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera3");
        cam.lastElementChild.setAttribute("src", "#");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera3");
        cam.innerHTML = `<div class="camera-title">cam3</div>
                        <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});

cam4.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera4");
        cam.lastElementChild.setAttribute("src", "#");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera4");
        cam.innerHTML = `<div class="camera-title">cam4</div>
                        <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});

cam5.addEventListener("click", function () {
    this.classList.toggle("running");
    if (this.running) {
        const cam = document.getElementById("camera5");
        cam.lastElementChild.setAttribute("src", "images/ispinner.jpg");
        cam.remove();
        this.running = false;
    }
    else {
        this.running = true;
        let cam = document.createElement("div");
        cam.setAttribute("class", "cam");
        cam.setAttribute("id", "camera5");
        cam.innerHTML = `<div class="camera-title">cam5</div>
                        <img class="camera-container" src="#">`;
        if (row1.childElementCount < 3) {
            row1.appendChild(cam);
        }
        else {
            row2.appendChild(cam);
        }
    }
});