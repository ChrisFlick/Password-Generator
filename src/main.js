
/* Debugging Code */
/* End of debugging code */


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

    get lowercase() {
        return this._lowercase;
    }

    get uppercase() {
        return this._uppercase;
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

    set lowercase(bool) {
        if (typeof bool === "boolean") {
            this._lowerCase = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
    }

    set uppercase(bool) {
        if (typeof bool === "boolean") {
            this._upperCase = bool;
        } else {
            TypeError("Invalid input; please ensure bool is a number")
        }
    }

    /*********************
    ******* Methods ******
    *********************/
}