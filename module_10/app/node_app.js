// Grocery Store APP

function Account(firstName, lastName, address1, address2, city, state, zip, username, password) {
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
// ***************** NOTE PROMPT() METHOD DOES NOT WORK IN NODE.JS  *****************






function createAccount() {
    console.log("Please enter your information to create an account.");
    let firstName = prompt("First Name: ");
    let lastName = prompt("Last Name: ");
    let address1 = prompt("Address 1: ");
    let address2 = prompt("Address 2: ");
    let city = prompt("City: ");
    let state = prompt("State: ");
    let zip = prompt("Zip: ");
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    Account(firstName, lastName, address1, address2, city, state, zip, username, password);
    console.log("Account created!");


}

function login() {
    console.log("Please enter your username and password to login.");
    let username = prompt("Username: ");
    let password = prompt("Password: ");
    if (username == this.username && password == this.password) {
        console.log("Login successful!");
    } else {
        console.log("Login failed.");
    }
}

function main() {
    console.log("Welcome to the Grocery Store App!");
    let choice = prompt("Please select an option: \r 1. Create Account \r 2. Login");
    if (choice == 1) {
        createAccount();
    } else if (choice == 2) {
        login();
    } else {
        console.log("Invalid choice.");
    }

}
 
// start app
main();