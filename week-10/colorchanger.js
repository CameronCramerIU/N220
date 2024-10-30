/**
 * @type {{currentColor: String, lastColor: String}[]}
 * @description this is a list of the colors that the user added
 */

const userColors = [];

/**
 * @description gets the color from user input to add to the user colors list
 */

function addNewColorItem() {
  const newColorRef = document.getElementById("newColorItem");
  const newColorValue = newColorRef.value;

  userColors.push({ currentColor: newColorValue });
  newColorRef.value = "#000000";

  showUserColors();
}

function showUserColors() {
  const colorSquares = document.getElementById("color-squares");
  colorSquares.innerHTML = "";

  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[i];
    colorSquares.innerHTML += `<div style="height: 200px; width: 200px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
    <input 
        type="color" 
        id="user-color-${i}" 
        name="user=color-${i}" 
        hidden
        value="${userColor.currentColor}"
        onchange="changeUserColor(${i})"
        />
    </div>
    <button onclick="changeUserColor()">Update Color</button>
    <button onclick="revertUserColor()">Revert Color</button>
    `;
  }
}

function changeUserColor(userColorIndex) {
  const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

  const lastColor = userColors[userColorIndex].currentColor;
  const newUserColor = {
    currentColor: userColorRef.value,
    lastColor: lastColor,
  };
  userColors.splice(userColorIndex, 1, newUserColor);

  showUserColors();
}

function openColorChanger(userColorIndex) {
  document.getElementById(`user-color-${userColorIndex}`).click();
}

function revertUserColor(userColorIndex) {
  const lastColor = userColors[userColorIndex].lastColor;
  if (lastColor) {
  }
}
