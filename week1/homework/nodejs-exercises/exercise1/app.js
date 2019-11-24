let andrejsFunction = require("./andrejs-awesome-function.js");
let numbers = [ "12", "846", "2", "1236" ];

for (let i = 0; i<numbers.length;i++) {
    let number = numbers[i];
    console.log(andrejsFunction.padLeft(number, 4, ' '));
}
