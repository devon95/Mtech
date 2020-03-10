let cars = [
    'Volvo',
    'Chevy',
    'Ford',
    'Audi',
    'Ferrari'
]


document.getElementById('array').innerText = cars;
document.getElementById('second').innerHTML = cars[1];
cars[0] = 'Testla';
document.getElementById('testla').innerHTML = cars;
cars.length;
document.getElementById('length').innerHTML = cars;
cars[cars.length] = 'Mercedes';
document.getElementById('mercedes').innerHTML = cars;







