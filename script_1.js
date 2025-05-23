const input = document.getElementById("calcInput");
const buttons = document.querySelectorAll(".buttons button");
const historyBlock = document.getElementById("historyBlock");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                const result = eval(input.value);
                addToHistory(input.value + " = " + result);
                input.value = result;
            } catch (e) {
                input.value = "Ошибка";
            }
        } else if (value === "C") {
            input.value = "";
        } else {
            input.value += value;
        }
    });
});

function addToHistory(entry) {
    historyBlock.innerHTML += `<div>${entry}</div>`;
    historyBlock.scrollTop = historyBlock.scrollHeight;
}
