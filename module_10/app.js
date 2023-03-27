// Grocery Store APP

function Account(
  firstName,
  lastName,
  address1,
  address2,
  city,
  state,
  zip,
  username,
  password
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.username = username;
  this.password = password;
}

let errorLog = []; // The surmountable history of user errors will be scribed in these scrolls, hopefully UPDATE: it does work

function displayErrorLog() {
  console.log(errorLog);
}

function createAccount() {
  try {
    console.log("Please enter your information to create an account.");

    let firstName = prompt("First Name: ");
    if (firstName == "") {
      alert("Please enter a first name.");
      console.log("Please enter a first name.");
      throw new Error("Invalid first name");
    }
    if (isNaN(firstName) == false) {
      alert("No numbers por favor.");
      console.log("No numbers por favor.");
      throw new Error("First name cannot contain numbers");
    }

    let lastName = prompt("Last Name: ");
    if (lastName == "") {
      alert("Please enter a last name.");
      console.log("Please enter a last name.");
      throw new Error("Invalid last name");
    }
    if (isNaN(lastName) == false) {
      alert("No numbers por favor.");
      console.log("No numbers por favor.");
      throw new Error("Last name cannot contain numbers");
    }

    let address1 = prompt("Address 1: ");
    if (address1 == "") {
      alert("Please enter an address.");
      console.log("Please enter an address.");
      throw new Error("Invalid address");
    }
    let address2 = prompt("Address 2: (leave blank if none)");
    let city = prompt("City: ");
    let state = prompt("State: ");
    let zip = prompt("Zip: ");
    if (zip.length != 5) {
      alert("Please enter a valid zip code.");
      console.log("Please enter a valid zip code.");
      throw new Error("Invalid zip code");
    }
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    let newUser = new Account(
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      username,
      password
    );
    console.log("Account created!");

    console.log("please verify all information is correct before proceeding");

    console.log(displayAccount(newUser));
    alert("Please review your information: " + "\n" + displayAccount(newUser));

    let choice = prompt(
      "Is this information correct? \r 1. Looks good to me \r 2. Sorry I must've made a mistake, groceries make me nervous"
    );
    if (choice == 1) {
      console.log("Thank you for creating an account with us!");
      alert("Thank you for creating an account with us!");
      console.log(saveUser(newUser));
      login();
    } else if (choice == 2) {
      console.log("Please re-enter your information.");
      createAccount();
    } else {
      console.log("Invalid choice.");
      return false;
    }
  } catch (error) {
    console.error(error);
    errorLog.push(error);
    createAccount();
  }
}

//display account info
function displayAccount(obj) {
  let output = [];
  for (let key in obj) {
    output.push(`${key}: ${obj[key]} \n`);
  }
  return output;
}
//save user info
function saveUser(obj) {
  let user = JSON.stringify(obj);

  localStorage.setItem("user", user);
  console.log(user);
}

function login() {
  try {
    console.log("Please enter your username and password to login.");
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    let user = JSON.parse(localStorage.getItem("user")); // This took me way too long to realize I had to actually get the item from local storage to use it
    if (username == user.username && password == user.password) {
      console.log("Login successful! Welcome " + username);
      alert("Login successful! Welcome " + username);
      pickUpOrDelivery();
    } else {
      console.log("Login failed.");
      alert("Login failed.");
      console.log("Are you sure you remember your username and password?");
      alert("Are you sure you remember your username and password?");
      let choice = prompt(
        "\r 1. Yes I am most certain of it \r 2. Perhaps not"
      );
      if (choice == 1) {
        console.log("Please try again.");
        alert("Please try again.");
        login();
      } else if (choice == 2) {
        console.log("Would you like to sign up?");
        alert("Would you like to sign up?");
        let choice = prompt(
          "\r 1. Hell ya I ***** love groceries \r 2. No I do not want to experience the joy of grocery shopping"
        );
        if (choice == 1) {
          createAccount();
        } else if (choice == 2) {
          console.log("So be it.");
          alert("So be it.");
          return false;
        }
      }
    }
  } catch (error) {
    console.error(error);
    errorLog.push(error);
    login();
  }
}

function pickUpOrDelivery() {
  console.log("Please select an option: \r 1. Pick up \r 2. Delivery");
  let choice = prompt("Please select an option: \r 1. Pick up \r 2. Delivery");
  if (choice == 1) {
    console.log("You have selected pick up.");
    alert("You have selected pick up.");
    pickUp(); //launch pick up function
  } else if (choice == 2) {
    console.log("You have selected delivery.");
    alert("You have selected delivery.");
    delivery(); //launch delivery function
  } else {
    console.log("Invalid choice.");
    return false;
  }
}

