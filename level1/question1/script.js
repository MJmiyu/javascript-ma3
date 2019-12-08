//Use RegEx to validate form
function formcheck(e) {
  var isNumber = /^\d{8}$/;
  var isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/gi;
  var phoneNumber = document.getElementById('phone-number').value;
  var email = document.getElementById('email').value;
  var lastName = document.getElementById('last-name').value;
  var firstName = document.getElementById('first-name').value;
  var error = false;

  if (firstName.length > 0) {
    console.log('Great Name');
  } else {
    console.log('You do not have a name?');
    error = true;
  }
  if (lastName.length > 0) {
    console.log('Good Name');
  } else {
    console.log('You do not have a name?');
    error = true;
  }

  if (isNumber.test(phoneNumber)) {
    console.log('The number is approved');
  } else {
    console.log('Not a valid phone number');
    error = true;
  }
  if (isEmail.test(email)) {
    console.log('Correct Email');
  } else {
    console.log('Incorrect Email address input');
    error = true;
  }
  if (error) {
    alert('Something is wrong here, check the console log too see what');
  }
}
