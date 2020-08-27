
//functions in JS
//main
const cartItems = [
    {quantity:1, price:5},
    {quantity:3, price:4},
    {quantity:10, price:1}
];

console.log(getUserCredential("John", "Wick", "dog@gmail.com"));
console.log(getPreTaxTotal(cartItems));
console.log(getTaxedTotal(cartItems));

/*       functions     */
function getUserCredential(firstName, lastName, email) {
    return firstName + " " + lastName + " " + email;
}

function getPreTaxTotal(cartItems) {
    let total = 0;
    for(item of cartItems) {
        total += item.quantity*item.price;
    }
    return total;
}

function getTaxedTotal(cartItems) {
    return (getPreTaxTotal(cartItems)*1.08).toFixed(2);
}