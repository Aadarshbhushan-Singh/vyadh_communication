//Adding functionality to navigation buttons
document.getElementById("navigation_home").onclick=function(){
    location.href="index.html";
};

document.getElementById("navigation_autonomous").onclick=function(){
    location.href="autonomous.html";
};

document.getElementById("navigation_control").onclick=function(){
    location.href="control.html";
};

document.getElementById("navigation_camera").onclick=function(){
    location.href="camera.html";
};


// For displaying the values of sensors
var PH_sensor_value=document.getElementById("PH_sensor_value");
var co2_sensor_value=document.getElementById("co2_sensor_value");
var temperature_sensor_values=document.getElementById("temperature_sensor_values");
var humidity_sensor_value=document.getElementById("humidity_sensor_value");
var thermal_sensor_values=document.getElementById("thermal_sensor_values");
var spectrophotometer_sensor_values=document.getElementById("spectrophotometer_sensor_values");

function PH_sensor(){
    return 0;
};

function co2_sensor(){
    return 0;
};
function temperature_sensor(){
    return 0;
};
function humidity_sensor(){
    return 0;
};
function thermal_sensor(){
    return 0;
};
function spectrophotometer_sensor(){
    return 0;
};

PH_sensor_value.value=PH_sensor();
co2_sensor_value.value=co2_sensor();
temperature_sensor_value.value=temperature_sensor();
humidity_sensor_value.value=humidity_sensor();
thermal_sensor_value.value=thermal_sensor();
spectrophotometer_sensor_value.value=spectrophotometer_sensor();

// For making graph

//For button
var spectrometric_graph_button=document.getElementById("spectrometric_graph_button");


function show_graph(){
    var x=document.getElementById("chart");
    if(x.style.display==="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
};

//For chart
var chart=document.getElementById("chart");
function getData(){
    return Math.random();
};

Plotly.plot('chart', [{
    y:[getData()],
    type: 'line'
}]);

setInterval(function(){
    Plotly.extendTraces('chart', {y:[[getData()]]}, [0]);
},200);