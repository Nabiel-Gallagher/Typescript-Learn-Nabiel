/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class dompetDigital {
    public walletID: string;
    public ownerName: string;
    private balance: number;

    constructor(walletId: string, ownerName: string, initialBalance : number) {
        this.walletID = walletId;
        this.ownerName = ownerName;
        this.balance = initialBalance >= 0 ? initialBalance : 0
    }

    deposit(amount: number): void{
        if(amount > 0) {
            this.balance += amount
            console.log(`Berhasil Deposit Rp.${amount.toLocaleString('id-ID')}`)
        } else {
            console.log("Jumlah Deposit Harus Lebih Dari 0!")
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Jumlah Penarikan Harus Lebih Dari 0")
        } else {
            this.balance -= amount
            console.log(`Berhasil Menarik Rp.${amount.toLocaleString('id-ID')}`)
        }
    }

    getBalance(): number {
        return this.balance
    }

    walletInfo(): void {
        console.log("=====Wallet Info=====")
        console.log(`ID Wallet : ${this.walletID}`)
        console.log(`Pemilik   : ${this.ownerName}`)
        console.log(`Saldo     : ${this.balance.toLocaleString('id-ID')}`)
    }
}

const dompetAyas = new dompetDigital("WoW123", "Nabiel", 10000000)

dompetAyas.walletInfo()
dompetAyas.deposit(100000)
dompetAyas.withdraw(100000)
console.log(`Sisa Saldo Saat Ini: Rp.${dompetAyas.getBalance().toLocaleString('id-ID')}`)