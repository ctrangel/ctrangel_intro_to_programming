// ###################################################
// Script: servey_script.js
// for servey page
// ###################################################

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");

const form = document.getElementById("form");
const firstnameErrorElement = document.getElementById(
  "firstname_error_message"
);
const lastnameErrorElement = document.getElementById("lastname_error_message");
const address1ErrorElement = document.getElementById("address1_error_message");
const address2ErrorElement = document.getElementById("address2_error_message");
const cityErrorElement = document.getElementById("city_error_message");
const stateErrorElement = document.getElementById("state_error_message");
const zipErrorElement = document.getElementById("zip_error_message");
const question1ErrorElement = document.getElementById(
  "question1_error_message"
);
const question2ErrorElement = document.getElementById(
  "question2_error_message"
);
const question3ErrorElement = document.getElementById(
  "question3_error_message"
);

form.addEventListener("submit", (e) => {
  if (firstname.value === "" || firstname.value == null) {
    firstnameErrorElement.innerHTML = "a first name is required";
    e.preventDefault();
  } else if (isNaN(firstname.value) === false) {
    firstnameErrorElement.innerHTML = "first name must not contain numbers";
    e.preventDefault();
  }

  if (lastname.value === "" || lastname.value == null) {
    lastnameErrorElement.innerHTML = "a last name is required";
    e.preventDefault();
  } else if (isNaN(lastname.value) === false) {
    lastnameErrorElement.innerHTML = "last name must not contain numbers";
    e.preventDefault();
  }

  if (address1.value === "" || address1.value == null) {
    address1ErrorElement.innerHTML = "an address is required";
    address1.style.backgroundColor = "pink";
    e.preventDefault();
  }

  if (address2.value === "" || address2.value == null) {
    address2ErrorElement.innerHTML = "an address is required";
    address2.style.backgroundColor = "pink";
    e.preventDefault();
  }

  if (city.value === "" || city.value == null) {
    cityErrorElement.innerHTML = "a city is required";
    e.preventDefault();
  } else if (isNaN(city.value) === false) {
    cityErrorElement.innerHTML = "city must be not contain numbers";
    e.preventDefault();
  }

  if (state.value === "" || state.value == null) {
    stateErrorElement.innerHTML = "a state is required";
    e.preventDefault();
  } else if (state.value.length > 0 && state.value.length < 2 || isNaN(state.value) === false) {
    stateErrorElement.innerHTML = "state must be only 2 characters and not contain numbers";
    e.preventDefault();
  } 

  if (zip.value === "" || zip.value == null) {
    zipErrorElement.innerHTML = "a zip code is required";
    e.preventDefault();
  } else if (zip.value.length > 0 && zip.value.length < 5) {
    zipErrorElement.innerHTML = "zip code must be at least 5 characters";
    e.preventDefault();
  } 
  if (isNaN(zip.value)) {
    zipErrorElement.innerHTML = "zip code must be a number";
    e.preventDefault();
  }
  if (zip.value.length > 5) {
    zipErrorElement.innerHTML = "zip code must be less than 6 characters";
    e.preventDefault();
  }
  if (question1.value === "" || question1.value == null) {
    question1ErrorElement.innerHTML = "a response is required";
    question1.style.backgroundColor = "yellow";
    e.preventDefault();
  }
  if (question2.value === "" || question2.value == null) {
    question2ErrorElement.innerHTML = "a response is required";
    question2.style.backgroundColor = "yellow";
    e.preventDefault();
  }
  if (question3.value === "" || question3.value == null) {
    question3ErrorElement.innerHTML = "a response is required";
    question3.style.backgroundColor = "yellow";
    e.preventDefault();
  }
});
