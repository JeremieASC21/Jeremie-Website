let yellowButton = document.querySelector("#yellow_button");
let blueButton = document.querySelector("#blue_button");
let clearButton = document.querySelector("#clear_button");

blueButton.addEventListener('click', blueBackground);
function blueBackground(){
document.body.style.background = "blue";
}

yellowButton.addEventListener('click', yellowBackground);
function yellowBackground(){
document.body.style.background = "yellow";
}
clearButton.addEventListener('click', clearBackground);
function clearBackground(){
document.body.style.background = "white";
}