/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let totalSales: number = 0

  for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
  }
  return totalSales
}

function findHighestTransaction(sales: number[]): number {
  let transaksiTertinggi: number = 0 

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > transaksiTertinggi) {
      transaksiTertinggi += sales[i]
    }
  }
  return transaksiTertinggi
}

function findLowestTransaction(sales: number[]): number {
  let transaksiTerendah: number = 0

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] < transaksiTerendah) {
      transaksiTerendah += sales[i]
    }
  }
  return transaksiTerendah
}

function calculateAverageSale(sales: number[]): number {
  let total: number = 0

  for (let i = 0; i < sales.length; i++) {
    total += sales[i]
  }
  return total / sales.length
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let hitTransaksiTerbesar: number = 0

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > minimumAmount) {
      hitTransaksiTerbesar++
    }
  }
  return hitTransaksiTerbesar
}

console.log("Total Penjualan : " + calculateTotalSales(sales))
console.log("Transaksi Tertinggi : " + findHighestTransaction(sales))
console.log("Transaksi Terendah : " + findLowestTransaction(sales))
console.log("Rata Rata Penjualan : " + calculateAverageSale(sales))
console.log("Jumlah Transaksi diatas 500000 : " + countLargeTransactions(sales, 500000))