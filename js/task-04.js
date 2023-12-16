const registerForm = document.querySelector('.login-form');
const btn = document.querySelector('.submit');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  } else {
    const data = {
      email: email.trim(),
      password: password.trim(),
    };
      registerForm.reset();
      console.log(data);
  }
}


