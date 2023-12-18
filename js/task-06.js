const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';

  let step = 30;

  for (let i = 1; i <= amount; i++) {
    let box = document.createElement('div');

    box.style.width = `${step}px`;
    box.style.height = `${step}px`;
    step += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

createBtn.addEventListener('click', () => {
  const inputNum = input.value;
  if (inputNum >= 1 && inputNum <= 100) {
    createBoxes(inputNum);
  } else {
    alert('Введіть число від 1 до 100');
  }
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
