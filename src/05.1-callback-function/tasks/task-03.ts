/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

function prosesProduk (products: {name : string, price : number}[], callback: (name: string, price: number) => void): void{
    for (let i = 0; i < products.length; i++) {
        callback(name, price)
    }

}

function displayProduct (name : string, price : number) {
    console.log(`name: ${name} price ${price}`)
}

function enxpensiveProduct (name : string, price : number) {
    if (price > 1000000) {
        console.log(`name: ${name} price ${price}`)
    }
}

function productLimtus (name : string, price : number) {
    if (price > 500000) {
        let diskon = price * 10 / 100
        let hargaAkhir = price - diskon

        console.log(name + " - Rp" + hargaAkhir)
    }
}