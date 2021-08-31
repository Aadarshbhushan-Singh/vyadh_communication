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
var startButton=document.getElementById("start");
var stopButton=document.getElementById("stop");
startButton.style.display="none";
//stop button
stopButton.onclick=function(){
    var getStopConfirmation=confirm("Do you want to shut down rover?");
    if(getStopConfirmation==true){
        stopButton.style.display="none";
        startButton.style.display="block";
    }
}

startButton.onclick=function(){
    var getStartConfirmation=confirm("Do you want to start the rover?");
    if(getStartConfirmation==true)
    {
        startButton.style.display="none";
        stopButton.style.display="block";
    }
}

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

//Assingning value to the keys
//For Down Keys
var keyValue=0;
console.log("Original value is: ",keyValue);
window.addEventListener("keydown", checkKeyDown, false);
function checkKeyDown(key){
    //Q
    if (key.keyCode=="81"){
        keyValue=81;
        console.log("Changed Value is: ",keyValue);
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
};
//For up key
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
};


//Selecting the accelerometer and gyroscope input for future use
//accelerometer
accelerometer_x_axis=document.getElementById('accelerometer_x_axis');
accelerometer_y_axis=document.getElementById('accelerometer_y_axis');
accelerometer_z_axis=document.getElementById('accelerometer_z_axis');
//gyroscope
gyroscope_x_axis=document.getElementById('gyroscope_x_axis');
gyroscope_y_axis=document.getElementById('gyroscope_y_axis');
gyroscope_z_axis=document.getElementById('gyroscope_z_axis');

accelerometer_x_axis.value=0;
accelerometer_y_axis.value=0;
accelerometer_z_axis.value=0;

gyroscope_x_axis.value=0;
gyroscope_y_axis.value=0;
gyroscope_z_axis.value=0;
