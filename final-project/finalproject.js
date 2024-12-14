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

//if username and password meet criteria, clear the page and display quest log page
function loginSuccess() {
  //clear log in page
  document.getElementById("loginHeader").innerHTML = "";
  document.getElementById("usernameLabel").innerHTML = "";
  document.getElementById("usernameSpan").innerHTML = "";
  document.getElementById("passwordLabel").innerHTML = "";
  document.getElementById("passwordSpan").innerHTML = "";
  document.getElementById("logInButtonSpan").innerHTML = "";

  const usernameValue = usernameInput.value; //retrieve the username

  //header with username
  document.getElementById(
    "loggedInLabel"
  ).innerHTML = `Welcome ${usernameValue}!`;

  //add quest button
  document.getElementById(
    "addQuestSpan"
  ).innerHTML = `<button id="addQuest" onclick="addQuest()">Add Quest</button>`;

  //log out button
  document.getElementById(
    "logOutSpan"
  ).innerHTML = `<button id="logOut" value="Log Out" onclick="logOut()">Log Out</button>`;

  //run show quests to show any quests tied to the username
  showQuests();
}

//when logging out, clear the screen and display the log in screen
function logOut() {
  //display the log in screen
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

  //clear the quest log screen
  document.getElementById("loggedInLabel").innerHTML = "";
  document.getElementById("addQuestSpan").innerHTML = "";
  document.getElementById("logOutSpan").innerHTML = "";

  //re-initialize the username and password input so a new user can sign in
  //if these are not reinitialized, the username and password will be what the first user typed in
  // regardless of what the new user typed in
  usernameInput = document.getElementById("username");
  passwordInput = document.getElementById("password");

  //set stored username and password to empty strings
  usernameInput.value = "";
  passwordInput.value = "";

  //clear the list
  questLog.innerHTML = "";
}

//create an array to store objects
let myQuests = [];
//create an increment to give each new object an ID property
let questID = 0;

//add a quest to the list
function addQuest() {
  //prompt the user to name the quest
  let questDesc = prompt("New Quest:");
  //retrieve username
  let usernameValue = usernameInput.value;

  //create an object to store the properties of the quest
  //.push adds the quest to the MyQuests array
  myQuests.push({
    name: questDesc, //user prompt input
    id: questID, //incremented ID
    user: usernameValue, //tie the quest to the user
    reward: "", //default empty reward, the user will select this property later
    complete: false, //boolean value to track if quest has been marked complete
  });

  //increment quest id
  questID++;

  //display the updated array
  showQuests();
}

//element where quests divs are displayed
let questLog = document.getElementById("questLog");
//default reward label, this will be changed by user input
let rewardLabel = "";

//show the new or updated list of requests
function showQuests() {
  //retrieve the username to display only the current user's quests
  let usernameValue = usernameInput.value;

  //clear the list
  questLog.innerHTML = "";

  //display each quest
  myQuests.forEach(function (quest, questIndex) {
    //display the appropriate reward label depending on chosen reward and completion status
    if (quest.reward == "gold") {
      rewardLabel = "Reward: Gold";
    } else if (quest.reward == "magicItem") {
      rewardLabel = "Reward: Magic Item";
    } else if (quest.reward == "friendship") {
      rewardLabel = "Reward: ...friendship?";
    } else if (quest.reward == "goldComplete") {
      rewardLabel = "Quest Complete: Have some gold!";
    } else if (quest.reward == "magicItemComplete") {
      rewardLabel = "Quest Complete: Enjoy your magic item!";
    } else if (quest.reward == "friendshipComplete") {
      rewardLabel =
        "Quest Complete: The real tresure was the friends we made along the way!";
    } else {
      rewardLabel = "Please select an reward for when you complete your quest.";
    }

    //only show quests tied to the current user
    //some ids are dynamic and functions use quest id as an argument so that only the chosen quest gets affected by user edits
    if (quest.user == usernameValue) {
      questLog.innerHTML += `<div id="questLog${quest.id}" style="border: solid; width: 350px; margin: 4px 0; padding: 0px 10px 10px 10px;">
    <h1 id="questName${quest.id}">${quest.name}</h1>
    <p id="rewardLabel">${rewardLabel}</p>
    <select id="rewardChoice${quest.id}" onchange="updateReward(${quest.id})">
      <option value="">Reward</option>
      <option value="gold">Gold</option>
      <option value="magicItem">Magic Item</option>
      <option value="friendship">Friendship?</option>
    </select><br>
    <br><button value="Remove Quest" onclick="removeQuest(${quest.id})" style="background-color: lightcoral">Remove Quest</button>
    <button value="Rename Quest" onclick="renameQuest(${quest.id})" style="background-color: skyblue">Rename Quest</button>
    <button id="completeButton${quest.id}" value ="Complete Quest" onclick="completeQuest(${quest.id})" style="background-color: mediumspringgreen">Complete Quest</button>  
    </div>`;
    }
  });
}

