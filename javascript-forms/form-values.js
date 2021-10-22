var $contactForm = document.querySelector('#contact-form');
function handleSubmit(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;
  var messageInfo = {
    name: name,
    email: email,
    message: message
  };
  console.log('messageInfo:', messageInfo);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
