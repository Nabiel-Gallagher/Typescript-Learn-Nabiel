/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];


function hitungPresentase (preset: number, total:number): number {
    return (preset / total) * 100
}


function printAttendanceReport (attendance: {name:string; present:boolean} []): void {
    let totalHadir: number = 0
    let totalAbsen: number = 0
    let namaNamaYangTidakHadir: string = ""

    let totalSiswa: number = attendance.length

    for (let i = 0; i < attendance.length; i++) {
        let kehadiran = attendance[i]
        if (kehadiran.present) {
            totalHadir++
        } else {
            totalAbsen++
            namaNamaYangTidakHadir += kehadiran.name + " "
        }
    } 

    let presentaseHadir: number = hitungPresentase(totalHadir, totalSiswa)
    let presentTidakHadir: number = hitungPresentase(totalAbsen, totalSiswa) 

    console.log("Total Hadir: " + totalHadir)
    console.log("Total Absen: " + totalAbsen)
    console.log("Nama yang tidak hadir: " + namaNamaYangTidakHadir)
    console.log("Total Siswa: " + totalSiswa)
    console.log("Presentase Hadir: " + presentaseHadir)
    console.log("Presentase Tidak Hadir: " + presentTidakHadir)
}

printAttendanceReport(attendances)