//update the reward label when a reward is chosen from the dropdown menu
function updateReward(questID) {
  let questIndex; //create a variable assign the index to

  //loop through the objects until the id matches. This ensures only the selected object is affected
  for (let i = 0; i < myQuests.length; i++) {
    if (myQuests[i].id === questID) {
      questIndex = i;
    }
  }

  //update the reward property to match the reward selected by the dropdown
  myQuests[questIndex].reward = document.getElementById(
    `rewardChoice${questIndex}`
  ).value;
  //update the list to display the new reward label
  showQuests();
}

//allow the user to rename quests
function renameQuest(questID) {
  let questIndex; //create a variable assign the index to

  //loop through the objects until the id matches. This ensures only the selected object is affected
  for (let i = 0; i < myQuests.length; i++) {
    if (myQuests[i].id === questID) {
      questIndex = i;
    }
  }

  //prompt the user to input new text
  let renamedQuest = prompt("Type new quest name here:");

  //if the user selects "cancel" on the prompt, do not change the text
  if (renamedQuest !== null) {
    //otherwise, replace the name property with the new text
    myQuests[questIndex].name = renamedQuest;
  }

  //update the list to display new name
  showQuests();
}

//allow user to remove a quest
function removeQuest(questID) {
  let questIndex; //create a variable assign the index to

  //loop through the objects until the id matches. This ensures only the selected object is affected
  for (let i = 0; i < myQuests.length; i++) {
    if (myQuests[i].id === questID) {
      questIndex = i;
    }
  }

  //make sure the user did not click remove by mistake
  let removeConfirmation = confirm(
    "Are you sure you want to remove this quest? You won't be able to undo this action."
  );

  //if they confirm, erase the selected quest from the array
  if (removeConfirmation === true) {
    myQuests.splice(questIndex, 1);
  }

  //update the list to not display the removed quest
  showQuests();
}

//allow user to mark a quest complete
function completeQuest(questID) {
  let questIndex; //create a variable assign the index to

  //loop through the objects until the id matches. This ensures only the selected object is affected
  for (let i = 0; i < myQuests.length; i++) {
    if (myQuests[i].id === questID) {
      questIndex = i;
    }
  }

  //Make sure a reward has been chosen before marking complete
  if (myQuests[questIndex].reward == "") {
    alert("Please select a reward before completing the quest.");
  } else {
    //if the reward property is false AND a reward has been chosen,
    //   change the reward property to complete
    //this updates the label which is how to distiguish between complete and incomplete quests
    if (myQuests[questIndex].complete == false) {
      if (myQuests[questIndex].reward == "gold") {
        myQuests[questIndex].reward = "goldComplete";
      } else if (myQuests[questIndex].reward == "magicItem") {
        myQuests[questIndex].reward = "magicItemComplete";
      } else if (myQuests[questIndex].reward == "friendship") {
        myQuests[questIndex].reward = "friendshipComplete";
      }

      //update the complete property to true
      myQuests[questIndex].complete = true;
    } else {
      //if the complete button is clicked when complete property is set to true, revert to default
      if (myQuests[questIndex].reward == "goldComplete") {
        myQuests[questIndex].reward = "gold";
      } else if (myQuests[questIndex].reward == "magicItemComplete") {
        myQuests[questIndex].reward = "magicItem";
      } else if (myQuests[questIndex].reward == "friendshipComplete") {
        myQuests[questIndex].reward = "friendship";
      }

      //update the complete property back to false
      myQuests[questIndex].complete = false;
    }
  }

  //display updated list
  showQuests();
}
