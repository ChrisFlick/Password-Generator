const SPECIAL = "'`!@#$%^&*()_+-={[}]:;,.<>/?'"
const NUMERIC = "1234567890";
const LOWER = "abcdefghijklmnopqrstuvwxyz"
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class Password { // All data needed from user to creat a randomly generated password
    constructor(length, special, numeric, lowercase, uppercase) {
        this._special = special;
        this._numeric = numeric;
        this._lowerCase = lowercase;
        this._upperCase = uppercase;

        if (length < 8 || length.isNaN) {
            this._length = 8;
        } else if (length > 128) {
            this._length = 128;
        } else {
            this._length = length;
        }
        
    }

    /*********************
    ******* Getters ******
    *********************/

    get length() {
        return this._length;
    }

    get special() {
        return this._special;
    }

    get numeric() {
        return this._numeric;
    }

    get lowerCase() {
        return this._lowerCase;
    }

    get upperCase() {
        return this._upperCase;
    }

    /*********************
    ****** Setters *******
    *********************/

    set length(num) {
        if (typeof num === "number") {
            this._length = num;
        } else {
            TypeError("Invalid input; please ensure num is a number")
        }
        
    }

    set special(bool) {
        if (typeof bool === "boolean") {
            this._special = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
        
    }

    set numeric(bool) {
        if (typeof bool === "boolean") {
            this._numeric = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
    }

    set lowerCase(bool) {
        if (typeof bool === "boolean") {
            this._lowerCase = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
    }

    set upperCase(bool) {
        if (typeof bool === "boolean") {
            this._upperCase = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
    }

    /*********************
    ******* Methods ******
    *********************/

   makePass() { // Makes a random ID for peerJS
    let result = '';
    let characters = [];
    let garanteed = []; 
    let count = 0;
    
    if (this.special) {
        characters.push(SPECIAL);
        garanteed.push(getRandom(SPECIAL));
        count ++;
    }

    if (this.numeric) {
        characters.push(NUMERIC);
        garanteed.push(getRandom(NUMERIC));
        count++;
    }

    if (this.lowerCase) {
        characters.push(LOWER);
        garanteed.push(getRandom(LOWER));
        count++
    }

    if (this.upperCase) {
        characters.push(UPPER);
        garanteed.push(getRandom(UPPER));
        count++;
    }

    
    let charactersLength = characters.length;

    for (let i = 0; i < this.length; i++) {
        if (i < count) {
            result += garanteed[i];
        } else {
            let type = characters[Math.floor(Math.random() * charactersLength)];
            result += getRandom(type);
        }
    }

    $('#copy').prop('disabled', false)

    return result;
 }
}

function getRandom(type) { // Grabs a random character from whatever type is passed to it
    return type.charAt(Math.floor(Math.random() * type.length));
}


/* Debugging Code *

let pass = new Password(8, true, true, true, true);
console.log(pass.makePass())

/* End of debugging code */

$(document).ready( () => {

    // Initialize variables
    let length = 8; // If no input is given default to 8.
    let upper = false;
    let lower = false;
    let special = false;
    let numeric = false

    $('#upper').click(function(){ // Check to see if Upper is checked off
        if($(this).prop("checked") == true){
            upper = true;;
        }
        else if($(this).prop("checked") == false){
            upper = false;
        }
    });

    $('#lower').click(function(){ // Check to see if Lower is checked off
        if($(this).prop("checked") == true){
            lower = true;;
        }
        else if($(this).prop("checked") == false){
            lower = false;
        }
    });

    $('#special').click(function(){ // Check to see if Special is checked off
        if($(this).prop("checked") == true){
            special = true;;
        }
        else if($(this).prop("checked") == false){
            special = false;
        }
    });

    $('#numeric').click(function(){ // Check to see if Numeric is checked off
        if($(this).prop("checked") == true){
            numeric = true;;
        }
        else if($(this).prop("checked") == false){
            numeric = false;
        }
    });

    $('#submit').on('click', () => { // Generate a random password once the submit button is clicked
        if (upper + lower + special + numeric > 0) { // Ensure that the user has selected at least one of the char types.
            let lengthInput = parseInt($('#length').val());

            if (! isNaN(lengthInput)) {
                length = lengthInput;
            }
        

            let pass = new Password(length, special, numeric, lower, upper);

            $("#pass").html(pass.makePass());
        } else { // If the user has not selected any types inform them to select at least one.
            alert("Please ensure you have at least one checkbox checked")
        }
    });

    $('#copy').on('click', () => { // Copy the randomly generated password to their clipboard
        let password = document.querySelector("#pass")

        password.select();
        document.execCommand("copy");
    })
})
