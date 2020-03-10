array1 = ['apple', 'banana', 'orange']

function findLongestString(...array1) {
    let longestString = '';
    array1.forEach(function(ary){
        if (ary.length > longestString){
            longestString = ary
        }
    });
    return longestString
}
function findLongestString(...array1) {
    let longestString = array1[0];
    let i = 0;
    while (i < array1.length) {
        if (array1[i].length > longestString) {
            longestString = array1[i];
        }
     i++;
    }
    return longestString
}


const devices = [
    {
        id: '73839',
        name: 'Phone',
        selected: true
    },
    {
        id: '733439',
        name: 'Tablet',
        selected: false
    },
    {
        id: '7234339',
        name: 'computer',
        selected: false
    },
]
// with for loop
function getSelected (array) {
    const selectedDevices = [];

    for (let i =0; i < array.length; i++) {
        const device = array[i];
        if (device.selected) {
            selectedDevices.push(device);
        }
    }
    return selectedDevices;
}
//with filter
function getSelected (array) {
    const selectedDevices = array.filter(function (device) {
        if (device.selected){
            return true
        }
    })
    return selectedDevices;
}
function getSelected (array) {
    const selectedDevices = array.filter(function (device) {
        if (device.selected){
            return true
        }
    })
    const selectedDevices = array.filter(device)
    return selectedDevices;
}

