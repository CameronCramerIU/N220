//Reference Variables
const friendNameInput = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");
const myFriends = [];

//Function for adding frined
function addFriend() {
  //get user input
  const nameValue = friendNameInput.value;

  //add friend to myFriends lost
  myFriends.push({ name: nameValue, color: "black" });

  //clear the input field
  friendNameInput.value = "";
  showFriends();
}

function removeFriend(friendName) {
  //use variable to track index of friend to delete
  let friendIndex;

  //loop through current friends to find the friendName
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].name === friendName) {
      friendIndex = i;
    }
  }

  myFriends.splice(friendIndex, 1);
  showFriends();
}

//loop through list and display it
function showFriends() {
  //clear old list
  friendsListRef.innerHTML = "";

  //loop through friends
  myFriends.forEach(function (friend, friendIndex) {
    //add the name to the friendsList
    friendsListRef.innerHTML += `<li>
  <span style="color: ${friend.color}">${friend.name}</span> <button onclick="removeFriend('${friend.name}')">X</button> 
  <button onclick="moveFriend('${friend.name}', true)">&#8593;</button>
   <button onclick="moveFriend('${friend.name}', false)">&#8595;</button> 
   <input type="color" 
   name="friendTextColor${friendIndex}" 
   id="friendTextColor${friendIndex}"
   onchange="changeFriendTextColor('${friend.name}', event.currentTarget)" />
  </li>`;
  });
}

//clear list function
function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

//fucntion to move friends
function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;

  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i].name === friendName) {
      friendIndex = i;
      //move friend up
      if (isMovingUp) {
        friendNewIndex = friendIndex - 1;
      }
      //friend move down
      else {
        friendNewIndex = friendIndex + 1;
      }
    }
  }

  myFriends.splice(friendIndex, 1);
  myFriends.splice(friendNewIndex, 0, { name: friendName, color: "black" });

  showFriends();
}

function changeFriendTextColor(friendIndex, inputRef) {
  const friendName = myFriends[friendIndex].name;
  myFriends.splice(friendIndex, 1, { name: friendName, color: inputRef.value });

  showFriends();
}
