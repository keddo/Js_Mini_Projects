const passwordBox = document.getElementById('password');
const length = 12;

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = '0123456789';
const specialLetters = '@#$%^&*()_+~|}{[]></-=';

const allChars = upperCaseLetters + lowerCaseLetters + numbers + specialLetters;
let createPassword = () => {
    let password = "";
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialLetters[Math.floor(Math.random() * specialLetters.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}
