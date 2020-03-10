
fetch('https://api.nationalize.io?name=devon')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // let probability1 = data.country[0].probability * 100
        for (let i = 0; i < data.country.length; i++) {
            const element = data.country[i];
            document.getElementById('aboutme').innerHTML = element.name + " " + element.country_id + " " + (element.probability * 100).toFixed(2) + "%" ;
            console.log(element.country_id)
        }
        // document.getElementById('aboutme').innerHTML = data.name + " " + data.country[0].country_id + " " + probability1.toFixed(2) + "%";
    });

fetch('https://api.genderize.io?name=devon')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('aboutme2').innerHTML = data.name + " " + data.gender;
    });
fetch('https://api.agify.io?name=devon')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        document.getElementById('aboutme3').innerHTML = data.name + " " + data.age;
    });


// let me = '{"Name": "Devon", "Street": "500 West"}';
// console.log(me);
// let obj = JSON.parse(me);
// console.log(obj);
// document.getElementById('aboutme').innerHTML = obj.name + ' ' + obj.steet;

