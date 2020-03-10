

function multipyArrays(array1, array2) {
    if(array1.length == array2.length) {
        //solve
        const resultArray = [];

        for(let i = 0; i < array1.length; i++) {
            resultArray[i] = array1[i] * array2[i];
        }
       return resultArray
    }
    else {
        return [];
    }

    console.log(resultArray);
}

let resultElement = document.getElementById('results');

let answerArray = multipyArrays([1,2,3,4], [5,6,7,8])
resultElement.innerText = answerArray