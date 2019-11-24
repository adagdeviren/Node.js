let leftPad = require('left-pad');

let numbers = [ "12", "846", "2", "1236" ];

for (let i = 0; i<numbers.length;i++) {
    let number = numbers[i];
    console.log(leftPad(number, 8, ' '));
    //console.log(andrejsFunction.padLeft(number, 4, ' '));
}