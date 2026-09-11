/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const meterSebelumnya: number = 24560
const meterArus: number = 25892
const hargaListrikKwh: number = 1650
const panlerTerpasang: boolean = true
const modeHemat: boolean = true

const penggunaan = meterArus - meterSebelumnya;

const tagihan = penggunaan * hargaListrikKwh;

let diskon = 0;

if (panlerTerpasang) {
    diskon = diskon + 0.20;
}

if (modeHemat) {
    diskon = diskon + 0.05;
}

const potongan = tagihan * diskon;
const finalBill = tagihan - potongan;

let greenEnergy = false;

if (panlerTerpasang && penggunaan < 300 && modeHemat) {
    greenEnergy = true;
}

console.log("Total Energy Consumption :", penggunaan, "kWh");
console.log("Electricity Bill         :", tagihan);
console.log("Final Bill               :", finalBill);
console.log("Green Energy Program     :", greenEnergy);
