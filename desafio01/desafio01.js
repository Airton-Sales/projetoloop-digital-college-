const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");
const display = document.getElementById("display");


async function contar () {
    display.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        display.innerHTML += i + " ";
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
};

function reset () {
    display.innerHTML = "...";
}

countButton.addEventListener("click", contar);
resetButton.addEventListener("click", reset)