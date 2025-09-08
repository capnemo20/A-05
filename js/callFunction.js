const callData = [];
const coinsForCallId = document.getElementById("coins-for-call");
const callButtons = document.getElementsByClassName("call");
let coins = 100;

for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Sorry, you do not have sufficient coins to make a call");
      return;
    } else {
      let callingNumber = btn.getAttribute("data-calling-number");
      let serviceName = btn.getAttribute("data-service-name");
      const callHistoryContainer = document.getElementById("call-history");
      alert(`Calling ${serviceName} ${callingNumber}`);
      coins = coins - 20;
      coinsForCallId.innerText = coins;

      const data = {
        name: serviceName,
        date: new Date().toLocaleTimeString(),
        number: callingNumber,
      };
      callData.push(data);

      const addHistory = document.createElement("div");
      const date = new Date().toLocaleString();
      addHistory.innerText = `${serviceName} : ${date}
      ${callingNumber}
      `;
      addHistory.classList.add("text-sm", "bg-gray-100", "rounded-md", "p-1");

      callHistoryContainer.appendChild(addHistory);
    }
  });
}
document.getElementById("clear").addEventListener("click", () => {
  const callHistory = document.getElementById("call-history");

  callHistory.innerHTML = "";
});
