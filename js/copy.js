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