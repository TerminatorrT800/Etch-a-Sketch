const container = document.querySelector(".mainContainer");
var containerWidth = container.clientWidth;
var containerHeight = container.clientHeight;
var inputValue = 16;
var isMouseDown = false;

function createGrid(x) {
    if (x <= 0 || isNaN(x) || !Number.isInteger(x)) {
        alert("Please enter a valid positive integer.");
        return;
    }

    var counter = 0;
    container.innerHTML = "";
    while (counter < x * x) {
        const div = document.createElement("div");
        div.setAttribute("class", "gridElement");
        div.setAttribute("style", `width:${containerWidth / x}px; height: ${containerHeight / x}px`);
        container.appendChild(div);
        counter++;
    }
}

const inputBtn = document.querySelector(".buttonGrid");

inputBtn.addEventListener('click', function() {
    let userInput = prompt("What grid size do you want?");
    let inputValue = Number(userInput);

    if (isNaN(inputValue) || inputValue <= 0 || !Number.isInteger(inputValue)) {
        alert("Please enter a valid positive integer.");
    } else {
        createGrid(inputValue);
    }
});

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

container.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        const target = event.target;
        if (target.classList.contains('gridElement')) {
            target.style.background = "green";
        }
    }
});

createGrid(inputValue);
