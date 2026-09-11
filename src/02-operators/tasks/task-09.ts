/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboard: number = 850000;
const mouse: number = 275000;
const jumlahMouse: number = 2;
const stand: number = 420000;

const voucher: number = 100000;
const premium: boolean = true;
const pajak: number = 0.11;


const subtotal = keyboard + (mouse * jumlahMouse) + stand;

let diskon = 0;

if (premium) {
    diskon = subtotal * 0.10;
}

const setelahDiskon = subtotal - diskon;

const setelahVoucher = setelahDiskon - voucher;

const sebelumPajak = setelahVoucher;

const vat = sebelumPajak * pajak;

const finalPayment = sebelumPajak + vat;

const rewardPoints = Math.floor(sebelumPajak / 50000);

let freeShipping = false;

if (premium || sebelumPajak > 1500000) {
    freeShipping = true;
}

console.log("Product Subtotal      :", subtotal);
console.log("Membership Discount   :", diskon);
console.log("Voucher Deduction     :", voucher);
console.log("Payment Before Tax    :", sebelumPajak);
console.log("VAT                   :", vat);
console.log("Final Payment         :", finalPayment);
console.log("Reward Points         :", rewardPoints);
console.log("Free Shipping         :", freeShipping);