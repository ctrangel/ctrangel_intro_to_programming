// ###################################################
// Script: script.js
// for sign in page
// ###################################################

const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const usernameErrorElement = document.getElementById("username_error_message");
const passwordErrorElement = document.getElementById("password_error_message");

// function tfGoinOn() {
//   console.log(form);              This was my debugging process, it worked once I put the script at the bottom of the body for some reason.
//   console.log(username.value);    A very perplexing problem.
//   console.log(password.value);
// }

form.addEventListener("submit", (e) => {
  if (username.value === "" || username.value == null) {
    usernameErrorElement.innerHTML = "a username is required";
    e.preventDefault();
  }
  if (username.value.length > 0 && username.value.length < 8) {
    usernameErrorElement.innerHTML = "username must be at least 8 characters";
    e.preventDefault();
  }

  if (password.value === "" || password.value == null) {
    passwordErrorElement.innerHTML = "a password is required";
    e.preventDefault();
  }
  if (password.value.length > 0 && password.value.length < 12) {
    passwordErrorElement.innerHTML = "password must be at least 12 characters";
    e.preventDefault();
  }

 /* I had a window.location.href here to take user to the thank you page if everything was good but it would not work so I ended up 
    just putting an action on the form element so that way it took the user to the page on submission, and logically the form would not
    submit if one of these condiditions were not met. This took me way while to figure out as well. */
});
