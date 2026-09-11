/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type Transaction = {
    id: string
    customer: string
    amount: number
    status: string
}

type TransactionCategory =
    "HIGH VALUE" |
    "MEDIUM VALUE" |
    "LOW VALUE"

type TransactionWithCategory = Transaction & {
    category: TransactionCategory
}

type TransactionWithFee = Transaction & {
    fee: number
}

function getCustomerName(selectedTransaction: Transaction): string {
    return selectedTransaction.customer
}

function getTransactionCategory(
    selectedTransaction: Transaction
): TransactionWithCategory {

    let category: TransactionCategory

    if (selectedTransaction.amount >= 2000000) {
        category = "HIGH VALUE"
    } else if (selectedTransaction.amount >= 1000000) {
        category = "MEDIUM VALUE"
    } else {
        category = "LOW VALUE"
    }

    return {
        id: selectedTransaction.id,
        customer: selectedTransaction.customer,
        amount: selectedTransaction.amount,
        status: selectedTransaction.status,
        category: category
    }
}

function calculatePlatformFee(
    selectedTransaction: Transaction
): TransactionWithFee {

    let fee = 0

    if (selectedTransaction.status === "paid") {
        fee = selectedTransaction.amount * 0.02
    } else if (selectedTransaction.status === "pending") {
        fee = selectedTransaction.amount * 0.01
    } else {
        fee = 0
    }

    return {
        id: selectedTransaction.id,
        customer: selectedTransaction.customer,
        amount: selectedTransaction.amount,
        status: selectedTransaction.status,
        fee: fee
    }
}

function processTransactions<T>(
    arr: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {

    const result: T[] = []

    for (const transaction of arr) {
        result.push(callback(transaction))
    }

    return result
}

const customerNames = processTransactions(
    transactions,
    getCustomerName
)

const transactionCategories = processTransactions(
    transactions,
    getTransactionCategory
)

const transactionFees = processTransactions(
    transactions,
    calculatePlatformFee
)

console.log(`====== CUSTOMER NAMES ======`)
console.log(customerNames)

console.log(`====== TRANSACTION CATEGORIES ======`)
console.log(transactionCategories)

console.log(`====== PLATFORM FEES ======`)
console.log(transactionFees)