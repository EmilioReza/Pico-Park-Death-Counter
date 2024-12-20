// script.js
const characterContainer = document.getElementById('character-container');
const resetAllButton = document.getElementById('reset-all');
const namePopup = document.getElementById('name-popup');
const nameInput = document.getElementById('name-input');
const saveNameButton = document.getElementById('save-name');
const closePopupButton = document.getElementById('close-popup');

const characters = [
    "Blue.png", "Red.png", "Yellow.png", "Green.png",
    "Pink.png", "Purple.png", "Gray.png", "Brown.png"
];

let currentCharacter = null;

characters.forEach((image, index) => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
    characterDiv.innerHTML = `
        <img src="images/${image}" alt="Character ${index + 1}">
        <div class="name">Player ${index + 1}</div>
        <div class="counter-container">
            <span class="counter">0</span>
            <div class="controls">
                <button class="increment">+</button>
                <button class="decrement">-</button>
                <button class="reset">0</button>
            </div>
        </div>
        <button class="change-name">Change Name</button>
    `;
    characterContainer.appendChild(characterDiv);
});

const changeNameButtons = document.querySelectorAll(".change-name")
changeNameButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        namePopup.style.display = "block";
        nameInput.value = document.querySelectorAll(".name")[index].textContent
        currentCharacter = index
    })
})
saveNameButton.addEventListener("click", () => {
    document.querySelectorAll(".name")[currentCharacter].textContent = nameInput.value
    namePopup.style.display = "none";
})
closePopupButton.addEventListener("click", () => {
    namePopup.style.display = "none";
})

const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const resetButtons = document.querySelectorAll('.reset');
const counters = document.querySelectorAll('.counter');

incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        counters[index].textContent = parseInt(counters[index].textContent) + 1;
    });
});

decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentValue = parseInt(counters[index].textContent);
        if (currentValue > 0) {
            counters[index].textContent = currentValue - 1;
        }
    });
});

resetButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        counters[index].textContent = 0;
    });
});

resetAllButton.addEventListener('click', () => {
    counters.forEach(counter => {
        counter.textContent = 0;
    });
});
