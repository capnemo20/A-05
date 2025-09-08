// <<<<<<<<<<<<<------------------------->>>>>>>>>>>>>>
// heart icon adding function
const getHeartCountId = document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("heart-icon");
let heartCount = 0;

for (const icon of heartIcons) {
  icon.addEventListener("click", () => {
    heartCount++;
    getHeartCountId.innerText = heartCount;
  });
}

// <<<<<<<<<<<<<------------------------->>>>>>>>>>>>>>

// Call functionality
const coinsForCallId = document.getElementById("coins-for-call");
const callButtons = document.getElementsByClassName("call");
let coins = 100;

for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Sorry, you do not have sufficient coins to make a call");
    } else {
      coins = coins - 20;
      coinsForCallId.innerText = coins;
    }
  });
}
