const h1 = document.querySelector("h1");
const incBtn = document.querySelector("button:nth-child(2)");
const decBtn = document.querySelector("button:nth-child(3)");
const resetBtn = document.querySelector("button:nth-child(4)");

let count = 0


const loadAllEvents = () => {
    incBtn.addEventListener("click", handleIncrement);
    decBtn.addEventListener("click", handleDecrement);
    resetBtn.addEventListener("click", handleReset);

}
loadAllEvents();

function updateDisplay(){
    h1.textContent = 0;
}

function handleIncrement(){
    count++
    updateDisplay();
}

function handleDecrement(){
    count--;
    updateDisplay();
}

function handleReset(){
    count = 0;
    updateDisplay();
}