const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  const details = {
     name,
     email
  }
  localStorage.setItem('userDetails', JSON.stringify(details));
  console.log(localStorage.getItem('userDetails'));
}