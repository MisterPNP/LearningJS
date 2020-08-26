
//arrays in JS

let example1 = [5,5,6];
console.log(example1);
console.log(example1.length)

//add elements to the end
example1.push(8,9,10); // arrays in JS act like stacks
console.log(example1)

//pop the last element (remove)
example1.pop();
console.log(example1);

//remove the first element in the array
example1.shift();
console.log(example1);

//add elements to the beginning of the array
example1.unshift(2);
console.log(example1);

//iterate through array (kinda cool not gonna lie :) )
example1.forEach((element) => {
    console.log(element);
});

console.log(example1[0]);