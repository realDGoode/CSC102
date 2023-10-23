/*function addButtons() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button")

    var parent = document.getElementById("roboImage");
    parent.appendChild(inputElement);

    var newParagraph = document.createElement("p");

    var paragraphText = document.createTextNode("New Paragraph");
    newParagraph.appendChild(paragraphText)

    parent.appendChild(paragraphText);
} */

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
    roboImage.style.animationDuration = "10s"
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