function validatePassword() {
  const password = document.getElementById("password");

  console.log(password.value);

  //is there at least 1 number
  for (let i = 0; i < password.value.length; i++) {
    console.log(isNaN(password.value[i]));
  }

  //is there at least 1 lowercase letter

  //is it 8 characters long
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);
