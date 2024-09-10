document.getElementById("ticketNum").innerHTML += "3";
document.getElementById("ticketCost").innerHTML += "14";
document.getElementById("ttCost").innerHTML += 3 * 14;

let pantPrice = 75;
let shirtPrice = 35;
let shoePrice = 60;
let jacketPrice = 70;
let bankAccount = 235.87;

document.getElementById("bank").innerHTML += pantPrice + shirtPrice + shoePrice;
document.getElementById("addJacket").innerHTML +=
  pantPrice + shirtPrice + shoePrice + jacketPrice < bankAccount;

document.getElementById("profPizza").innerHTML += (4 * 8) % 2.5;

let adultPrice = 12;
let childPrice = 6;
let drinkPrice = 1.5;

document.getElementById("Monty").innerHTML +=
  adultPrice * 2 + childPrice + drinkPrice * 3;

document.getElementById("tips").innerHTML +=
  (202.45 + 134.97 + 256.63 + 178.22) / 4;
