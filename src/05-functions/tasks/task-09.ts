/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function getTotalPatients(): number {
    return patients.length;
}   

function getTotalAdmittedPatients(): number {
    let totalAdmitted: number = 0;
    for (const patient of patients) {
        if (patient.admitted) {
            totalAdmitted++;
        }
    }
    return totalAdmitted;
}

function getTotalDischargedPatients(): number {
    let totalDischarged: number = 0;
    for (const patient of patients) {
        if (!patient.admitted) {
            totalDischarged++;
        }
    }
    return totalDischarged;
}

function getPatientsByDepartment(): { [department: string]: number } {
    const departmentCounts: { [department: string]: number } = {};
    for (const patient of patients) {
        const department = patient.department;
        departmentCounts[department] = (departmentCounts[department] || 0) + 1;
    }
    return departmentCounts;
}

function getHighestBill(): number {
    let highestBill: number = patients[0].bill;
    for (const patient of patients) {
        if (patient.bill > highestBill) {
            highestBill = patient.bill;
        }
    }
    return highestBill;
}

function getLowestBill(): number {
    let lowestBill: number = patients[0].bill;
    for (const patient of patients) {
        if (patient.bill < lowestBill) {
            lowestBill = patient.bill;
        }
    }
    return lowestBill;
}

function getAverageBill(): number {
    let totalBill: number = 0;
    for (const patient of patients) {
        totalBill += patient.bill;
    }
    return totalBill / patients.length;
}

function getTotalRevenue(): number {
    let totalRevenue: number = 0;
    for (const patient of patients) {
        totalRevenue += patient.bill;
    }
    return totalRevenue;
}

function getAdmittedPatientNames(): string[] {
    const admittedNames: string[] = [];
    for (const patient of patients) {
        if (patient.admitted) {
            admittedNames.push(patient.name);
        }
    }
    return admittedNames;
}

function printHospitalReport(): void {
    console.log("Total Patients: " + getTotalPatients());
    console.log("Total Admitted Patients: " + getTotalAdmittedPatients());
    console.log("Total Discharged Patients: " + getTotalDischargedPatients());
    console.log("Patients by Department: ", getPatientsByDepartment());
    console.log("Highest Hospital Bill: " + getHighestBill());
    console.log("Lowest Hospital Bill: " + getLowestBill());
    console.log("Average Hospital Bill: " + getAverageBill());
    console.log("Total Hospital Revenue: " + getTotalRevenue());
    console.log("Names of Admitted Patients: " + getAdmittedPatientNames().join(", "));
}

printHospitalReport();