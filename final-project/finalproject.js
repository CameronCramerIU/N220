//declare variables for username and password
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

//initialize error message variables as empty strings
let userErrorMessage = "";
let passErrorMessage = "";

//validate the username and password
function loginValidation() {
  //retrieve username and password
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;

  //send the username and password through validation functions and return boolean values
  const usernameValid = usernameValidation(usernameValue);
  const passwordValid = passwordValidation(passwordValue);

  //clear the error messages
  document.getElementById("loginErrorUser").innerHTML = "";
  document.getElementById("loginErrorPass").innerHTML = "";

  //if username and/or password is invalid, display the appropiate error message(s)
  if (usernameValid == true && passwordValid == true) {
    loginSuccess();
  } else {
    document.getElementById("loginErrorUser").innerHTML = userErrorMessage;
    document.getElementById("loginErrorPass").innerHTML = passErrorMessage;

    //clear the error message after displaying it
    userErrorMessage = "";
    passErrorMessage = "";
  }
}

//check if username field has been filled, if not, create and error message
function usernameValidation(str) {
  if (str == "") {
    userErrorMessage = "Username field is required.";
    return false;
  } else {
    return true;
  }
}

//check if password has been filled and fits criteria
function passwordValidation(str) {
  if (str == "") {
    passErrorMessage = "Password field is required.";
    return false;
  }

  let criteriaLength = password8Chars(str);
  let criteriaNum = passwordHasNumber(str);
  let criteriaCap = hasUppercase(str);

  if (criteriaLength == true && criteriaNum == true && criteriaCap == true) {
    return true;
  } else {
    return false;
  }
}

function password8Chars(str) {
  //get password length
  const passwordLength = str.length;
  //determine if password is proper length
  if (passwordLength >= 8) {
    return true;
  } else {
    passErrorMessage += "Password must be at least 8 characters long. <br>";
    return false;
  }
}

//check for number in password
function passwordHasNumber(str) {
  let passwordLength = str.length;
  //create an array of the characters in the password
  let charsList = str.split("");

  //check each character to see if any are a number
  for (i = 0; i <= passwordLength + 1; i++) {
    //if character is a number return true
    if (!isNaN(charsList[i])) {
      return true;
      //if last character in the array is not a number, update the error message and return false
    } else if (i == passwordLength + 1 && isNaN(charsList[i])) {
      passErrorMessage += "Password must include a number. <br>";
      return false;
    }
  }
}

//check if password contains capital letter(s)
function hasUppercase(str) {
  //set string to lowercase. if it equals the original string there are no capital letters. Update the error message and return false
  if (str === str.toLowerCase()) {
    passErrorMessage += "Password must contain a capital letter. <br>";
    //otherwise return true
  } else {
    return true;
  }
}

function loginSuccess() {
  document.getElementById("loginHeader").innerHTML = "";
  document.getElementById("usernameLabel").innerHTML = "";
  document.getElementById("usernameSpan").innerHTML = "";
  document.getElementById("passwordLabel").innerHTML = "";
  document.getElementById("passwordSpan").innerHTML = "";
  document.getElementById("logInButtonSpan").innerHTML = "";

  const usernameValue = usernameInput.value;

  document.getElementById(
    "loggedInLabel"
  ).innerHTML = `Welcome ${usernameValue}!`;
  document.getElementById(
    "addQuestSpan"
  ).innerHTML = `<button id="addQuest" onclick="addQuest()">Add Quest</button>`;
  document.getElementById(
    "logOutSpan"
  ).innerHTML = `<button id="logOut" value="Log Out" onclick="logOut()">Log Out</button>`;

  showQuests();
}

function logOut() {
  document.getElementById("loginHeader").innerHTML = "Log In";
  document.getElementById("usernameLabel").innerHTML = "Username";
  document.getElementById(
    "usernameSpan"
  ).innerHTML = `<input type="text" id="username" />`;
  document.getElementById("passwordLabel").innerHTML = "Password";
  document.getElementById(
    "passwordSpan"
  ).innerHTML = `<input type="password" id="password" /> <br/>`;
  document.getElementById(
    "logInButtonSpan"
  ).innerHTML = `<button id="loginButton" value="Log In" onclick="loginValidation()">Log In</button>`;

  document.getElementById("loggedInLabel").innerHTML = "";
  document.getElementById("addQuestSpan").innerHTML = "";
  document.getElementById("logOutSpan").innerHTML = "";

  usernameInput = document.getElementById("username");
  passwordInput = document.getElementById("password");

  usernameInput.value = "";
  passwordInput.value = "";

  questLog.innerHTML = "";
}

let myQuests = [];

function addQuest() {
  let questDesc = prompt("New Quest:");
  let usernameValue = usernameInput.value;

  myQuests.push({
    name: questDesc,
    user: usernameValue,
    reward: "",
    complete: false,
  });

  showQuests();
}

let questLog = document.getElementById("questLog");

function showQuests() {
  let questIndex;
  let usernameValue = usernameInput.value;
  questLog.innerHTML = "";

  myQuests.forEach(function (quest, questIndex) {
    if (quest.user == usernameValue) {
      questLog.innerHTML += `<div style="border: solid; width: 300px; margin: 4px 0; padding: 0px 10px 10px 10px;">
    <h1>${quest.name}</h1>
    <p id="rewardLabel">Please select a reward for when you complete your quest.</p>
    <select onchange="updateQuests()">
      <option value="empty">Reward</option>
      <option value="gold">Gold</option>
      <option value="magicItem">Magic Item</option>
      <option value="friendship">Friendship?</option>
    </select>
    <br><button value="Remove Quest" onclick="removeQuest()" style="background-color: lightcoral">Remove Quest</button>
    <button value="Rename Quest" onclick="renameQuest()">Rename Quest</button
    </div>`;
    }
  });
}

function updateQuests() {
  console.log("when");
}
