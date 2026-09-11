/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const hargaKamar = 650000;
const malam = 4;
const service = 120000;
const pajak = 0.11;
const vip = true;

const subtotal = hargaKamar * malam;

let diskon = 0;

if (vip) {
    diskon = subtotal * 0.12;
}

const hargaSetelahDiskon = subtotal - diskon;

const pajakBayar = hargaSetelahDiskon * pajak;

const total = hargaSetelahDiskon + service + pajakBayar;

let breakfast = false;

if (malam >= 3 || vip) {
    breakfast = true;
}

console.log("Room Subtotal :", subtotal);
console.log("Discount      :", diskon);
console.log("Tax           :", pajakBayar);
console.log("Final Payment :", total);
console.log("Free Breakfast:", breakfast);