//Gotta remember to declare objects outside of the functions for scope purposes
const listOfItems = {
  1: "Lactaid 2% Reduced Fat Milk, 64 fl oz (Pack of 1)",
  2: "Eggs",
  3: "Bread",
  4: "365 Cannellini Beans",
  5: "Butter",
  6: "Cereal",
  7: "Annie's Bunny Fruit Snacks",
  8: "Soda",
  9: "Cookies",
  10: "Ice Cream",
  11: "365 Everyday Value Organic Brown Rice, 32 oz",
  12: "365 Petite Green Peas",
};
const price = {
  1: 5.99,
  2: 3.99,
  3: 2.99,
  4: 1.99,
  5: 2.99,
  6: 3.99,
  7: 2.69,
  8: 1.99,
  9: 3.99,
  10: 2.99,
  11: 6.99,
  12: 4.99,
};

let cart = [];
let total = 0;

function pickUp() {
  console.log("Please select an item from the list below.");

  let display = [];
  for (let key in listOfItems) {
    if (listOfItems.hasOwnProperty(key) && price.hasOwnProperty(key)) {
      // console.log(key + " " + listOfItems[key] + " " + price[key]);
      // alert(key + " " + listOfItems[key] + " " + price[key]);
      display.push(key + " | " + listOfItems[key] + " | " + price[key] + "\n");
    }
  }
  let choice = prompt(
    "Please select an item from the list below. \n" + display
  );
  // console.log(display);
  // alert(display);

  // let choice = prompt("Please select your items from the list above.");
  if (choice == 1) {
    theChosenPickUp(1);
  }
  if (choice == 2) {
    theChosenPickUp(2);
  }
  if (choice == 3) {
    theChosenPickUp(3);
  }
  if (choice == 4) {
    theChosenPickUp(4);
  }
  if (choice == 5) {
    theChosenPickUp(5);
  }
  if (choice == 6) {
    theChosenPickUp(6);
  }
  if (choice == 7) {
    theChosenPickUp(7);
  }
  if (choice == 8) {
    theChosenPickUp(8);
  }
  if (choice == 9) {
    theChosenPickUp(9);
  }
  if (choice == 10) {
    theChosenPickUp(10);
  }
  if (choice == 11) {
    theChosenPickUp(11);
  }
  if (choice == 12) {
    theChosenPickUp(12);
  }
}
function delivery() {
  console.log("Please select an item from the list below.");

  let display = [];
  for (let key in listOfItems) {
    if (listOfItems.hasOwnProperty(key) && price.hasOwnProperty(key)) {
      // console.log(key + " " + listOfItems[key] + " " + price[key]);
      // alert(key + " " + listOfItems[key] + " " + price[key]);
      display.push(key + " | " + listOfItems[key] + " | " + price[key] + "\n");
    }
  }
  let choice = prompt(
    "Please select an item from the list below. \n" + display
  );
  // console.log(display);
  // alert(display);

  // let choice = prompt("Please select your items from the list above.");
  if (choice == 1) {
    alert("sorry this item is only available for pick up");
    delivery();
  }
  if (choice == 2) {
    alert("sorry this item is only available for pick up");
    delivery();
  }
  if (choice == 3) {
    theChosenDelivery(3);
  }
  if (choice == 4) {
    theChosenDelivery(4);
  }
  if (choice == 5) {
    theChosenDelivery(5);
  }
  if (choice == 6) {
    theChosenDelivery(6);
  }
  if (choice == 7) {
    theChosenDelivery(7);
  }
  if (choice == 8) {
    theChosenDelivery(8);
  }
  if (choice == 9) {
    theChosenDelivery(9);
  }
  if (choice == 10) {
    alert("sorry this item is only available for pick up");
    delivery();
  }
  if (choice == 11) {
    theChosenDelivery(11);
  }
  if (choice == 12) {
    alert("sorry this item is only available for pick up");
    delivery();
  }
}

function theChosenPickUp(item) {
  cart.push(listOfItems[item]);
  total += price[item];
  console.log("You have added " + listOfItems[item] + " to your cart.");
  alert("You have added " + listOfItems[item] + " to your cart.");
  console.log("Your cart total is $" + total);
  alert("Your cart total is $" + total);
  let choice = prompt(
    "Do you fancy another item my liege? \r 1. Indubitably \r 2. That is all for now, my good sir"
  );
  if (choice == 1) {
    pickUp();
  } else if (choice == 2) {
    console.log("Your cart total is $" + total);
    alert("Your cart total is $" + total);
    console.log("Thank you for shopping with us!");
    alert("Thank you for grocering with us.");
    console.log("is there anything else we can do for you?");
    alert("is there anything else we can do for you?");
    let choice = prompt(
      "\r 1. Yes, I would like to tip you \r 2. No, I'll be on my way (consequences will follow)"
    );
    if (choice == 1) {
      console.log("Thank you for your generosity! Have a wonderful day!");
      alert("Thank you for your generosity! Have a wonderful day!");
      checkOutOption(1);
    } else if (choice == 2) {
      console.log("I hope you enjoy your food sir.");
      alert("I hope you enjoy your food sir.");
      checkOutOption(1);
    }
  } else {
    console.log("Invalid choice.");
    return false;
  }
}

