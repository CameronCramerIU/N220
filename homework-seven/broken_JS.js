let PlayerChoie = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];

  document.getElementById("resultDecision").innerHTML =
    "Result Decision: The computer chose: " + CompDecision;
  if (numb === 3) {
    innerscore -= 0.5;
  }

  document.getElementById("Score").innerHTML = `Score: ${innerscore}`;

  if (numb === 0) {
    if (CompDecision === "Paper") {
      innerscore -= 1;
    } else if (CompDecision === "Scissors") {
      innerscore += 1;
    } else {
      innerscore += 0;
    }
  }

  document.getElementById("Score").innerHTML = `Score: ${innerscore}`;

  if (numb === 1) {
    if (CompDecision === "Rock") {
      innerscore += 1;
    } else if (CompDecision === "Scissors") {
      innerscore -= 1;
    } else {
      innerscore += 0;
    }
  }

  document.getElementById("Score").innerHTML = `Score: ${innerscore}`;

  if (numb === 2) {
    if (CompDecision === "Rock") {
      innerscore -= 1;
    } else if (CompDecision === "Paper") {
      innerscore += 1;
    } else {
      innerscore += 0;
    }

    document.getElementById("Score").innerHTML = `Score: ${innerscore}`;
  }
}