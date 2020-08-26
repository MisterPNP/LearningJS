
//array challenge

let products = ["toilet paper", "bottled water", "sanitizer"];
console.log(products);

for(let i = 0; i < products.length; i++) {
    if(products[i] === "toilet paper") {
        products[i] = "paper towels";
    }
}
console.log(products);

products.push("bleach");

for(let i = 0; i < products.length; i++) {
    if(products[i] === "sanitizer") {
        products.splice(i,1);
    }
}

console.log(products);

