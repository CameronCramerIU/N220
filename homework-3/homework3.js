function calcIntrest() {
  let principle = parseFloat(document.getElementById("principleInput").value);
  let rate = parseFloat(document.getElementById("rateInput").value / 100);
  let time = parseFloat(document.getElementById("timeInput").value);

  console.log("principle: " + principle);
  console.log("rate: " + rate);
  console.log("time: " + time);

  intrest = principle * (1 + rate * time);

  document.getElementById("result").innerHTML =
    "With a beginning principal of $" +
    principle +
    " and with a growth a rate of " +
    rate * 100 +
    "% for " +
    time +
    " years, your total intrest will be $" +
    (intrest - principle).toFixed(2) +
    " with a grand total of $" +
    intrest.toFixed(2);
}
