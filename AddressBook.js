class Contact {
    constructor(first_name, last_name, address, city, state, zip, phone_no, email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone_no = phone_no;
        this.email = email;   
    }
    get getFirst_name() {
        return this.first_name;
    }
    set setFirst_name(first_name) {
        this.first_name = first_name;
    }
    get getLast_name(){
        return this.last_name;
    }
    set setL_name(last_name) {
        this.last_name = last_name;
    }
    get getAddress(){
        return this.address;
}
    set setAddress(address) {
        this.address = address;
    }
    get getCity(){
        return this.city;
    }
    set setCity(city) {
        this.city = city;
    }
    get getState(){
        return this.state;
    }
    set setState(state) {
        this.state = state;
    }
    get getZip(){
        return this.zip;
    }
    set setZip(zip) {
        this.zip = zip;
    }
    get getPhone_no(){
        return this.phone_no;
    }
    set setPhone_no(phone_no) {
        this.phone_no = phone_no;
    }
    get getEmail(){
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    toString() {
        return "First name : "+this.first_name+", Last name : "+this.last_name+", Address : "+this.address
        +", City : "+this.city+", State : "+this.state+", ZIP : "+this.zip+"Phone number : "+this.phone_no+", Email : "+this.email;
    }
}

const prompt = require("prompt-sync")({sigint:true}); 
let first_name = getUserInput(prompt("Eter the first name : "), "^[A-Z][a-zA-Z]{2,}");
let last_name = getUserInput(prompt("Enter the last name : "), "^[A-Z][a-zA-Z]{2,}");
let address = getUserInput(prompt("Enter the address : "), "[a-zA-Z\w\d\s]{3,}");
let city = getUserInput(prompt("Enter the city name : "), "[a-zA-Z\w\d\s]{3,}");
let state = getUserInput(prompt("Enter the state name : "), "[a-zA-Z\w\d\s]{3,}");
let zip = getUserInput(prompt("Enter the zip code : "), "[0-9]{6}");
let phone_no = getUserInput(prompt("Enter the phone number : "), "^(91)?([ ])?[6-9]{1}[0-9]{9}$");
let email = getUserInput(prompt("Enter the email address : "), "^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@([a-z1-9]+)([.][a-z]*)?(\.[a-z]{2,})$");
function createContact() {
    let contact = new Contact(first_name, last_name, address, city, state, zip, phone_no, email);
    console.log(contact.toString());
}
function getUserInput(value, regexPattern) {
    let regex = RegExp(regexPattern);
    if(regex.test(value)) {
        return value;
    }
    else {
        console.log("Invalid input");
        value = prompt("Enter valid input");
        getUserInput(value, regexPattern);
    }
}
createContact();