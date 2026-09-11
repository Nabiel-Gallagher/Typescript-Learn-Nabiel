/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type Student = {
    name: string
    score: number
    attendance: number
}

type PASS_STATUS = "PASS" | "FAIL"

type ACADEMIC_CATEGORY =
    "Excellent" |
    "Good" |
    "Needs Improvement" |
    "Poor"

type ATTENDANCE_STATUS =
    "Good Attendance" |
    "Poor Attendance"

type RECOMMENDATION =
    "Excellent" |
    "Good" |
    "Improve Attendance" |
    "Improve Academic Performance"

type StudentPassStatus = Student & {
    status: PASS_STATUS
}

type StudentAcademicCategory = Student & {
    category: ACADEMIC_CATEGORY
}

type StudentAttendanceStatus = Student & {
    attendanceStatus: ATTENDANCE_STATUS
}

type StudentRecommendation = Student & {
    recommendation: RECOMMENDATION
}

function getPassStatus(selectedStudent: Student): StudentPassStatus {
    let status: PASS_STATUS

    if (
        selectedStudent.score >= 75 &&
        selectedStudent.attendance >= 90
    ) {
        status = "PASS"
    } else {
        status = "FAIL"
    }

    return {
        name: selectedStudent.name,
        score: selectedStudent.score,
        attendance: selectedStudent.attendance,
        status: status
    }
}

function getAcademicCategory(
    selectedStudent: Student
): StudentAcademicCategory {

    let category: ACADEMIC_CATEGORY

    if (selectedStudent.score >= 90) {
        category = "Excellent"
    } else if (selectedStudent.score >= 75) {
        category = "Good"
    } else if (selectedStudent.score >= 70) {
        category = "Needs Improvement"
    } else {
        category = "Poor"
    }

    return {
        name: selectedStudent.name,
        score: selectedStudent.score,
        attendance: selectedStudent.attendance,
        category: category
    }
}

function getAttendanceStatus(
    selectedStudent: Student
): StudentAttendanceStatus {

    let attendanceStatus: ATTENDANCE_STATUS

    if (selectedStudent.attendance >= 90) {
        attendanceStatus = "Good Attendance"
    } else {
        attendanceStatus = "Poor Attendance"
    }

    return {
        name: selectedStudent.name,
        score: selectedStudent.score,
        attendance: selectedStudent.attendance,
        attendanceStatus: attendanceStatus
    }
}

function getRecommendation(
    selectedStudent: Student
): StudentRecommendation {

    let recommendation: RECOMMENDATION

    if (
        selectedStudent.score >= 90 &&
        selectedStudent.attendance >= 90
    ) {
        recommendation = "Excellent"
    } else if (
        selectedStudent.score >= 75 &&
        selectedStudent.attendance >= 90
    ) {
        recommendation = "Good"
    } else if (
        selectedStudent.score >= 75 &&
        selectedStudent.attendance < 90
    ) {
        recommendation = "Improve Attendance"
    } else {
        recommendation = "Improve Academic Performance"
    }

    return {
        name: selectedStudent.name,
        score: selectedStudent.score,
        attendance: selectedStudent.attendance,
        recommendation: recommendation
    }
}

function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {

    const result: T[] = []

    for (const student of arr) {
        result.push(callback(student))
    }

    return result
}

const studentPassStatus = processStudents(
    students,
    getPassStatus
)

const studentAcademicCategory = processStudents(
    students,
    getAcademicCategory
)

const studentAttendanceStatus = processStudents(
    students,
    getAttendanceStatus
)

const studentRecommendation = processStudents(
    students,
    getRecommendation
)

console.log(`====== PASS / FAIL STATUS ======`)
console.log({ students: studentPassStatus })

console.log(`====== ACADEMIC CATEGORY ======`)
console.log({ students: studentAcademicCategory })

console.log(`====== ATTENDANCE STATUS ======`)
console.log({ students: studentAttendanceStatus })

console.log(`====== FINAL RECOMMENDATION ======`)
console.log({ students: studentRecommendation })