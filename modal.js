const creating = document.querySelector('.create');
const signing = document.querySelector(".sign");
const form = document.querySelector(".three");
const signupToggle = document.querySelector(".signup-toggle");
const signinToggle = document.querySelector(".signin-toggle");

// modal 
const modal = document.querySelector('.modal');


const contact = document.getElementById('contact');
const login = document.getElementById('signup');

// close modal
modal.addEventListener('click', () => {
    form.classList.remove('active');
    modal.classList.remove('active')
});

creating.addEventListener('click', () => {
     // open modal
    modal.classList.add('active');
    form.classList.add('active');
    contact.classList.add('active');
    login.classList.remove('active');
    if(signinToggle.classList.contains('active')) {
        signinToggle.classList.remove('active');
    }
    signupToggle.classList.add('active');
})

signing.addEventListener('click', () => {
    // open modal
    modal.classList.add('active');
    form.classList.add('active');
    login.classList.add('active');
    contact.classList.remove('active');
    if(signupToggle.classList.contains('active')) {
        signupToggle.classList.remove('active');
    }
    signinToggle.classList.add('active');
})

signinToggle.addEventListener('click', () => {
    if(contact.classList.contains('active')) {
        contact.classList.remove('active');
    }
    login.classList.add('active');
    if(signupToggle.classList.contains('active')) {
        signupToggle.classList.remove('active');
    }
    signinToggle.classList.add('active');
})

signupToggle.addEventListener('click', () => {
    if(login.classList.contains('active')) {
        login.classList.remove('active');
    }
    contact.classList.add('active');
    if(signinToggle.classList.contains('active')) {
        signinToggle.classList.remove('active');
    }
    signupToggle.classList.add('active');
})

// Submission and Validation
contact.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEls = contact.querySelectorAll('input');

    const userInput = {
        name: contact.querySelector('#name').value,
        email: contact.querySelector('#email').value,
        password: contact.querySelector('#password').value,
        phone: contact.querySelector('#phone').value,
        country: contact.querySelector('#country').value
    }

    const { name, email, password, phone, country } = userInput;

    const validateInput = new Validation()
    validateInput.name(name)
    validateInput.email(email)
    validateInput.password(password)
    validateInput.phone(phone)
    validateInput.country(country)

    // check the input that is invalid
    const checkVal = {};
    inputEls.forEach(el => {
        if(validateInput.errorMessage[el.name].length !== 0) {
            el.parentElement.classList.add('onError');
            el.parentElement.querySelector('.error-message').classList.add('onError');
            el.parentElement.querySelector('.error-message').innerText = validateInput.errorMessage[el.name];
            checkVal[el.name] = false;
            console.log("Invalid Input =>" +validateInput.errorMessage[el.name]);
        } else {
            el.parentElement.classList.remove('onError');
            el.parentElement.querySelector('.error-message').classList.remove('onError');
            checkVal[el.name] = true;
        }
    })
    for(let vals of Object.values(checkVal)) {
        if(!vals) {
            console.log("Invalid Input");
            console.log(userInput);
            return
        } 
    }
    console.log("Form Submitted Successfully!!");
    console.log(userInput);
    
})
