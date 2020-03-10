
const firstNumber = document.getElementById('firstNumber').value;
// console.log(input1)
// const firstNumber = parseFloat(input1);
console.log(firstNumber)
const secondNumber = document.getElementById('secondNumber').value
// console.log(input2)
// const secondNumber = parseFloat(input2)
console.log(firstNumber, secondNumber);

const addictionButton = document.getElementById('addiction');
const subtractionButton = document.getElementById('subtraction');
const multiplicationButton = document.getElementById('multiplication');
const divisionButton = document.getElementById('division');

// addictionButton.addEventListener('click', event => {
//     addition(firstNumber, secondNumber)
// });
// subtractionButton.addEventListener('click', event => {
//     subtraction(firstNumber, secondNumber)
// });
// multiplicationButton.addEventListener('click', event => {
//     multiplication(firstNumber, secondNumber)
// });
// divisionButton.addEventListener('click', event => {
//     division(firstNumber, secondNumber)
// });
function addition(firstNumber, secondNumber) {
    let results = firstNumber + secondNumber;
    document.getElementById('results').innerHTML = '<div>The Answer is: ' + results + '</div>'
}
function subtraction(firstNumber, secondNumber) {
    let results = firstNumber - secondNumber;
    document.getElementById('results').innerHTML = '<div>The Answer is: ' + results + '</div>'
}
function multiplication(firstNumber, secondNumber) {
    let results = firstNumber * secondNumber;
    document.getElementById('results').innerHTML = '<div>The Answer is: ' + results + '</div>'
}
function division(firstNumber, secondNumber) {
    let results = firstNumber / secondNumber;
    document.getElementById('results').innerHTML = '<div>The Answer is: ' + results + '</div>'
}