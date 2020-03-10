let string = 'Once there were 2 pumpkins who could not look at the ghosts 4 very long. They died of fright. But they loved it.'

let regEx = string.match(/([^.]*.)/g);

let string2 = regEx[1] + " " + regEx[2] + " " + regEx[0];


