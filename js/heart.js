const heartCountElement = document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("heart-icon");
let heartCount = 0;

for (const icon of heartIcons) {
  icon.addEventListener("click", () => {
    heartCount++;
    heartCountElement.innerText = heartCount;
  });
}
console.log("heart");