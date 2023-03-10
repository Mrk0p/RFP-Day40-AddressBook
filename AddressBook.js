class AddressBook{
    constructor(...parameters){
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName(){ return this._firstName; }
    set firstName(firstName){
        let fNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fNameRegExp.test(firstName))
            this._firstName = firstName;
        else throw 'FirstName is Not Matched';
    }

    get lastName(){ return this._lastName; }
    set lastName(lastName){
        let lNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lNameRegExp.test(lastName))
            this._lastName = lastName;
        else throw 'LastName is Not Matched';
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-z A-z]{4,}');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is not Matched';
    }

    get city(){ return this._city; }
    set city(city){
        let cityRegex = RegExp('^[a-z A-z]{4,}');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City is not Matched';
    }

    get state(){ return this._state; }
    set state(state){
        let stateRegex = RegExp('^[a-z A-z]{4,}');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State is not Matched';
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5,}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is not Matched';
    }

    get phoneNumber(){ return this._phoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^(\\d{2})( )([6-9]{1})(\\d{9})");
        if(phoneRegex.test(phoneNo)){
            this._phoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is not Matched";
        }
    }

    get email(){ return this._email;}
    set email(e){
        let emailRegex = new RegExp("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");
        if(emailRegex.test(e)){
            this._email = e;
        }else{
            console.log("Email is not Matched");
        }
    }

    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", PhoneNumber = " + this.phoneNumber + ", Email = " + this.email;
    }
}

let person = new AddressBook("Raj", "Varma", "Jsquare", "Ahemdabad", "Gujarat", "425082" , "91 8234152782", "rajvarma@gmail.com");
console.log(person.toString());
try{
    person.firstName = "Raj";
    console.log(person.firstName);
}catch(e){
    console.error(e);
}
try{
    person.lastName = "Will";
    console.log(person.lastName);
}catch(e){
    console.error(e);
}
try{
    person.address = "Psquare";
    console.log(person.address);
}catch(e){
    console.error(e);
}
try{
    person.city = "Xyzs";
    console.log(person.city);
}catch(e){
    console.error(e);
}
try{
    person.state = "Abcy";
    console.log(person.state);
}catch(e){
    console.error(e);
}
try{
    person.zip = "422302";
    console.log(person.zip);
}catch(e){
    console.error(e);
}
try{
    person.phoneNumber = "9123457868";
}catch(e){
    console.error(e);
}
try{
    person.email = "jojowi@gmail";
    console.log(person.email);
}catch(e){
    console.log(e);
}

let person1 = new AddressBook("Mark", "Opp", "Msquare", "Yyze", "Bbcc", "443453", "91 8763235621","markop@gmail.com" );
let person2 = new AddressBook("Raze", "Rossi", "Bind", "Valo", "Jods","744564", "91 9865435665", "skrossi@gmail.com");
let addressBookArray = [];
addressBookArray[0] = person1;
addressBookArray[1] = person2;
console.log(addressBookArray);


let objIndex = addressBookArray.findIndex((obj => obj.firstName == "Raze"));
console.log("Before Update : " + addressBookArray[objIndex]);
addressBookArray[objIndex].city = "Tera";
console.log("After Update : " + addressBookArray[objIndex]);

let person3 = new AddressBook("Raze", "Ford", "Rsquare", "Roma", "Saina", "444763", "91 7976789654", "razeford@gmail.com" );
addressBookArray[2] = person3;
console.log(addressBookArray);
let index = addressBookArray.findIndex((obj => obj.firstName == "Raze"));
addressBookArray.splice(index, 1);
console.log("After Deletion");
console.log(addressBookArray);


let count = addressBookArray.reduce((counter, _person) => counter + 1, 0);
console.log(count);


let person4 = new AddressBook("Zoya", "Mai", "Ksquare", "Bbj", "Mora","425873", "91 8756473425", "zoyamai@gmail.com");
if(addressBookArray.findIndex(contact => contact.firstName == person4.firstName) == -1){
    addressBookArray[3] = person4;
}
else{
    console.log("Duplicate Entry");
}
console.log(addressBookArray);

let person5 = new AddressBook("Harsh", "Kumar", "Dsquare", "Dono", "Temo", "454773", "91 7866748967", "harshk@gmail.com");
addressBookArray[3] = person5;
console.log(addressBookArray);

let contacts = addressBookArray.filter(person => person.city == "Dono");
console.log("Contacts from city 'Dono' are : ")
console.log(contacts);

let personFromState = addressBookArray.filter(person => person.state == "Temo");
console.log("Contacts from State 'Temo' are : ");
console.log(personFromState);

console.log("No.of Persons from city = 'Dono' and state = 'Temo' : ");
let countByCity = addressBookArray.filter(person => person.city =="Dono" && person.state == "Tempo").reduce((count, person) => count + 1, 0);
console.log(countByCity);

console.log(addressBookArray);
function compare( a, b ) {
    if ( a.firstName < b.firstName ){
      return -1;
    }
    if ( a.firstName > b.firstName ){
      return 1;
    }
    return 0;
  }

  function compareByCity( a, b ) {
    if ( a.city < b.city ){
        return -1;
    }
    if ( a.city > b.city ){
        return 1;
    }
        return 0;
}

function compareByState( a, b ) {
    if ( a.state < b.state ){
        return -1;
    }
    if ( a.state > b.state ){
        return 1;
    }
        return 0;
}

function compareByZip( a, b ) {
    if ( a.zip < b.zip ){
        return -1;
    }
    if ( a.zip > b.zip ){
        return 1;
    }
        return 0;
}

console.log("AddressBook After Sorting by First Name");
console.log(addressBookArray.sort(compareByFirstName));
console.log("Sort Based on City");
console.log(addressBookArray.sort(compareByCity));
console.log("Sort Based on State");
console.log(addressBookArray.sort(compareByState));
console.log("Sort Based on Zip");
console.log(addressBookArray.sort(compareByZip));