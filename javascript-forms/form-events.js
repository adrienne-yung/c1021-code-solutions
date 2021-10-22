var userNameInput = document.querySelector('#user-name');
userNameInput.addEventListener('focus', handleFocus);
userNameInput.addEventListener('blur', handleBlur);
userNameInput.addEventListener('input', handleInput);
function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

var userEmailInput = document.querySelector('#user-email');
userEmailInput.addEventListener('blur', handleBlur);
userEmailInput.addEventListener('focus', handleFocus);
userEmailInput.addEventListener('input', handleInput);
function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

var userMessageInput = document.querySelector('#user-message');
userMessageInput.addEventListener('input', handleInput);
userMessageInput.addEventListener('focus', handleFocus);
userMessageInput.addEventListener('blur', handleBlur);
function handleInput(event) {
  console.log('input event was fired');
  console.log('event.target.name', event.target);
  console.log('value of', event.target.name + ':', event.target.value);
}
