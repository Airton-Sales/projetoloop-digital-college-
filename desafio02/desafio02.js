const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");
const display = document.getElementById("display");

async function str(inputString) {
  display.innerHTML = "";

  for (let i = 0; i < inputString.length; i++) {
    display.innerHTML += inputString[i] + " ";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

function reset() {
  display.innerHTML = "...";
}

countButton.addEventListener("click", function () {
  str("Hello, World!");
});

resetButton.addEventListener("click", function () {
  display.innerHTML = "...";
})
