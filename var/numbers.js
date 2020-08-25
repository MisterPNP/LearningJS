
//numbers in JS
let example = 7;
let exampleDec = 7.77;
let exampleDecLong = 7.77777777;

console.log(example);
console.log(exampleDec);
console.log(example+exampleDec);

let exampleStr = '7.77';

//parsing
console.log("Decimal before parsing: " + exampleDec +
    ". Decimal after parsing: " + parseInt(exampleDec));
console.log(exampleStr);
console.log(parseInt(exampleStr));
console.log(parseFloat(exampleStr));

//rounding with toFixed()
console.log(exampleDec.toFixed(4));
console.log(exampleDecLong.toFixed(5));