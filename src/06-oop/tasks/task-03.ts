/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class buku {
    private statusPeminjaman : string
    isbn : number;
    judul : string;
    pengarang : string;
    jumalahHalaman: number;

    constructor(isbn: number, judul: string, pengarang: string, jumlahHalaman: number) {
        this.isbn = isbn;
        this.judul = judul;
        this.pengarang = pengarang;
        this.jumalahHalaman = jumlahHalaman;
        this.statusPeminjaman = "Tersedia"
    }

    meminjam(): void {
        if (this.statusPeminjaman === "Tersedia") {
        this.statusPeminjaman = "Meminjam"
        console.log(this.judul + "Berhasil Dipinjam")
    } else {
        console.log(this.judul + "Buku Sedang Dipinjam")
    }
   }

    returnBook(): void {
        if(this.statusPeminjaman === "Meminjam") {
            this.statusPeminjaman = "Tersedia"
            console.log(this.judul + "Berhasil Dikembalikan")
        } else {
            console.log(this.judul + "Masih Tersedia")
        }
    }  
  } 