function theChosenDelivery(item) {
  cart.push(listOfItems[item]);
  total += price[item];
  console.log("You have added " + listOfItems[item] + " to your cart.");
  alert("You have added " + listOfItems[item] + " to your cart.");
  console.log("Your cart total is $" + total);
  alert("Your cart total is $" + total);
  let choice = prompt(
    "Do you fancy another item my liege? \r 1. Indubitably \r 2. That is all for now, my good sir"
  );
  if (choice == 1) {
    delivery();
  } else if (choice == 2) {
    console.log("Your cart total is $" + total);
    alert("Your cart total is $" + total);
    console.log("Thank you for shopping with us!");
    alert("Thank you for grocering with us.");
    console.log("is there anything else we can do for you?");
    alert("is there anything else we can do for you?");
    let choice = prompt(
      "\r 1. Yes, I would like to tip you \r 2. No, I'll be on my way (consequences will follow)"
    );
    if (choice == 1) {
      console.log("Thank you for your generosity! Have a wonderful day!");
      alert("Thank you for your generosity! Have a wonderful day!");
      checkOutOption(2);
    } else if (choice == 2) {
      console.log("I hope you enjoy your food sir.");
      alert("I hope you enjoy your food sir.");
      checkOutOption(2);
    }
  } else {
    console.log("Invalid choice.");
    return false;
  }
}
function checkOutOption(option) {
  if (option == 1) {
    checkOut(pickUp);
  } else if (option == 2) {
    checkOut(delivery);
  }
}
function checkOut(choice) {
  let option = "";
  if (choice == pickUp) {
    option = "pick up";
  } else if (choice == delivery) {
    option = "delivery";
  }
  let actualTotal = total * 1.07 + 9.99;
  console.log(
    "Confirmed for " +
      option +
      "\n" +
      "Your cart total is $" +
      actualTotal.toFixed(2) +
      "\n" +
      "Your cart contains: " +
      cart +
      "\n" +
      "*after taxes and delivery fee*"
  );
  alert(
    "Confirmed for " +
      option +
      "\n" +
      "Your cart total is $" +
      actualTotal.toFixed(2) +
      "\n" +
      "Your cart contains: " +
      cart +
      "\n" +
      "*after taxes and delivery fee*"
  );
  let payment = prompt(
    "How would you like to pay? \r 1. Venmo \r 2. Credit Card \r 3. Android/Apple Pay"
  );
  if (payment == 1) {
    let venmoAlert = alert(
      "Payment info obtained, please hit ok to process payment"
    );
    setTimeout(function () {
      window.clearInterval(venmoAlert);
      console.log(
        "Payment successful!, no need to worry we magically obtained your venmo info for you, thanks for grocering with us"
      );
      alert(
        "Payment successful!, no need to worry we magically obtained your venmo info for you, thanks for grocering with us"
      );
    }, 2000);
  } else if (payment == 2) {
    let creditCardAlert = alert(
      "Payment info obtained, please hit ok to process payment"
    );
    setTimeout(function () {
      window.clearInterval(creditCardAlert);
      console.log(
        "Payment successful!, no need to worry we magically obtained your credit card info for you, we are in your walls, thanks for grocering with us"
      );
      alert(
        "Payment successful!, no need to worry we magically obtained your credit card info for you, we are in your walls, thanks for grocering with us"
      );
    }, 2000);
  } else if (payment == 3) {
    let applePayAlert = alert(
      "Payment info obtained, please hit ok to process payment"
    );
    setTimeout(function () {
      window.clearInterval(applePayAlert);
      console.log(
        "Payment successful!, no need to worry we magically obtained your apple pay info for you, thanks for grocering with us"
      );
      alert(
        "Payment successful!, no need to worry we magically obtained your apple pay info for you, thanks for grocering with us"
      );
    }, 2000);
  } else {
    console.log("Invalid choice.");
    alert("Invalid choice.");
    return false;
  }
}

function main() {
  console.log("Welcome to the Grocery Store App!");
  let choice = prompt(
    "Please select an option: \r 1. Create Account \r 2. Login"
  );
  if (choice == 1) {
    createAccount();
  } else if (choice == 2) {
    login();
  } else {
    console.log("Invalid choice.");
  }
}

// start app
