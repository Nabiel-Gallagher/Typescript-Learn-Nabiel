/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

const subtotal = cart.filter(cart => cart.quantity > 0).reduce((sum, cart) => sum + cart.price * cart.quantity, 0)

let diskon = 0

if (subtotal >= 3000000) {
    diskon = 10/100
} else if (subtotal >= 2000000) {
    diskon = 5/100
}

let totalAkhir = subtotal - (subtotal * diskon)

const produkMahal = cart.filter(cart => cart.price > 1000000)

console.log(subtotal)
console.log(totalAkhir)
console.log(produkMahal)