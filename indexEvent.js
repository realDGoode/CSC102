function play() {
    var audio = new Audio("space.mp3");
    audio.play();
  }
//This is the function that adds the Start and Reset buttons to the index.html page
function addButtons() {
    console.log("Adding Start and Reset Button");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "SPEEN!");
    inputElementStart.setAttribute("onclick", "startButton();");
    inputElementStart.setAttribute("id", "startButton");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("onclick", "stopButton();");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let parent = document.getElementById("roboImage");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop); 
}

function startButton() {
    console.log("Started!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let roboImage = document.getElementById("roboImage")
    roboImage.style.animationDuration = "0.5s"
}

function stopButton() {
    console.log("Reset!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let roboImage = document.getElementById("roboImage")
    roboImage.style.animationDuration = "0s"
}