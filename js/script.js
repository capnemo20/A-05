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
        let callingNumber = btn.getAttribute("data-calling-number");
        let serviceName = btn.getAttribute("data-service-name")
        alert(`Calling ${serviceName} ${callingNumber}`)
      coins = coins - 20;
      coinsForCallId.innerText = coins;
    }
  });
}
// <<<<<<<<<<<<<------------------------->>>>>>>>>>>>>>

// copy button count increase and copy the number
const copyIncreaseId = document.getElementById("copy-increase");
const copyButtons = document.getElementsByClassName("copyBtn");
let copyCount = 2;

for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", function (num) {
    const emergencyNumber = copyButton.getAttribute("data-emergency-number");
    alert(`emergency number  has been copied: ${emergencyNumber}`);
    copyCount++;
    copyIncreaseId.innerText = copyCount;
    navigator.clipboard.writeText(emergencyNumber);
  });
}
// <<<<<<<<<<<<<------------------------->>>>>>>>>>>>>>