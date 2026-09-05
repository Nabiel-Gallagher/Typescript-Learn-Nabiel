/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const score = students.map(student => {const totalBenar = student.answers.filter((jawaban, index) => jawaban === correctAnswers[index]).length
    return {
        id: student.id,
        name: student.name,
        totalBenar,
        score: totalBenar * 20
        
    }
})

const lulus = score.filter(students => students.score > 70)

const nilaiTertinggi = score.reduce((tertinggi, current) => current.score > tertinggi.score ? current : tertinggi)

const total = score.reduce((sum, student) => sum + student.score, 0)
const rataRata = total / students.length

console.log(score)
console.log(lulus)
console.log(nilaiTertinggi)
console.log(rataRata)
