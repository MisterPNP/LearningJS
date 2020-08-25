
// strings in JS
// can make strings with single quotes weirdly\

let foodName = "Couscous";
let utensil = 'spoon';

console.log("Variable with value " + foodName +
    " is of type: " + typeof(foodName) + " and I eat it with a " +
    utensil);

// string interpolation
console.log(`       ${foodName} ${utensil}`);

/*methods for strings in JS*/
//length
console.log(`       ${foodName} ${utensil}`.length);

//trim()
console.log(`       ${foodName} ${utensil}`.trim().length);

//toUpperCase()/toLowerCase()
console.log(`       ${foodName} ${utensil}`.toUpperCase());
console.log(`       ${foodName} ${utensil}`.toLowerCase());

//split()
//seperator is the character to split between (not including said character)
//if seperator is '' (empty string) then all characters will be outputed
console.log(`${foodName} ${utensil}`.split(''));



