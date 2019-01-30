var x = 0;
var cps = 0;
var priceof1 = 10;
var priceof2 = 20;

window.onload = function() {
  var mb = document.getElementById("currencyButton");
  var currencyBox = document.getElementById("currencyBox");
  var secondUpgradeButton = document.getElementById("secondUpgrade");
  let elem = Array.from(document.querySelectorAll("#firstUpgrade"))[0];
  let secondUpgradeText = Array.from(
    document.querySelectorAll("#secondUpgrade")
  )[0];
  var w0w = document.getElementById("firstUpgrade");
  var cpsBox = document.getElementById("cpsBox");

  mb.addEventListener("click", currencyBoxSet);
  w0w.addEventListener("click", firstUpgradeFunction);
  secondUpgradeButton.addEventListener("click", secondUpgrade);
  cpsBox.innerHTML = "0";
  currencyBox.innerHTML = "0";
  setInterval(addcpsCurrency, 1000);

  elem.innerText = `Click here for the first upgrade! The current price
 is ${(+priceof1).toFixed(0)} and gives you 1 click per second.`;

  secondUpgradeText.innerText = `Click here for the second upgrade! The current price
 is ${(+priceof2).toFixed(0)} and gives you 3 click per second.`;
};
function currencyBoxSet() {
  x += 1;
  currencyBox.innerHTML = x;
  // alert("You currently have "+x+" currency!")
}
function firstUpgradeFunction() {
  if (x >= 10) {
    cps += 1;
    cpsBox.innerHTML = cps;
    x -= 10;
    priceof1 = priceof1 + 0.3 * priceof1;
    currencyBox.innerHTML = x;
    let elem = Array.from(document.querySelectorAll("#firstUpgrade"))[0];
    elem.innerText = `Click here for the first upgrade! The current price is
  ${(+priceof1).toFixed(0)} and will give you 1 click per second.`;
  } else {
    alert("You do not have enough currency!");
  }
}
function secondUpgrade() {
  if (x >= priceof2) {
    cps += 3;
    cpsBox.innerHTML = cps;
    x -= priceof1;
    currencyBox.innerHTML = x;
    priceof2 = priceof2 + 0.3 * priceof2;
    let elem = Array.from(document.querySelectorAll("#secondUpgrade"))[0];
    elem.innerText = `Click here for the second upgrade! The current price is
  ${(+priceof2).toFixed(0)} and gives you 3 clicks per second.`;
  } else {
    alert("You do not have enough currency!");
  }
}
function addcpsCurrency() {
  x += cps;
  currencyBox.innerHTML = x;
}
