const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");
const display = document.getElementById("display");


async function contar() {
  display.innerHTML = "";
  for (let i = 2; i <= 20; i += 2) {
    display.innerHTML += i + " ";
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

async function reset() {
  display.innerHTML = "...";
}
countButton.addEventListener("click", contar);
resetButton.addEventListener("click", reset);
