const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
  const nameInput = textInput.value.trim();
  if (nameInput === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = nameInput;
  }
});

