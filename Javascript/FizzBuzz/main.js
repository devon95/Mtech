function fizzBuzz(n){
    let result = '';
if (n % 3 == 0 && n % 5 == 0) {
        result = "FizzBuzz"
}
else if (n % 5 ==0) {
    result = 'Buzz'
}
else if (n % 3 == 0) {
    result = 'Fizz'
}
else {
    result = n
}
return result
}

function buzz(n){
    let result = '';
if (n % 3 == 0) {
        result += "Fizz"
}
else if (n % 5 ==0) {
    result += 'Buzz'
}
return result == '' ? n : result;
}

