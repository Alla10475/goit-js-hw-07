const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  } else {
    const data = {
      email: email,
      password: password,
    };
    registerForm.reset();
    console.log(data);
  }
}
