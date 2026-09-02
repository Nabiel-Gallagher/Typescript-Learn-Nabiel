/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function jumlahSiswaAktif() {
    return submissions.length
}

function tugasDiserahkan() {
    let jumlah = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted == true) {
            jumlah++
        }
    }
    return jumlah
}

function tugasHilang() {
    let hilang = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (!submissions[i].submitted) {
            hilang++
        }
    }
    return hilang
}

function siswaLulus () {
    let Lulus = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score >= 75 ) {
            Lulus++
        }
    }
}