$(document).ready(function () {
  // Checks if the email is valid utilizing regular expressions
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Checks if the phone number will be treated as digits only and the length is 10
  function isValidNumber(number) {
    const digits = number.replace(/\D/g, '');
    return digits.length === 10;
  }

  // Show error message with my intended styling
  function displayError(input, message) {
    const errorDiv = input.next('.error-message');
    errorDiv.text(message).addClass('error-display');
    input.addClass('error-field');
  }

  // Hide the error message and remove the styling
  function hideError(input) {
    const errorDiv = input.next('.error-message');
    errorDiv.text('').removeClass('error-display');
    input.removeClass('error-field');
  }

  function isValid() {
    const nameCheck = $('#name');
    const emailCheck = $('#Email');
    const phoneCheck = $('#phone');
    const messageCheck = $('#message');

    let validForm = true;

    //Checks if the name input is empty
    if (nameCheck.val().trim() === "") {
      displayError(nameCheck, "Please enter your name!");
      validForm = false;
    }

    //Checks if the email input is empty and if it is not valid
    if (emailCheck.val().trim() === "") {
      displayError(emailCheck, "Please enter your email!");
      validForm = false;
    } else if (!isValidEmail(emailCheck.val())) {
      displayError(emailCheck, "Please enter a valid email!");
      validForm = false;
    }

    //Checks if the phone number is empty and if it is not valid
    if (phoneCheck.val().trim() === "") {
      displayError(phoneCheck, "Please enter your phone number!");
      validForm = false;
    } else if (!isValidNumber(phoneCheck.val().trim())) {
      displayError(phoneCheck, "Please enter a valid North American phone number!");
      validForm = false;
    }

    //Checks if the message input is empty
    if (messageCheck.val().trim() === "") {
      displayError(messageCheck, "Please enter your message!");
      validForm = false;
    }

    //Display the alert when all the other input fields are satisfied
    if (validForm) {
      alert("Thank you for filling the form!");
    }

    return validForm;
  }

  // Form will be validated once the submit button is clicked
  $('#submit-button').click(function () {
    return isValid();
  });

  // Remove the error message and styling when the input is focused
  $('.form-group input, .form-group textarea').focus(function () {
    hideError($(this));
  });
});

/*
Resources:
- https://stackoverflow.com/questions/29716543/form-validation-using-javascript
- https://stackoverflow.com/questions/9309278/javascript-regex-replace-all-characters-other-than-numbers
- https://www.w3resource.com/jquery-exercises/part1/index.php
- https://www.geeksforgeeks.org/form-validation-using-jquery/
- https://webdesign.tutsplus.com/easy-form-validation-with-jquery--cms-33096t
- https://www.youtube.com/watch?v=uQfKJjqToTo
- https://www.freecodecamp.org/news/javascript-document-ready-jquery-example/
 */
