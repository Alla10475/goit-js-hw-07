const bodyLink = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanText = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyLink.style.backgroundColor = color;
  spanText.textContent = `- ${color}`;
});
