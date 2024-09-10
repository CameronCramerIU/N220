function simpleFunctionOne() {
  //Code Here
  document.getElementById("changeTxt").innerHTML =
    "Don't change this paragraph";
}

simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameters";
}

simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello World");
}

sayHelloWorld();

function sayFavoriteBand(bandName) {
  document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavoriteBand("Imagine Dragons");

function sayMyName(myName) {
  console.log(myName);
}

sayMyName("Say my Name");

function calcRectPerimiter(height, width) {
  const perimeter = 2 * (height + width);
  document.querySelector("#panswer").innerHTML += perimeter;
}

calcRectPerimiter(2, 4);

function calcArea() {
  const height = document.getElementById("height").value;
  const width = document.getElementById("width").value;
  console.log("height ", height);
  console.log("width ", width);
  document.querySelector("#answer").innerHTML +=
    "Area: " + height * width + "<br/>";
}

function calcRectAreaAndPeri(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;

  document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br/>
    Width: ${width} <br/>
    Perimeter: ${perimeter} <br/>
    Area: ${area} <br/>
    `;
}

calcRectAreaAndPeri(5, 4);
calcRectAreaAndPeri(2, 8);

function myFunction() {
  alert("Who goes there?");
}

function wizard(name, occupation) {
  confirm(`Welcome ${name}, the ${occupation}`);
  document.getElementById(
    "future"
  ).innerHTML += `Welcome ${name}, the ${occupation}`;
}

function addItem() {
  const newItem = prompt("Add Item:");
  console.log(newItem);
}

function returnValue() {
  return color;
}

alert(returnValue("green"));

function calcCircleArea(radius) {
  return 2 * Math.PI * radius;
}

document.getElementById("useOne").innerHTML += calcCirlceArea(2);
document.getElementById("useTwo").innerHTML += calcCirlceArea(4);
