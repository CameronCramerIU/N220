const theBoxRef = document.getElementById("theBox");

theBoxRef.style.border = "3px solid black";
theBoxRef.style.minHeight = "300px";
theBoxRef.style.display = "grid";
theBoxRef.style.gridTemplateColumns = "1fr 1fr 1fr";

function addToBox() {
  const newThing = prompt("Thing to Add: ");

  const newDiv = document.createElement("div");
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.style.backgroundColor = "lightgrey";
  newDiv.innerHTML = newThing;

  theBoxRef.appendChild(newDiv);
}
