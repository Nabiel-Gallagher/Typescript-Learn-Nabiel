/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let tertinggi: number = scores[0]

  for (let i = 0; i <scores.length; i++) {
    if (scores[i] > tertinggi) {
      tertinggi = scores[i]
    }
  }
  return tertinggi
}

function findLowestScore(scores: number[]): number {
  let terendah: number = scores[0]

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < terendah) {
      terendah = scores[i]
    }
  }
  return terendah
}

function calculateAverage(scores: number[]): number {
  let total: number = 0

  for (let i = 0; i < scores.length; i++) {
    total += scores[i]
  }
  return total / scores.length
}

function countPassedStudents(scores: number[]): number {
  let siswaLulus: number = 0

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      siswaLulus++
    }
  }
  return siswaLulus
}

console.log("Nilai Tertinggi : " + findHighestScore(scores))
console.log("Nilai Terendah : " + findLowestScore(scores))
console.log("Rata Rata Nilai : " + calculateAverage(scores))
console.log("Siswa Yang Lulus : " + countPassedStudents(scores))