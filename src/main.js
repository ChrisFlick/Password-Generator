

class Password {
    constructor(length, special, numeric, lowercase, uppercase) {
        this._length = length;
        this._special = special;
        this._numeric = numeric;
        this._lowerCase = lowercase;
        this._upperCase = uppercase;

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
    let characters = []

    const SPECIAL = "'`!@#$%^&*()_+-={[}]:;,.<>/?'"
    const NUMERIC = "1234567890";
    const LOWER = "abcdefghijklmnopqrstuvwxyz"
    const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if (this.special) {
        characters.push(SPECIAL);
    }

    if (this.numeric) {
        characters.push(NUMERIC);
    }

    if (this.lowerCase) {
        characters.push(LOWER);
    }

    if (this.upperCase) {
        characters.push(UPPER);
    }

    
    let charactersLength = characters.length;

    for (let i = 0; i < this.length; i++) {
        let type = characters[Math.floor(Math.random() * charactersLength)];
        result += type.charAt(Math.floor(Math.random() * type.length));
    }

    return result;
 }
}


/* Debugging Code *

let pass = new Password(8, true, true, true, true);
console.log(pass.makePass())

/* End of debugging code */

function click() {
    
}