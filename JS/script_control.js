//Adding functionality to navigation buttons
document.getElementById("navigation_home").onclick=function(){
    location.href="index.html";
};

document.getElementById("navigation_autonomous").onclick=function(){
    location.href="autonomous.html";
};

document.getElementById("navigation_camera").onclick=function(){
    location.href="camera.html";
};

document.getElementById("navigation_science").onclick=function(){
    location.href="science.html";
};

//Adding functionality to buttons for magnetometer

//Selecting the compass and needle
var rover_compass=document.getElementById('rover_compass');
var rover_needle=document.getElementById('rover_needle');
var robotic_arm_compass=document.getElementById('robotic_arm_compass');
var robotic_arm_needle=document.getElementById('robotic_arm_needle');

//Selecting buttons
var rover_btn=document.getElementById('rover_btn');
var robotic_arm_btn=document.getElementById('robotic_arm_btn');

rover_btn.onclick=function(){
    var rover_rot_value=prompt("Enter the value for rotation of rover: ");
    rover_needle.style.transform='rotate('+(rover_rot_value)+'deg';
};

robotic_arm_btn.onclick=function(){
    var robotic_arm_rot_value=prompt("Enter the value for rotation of robotic arm: ");
    robotic_arm_needle.style.transform='rotate('+(robotic_arm_rot_value)+'deg';
}
