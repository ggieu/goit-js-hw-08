import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = Array.from(formEl)[0];
const messageEl = Array.from(formEl)[1];
const btnEl = Array.from(formEl)[2];
const keyLocalStorage = "feedback-form-state";
let data = {
    email: '',
    message: ''
};
function saveDataStorage() {
    localStorage.setItem(keyLocalStorage, JSON.stringify(data));
}
const dataStorage = () => { return localStorage.getItem(keyLocalStorage) };
const dataEmailValue = () => {
    if (dataStorage()) {
        return JSON.parse(dataStorage()).email
    }
};
const dataMessageValue = () => {
    if (dataStorage()) {
        return JSON.parse(dataStorage()).message;
    }
}

if (dataStorage()) {
    emailEl.value = dataEmailValue();
    data.email = emailEl.value;
    messageEl.value = dataMessageValue();
    data.message = messageEl.value;
    console.log('')
}



formEl.addEventListener('input', throttle(function emailInput(event) {
    let eventName = event.target.name;
    if (eventName === 'email') {
        data.email = event.target.value;
    }
    if (eventName === 'message') {
        data.message = event.target.value;
    }
    saveDataStorage();
}, 500));


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailEl.value !== "" && messageEl.value !== "") {
        console.log(JSON.parse(dataStorage()))
        localStorage.removeItem("feedback-form-state")
        formEl.reset();
        data = {};
    } else {
        alert("заповніть усі поля")
    }
});