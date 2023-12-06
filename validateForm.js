class Validation {
    constructor() {
        this.isValid = false;
        this.errorMessage = {};
    }

    name(fullName) {
        const regex = /^[a-z0-9 ]{4,30}$/gi;
        if(fullName.length === 0) {
            this.errorMessage.name = 'Name is Required';
        } else if(!regex.test(fullName)) {
            this.errorMessage.name = "Invalid Name";
        } else {
            this.errorMessage.name = "";
        }

        return regex.test(fullName);
    }

    email(mail) {
        // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{1}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9_]+)*$/
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if(mail.length === 0) {
            this.errorMessage.email = 'Email is Required';
        } else if(!regex.test(mail)) {
            this.errorMessage.email = "Invalid Email";
        } else {
            this.errorMessage.email = "";
        }
        return regex.test(mail)
    }

    phone(num) {
        // +(0-9, -, (),\)
        const regex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/g;
        if(num.length === 0) {
            this.errorMessage.phone = 'Phone Number is Required';
        }else if(!regex.test(num)) {
            this.errorMessage.phone = "Invalid Phone Number";
        } else {
            this.errorMessage.phone = "";
        }
        return regex.test(num);
    }

    password(pass){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&^]{8,16}$/g;
        if(pass.length === 0) {
            this.errorMessage.password = 'password is Required';
        }else if(!regex.test(pass)) {
            this.errorMessage.password = "Invalid Password";
        } else {
            this.errorMessage.password = "";
        }
        return regex.test(pass)
    }

    country(ctry) {
        const regex = /^[a-z ]{2,15}$/gi;
        if(ctry.length === 0) {
            this.errorMessage.country = 'Country Name is Required';
        }else if(!regex.test(ctry)) {
            this.errorMessage.country = "Invalid Country Name";
        } else {
            this.errorMessage.country = "";
        }
        return regex.test(ctry);
    }

}