/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const pinjamanAndi = borrowings.filter(pinjaman => pinjaman.student === "Andi")

const informasi = borrowings.map(pinjaman => {const buku = books.find(book => book.id === pinjaman.bookId)
    return {
        student: pinjaman.student,
        days: pinjaman.days,
        bookTittle: buku?.title,
        bookCategory: buku?.category
    }
})

const peminjamProgramming = informasi.filter(pinjaman => pinjaman.bookCategory === "Programming")

const totalPeminjaman = borrowings.length

const totalDurasiPinjam = borrowings.reduce((sum, borrowings) => sum + borrowings.days, 0)
const rataRataDurasiPinjam = totalDurasiPinjam / totalPeminjaman

const pinjamLebih7Hari = borrowings.filter( borrowings => borrowings.days > 7)

console.log(pinjamanAndi)
console.log(informasi)
console.log(peminjamProgramming)
console.log(totalDurasiPinjam)
console.log(rataRataDurasiPinjam)
console.log(pinjamLebih7Hari)

