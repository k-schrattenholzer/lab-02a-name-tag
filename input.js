const headerEl = document.getElementById ('orig-name');
const buttonEl = document.getElementById ('change-button');
const greenbuttonEl = document.getElementById ('change-green');
const stickerEl = document.getElementById ('sticker');
const pronouonEl = document.getElementById ('orig-pronouns');
const pronounbuttonEl = document.getElementById ('pronoun-button')

buttonEl.addEventListener ('click', () => {
    const inputEl = document.getElementById('word-input');
    console.log(inputEl.value);
    headerEl.textContent = inputEl.value;
});

pronounbuttonEl.addEventListener ('click', () => {
    const inputEl2 = document.getElementById('pronouns');
    console.log(inputEl2.value);
    pronouonEl.textContent = inputEl2.value;
});

greenbuttonEl.addEventListener ('click', () => {
    stickerEl.style.backgroundColor = 'green';
})