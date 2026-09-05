/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const hadir = students.filter(student => {const kehadiran = attendance.find(attendance => attendance.studentId === student.id)
    return kehadiran?.status === "present"
}).map(student => student.name)

const tidakHadir = students.filter(student => {const kehadiran = attendance.find(attendance => attendance.studentId === student.id)
    return kehadiran?.status === "absent"
}).map(student => student.name)

const terlambat = students.filter(student => {const kehadiran = attendance.find(attendance => attendance.studentId === student.id)
    return kehadiran?.status === "late"
}).map(student => student.name)

const anu = students.map(student => {const kehadiran = attendance.find(attendance => attendance.studentId === student.id)!
    return {name : student.name, status : kehadiran.status}
})

console.log(hadir)
console.log(tidakHadir)
console.log(terlambat)
console.log(anu)