
//logic in JS

let example = 5;

if(example === 6) {
    console.log('if');
} else if(example === 5) {
    console.log('else if');
} else {
    console.log('else');
}

let example2 = 10;

if(example2 >= 5 && example2 <= 15) {
    console.log('And');
}
if(example2 == 9 || example2 >= 10) {
    console.log('Or');
}

let studentAnswer = 'T';

switch(studentAnswer) {
    case 'A':
        console.log('A is wrong');
        break;
    case 'B':
        console.log('B is wrong');
        break;
    case 'C':
        console.log('C is correct');
        break;
    default:
        console.log('Whatever you put is wrong');
}