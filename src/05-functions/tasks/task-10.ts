/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function calculateCompletionStatistics(enrollments: any[]): any {
    const totalEnrollments = enrollments.length;
    const completedEnrollments = enrollments.filter(e => e.completed).length;
    const incompleteEnrollments = totalEnrollments - completedEnrollments;
    const completionPercentage = (completedEnrollments / totalEnrollments) * 100;

    return {
        totalEnrollments,
        completedEnrollments,
        incompleteEnrollments,
        completionPercentage
    };
}

function calculateAcademicStatistics(enrollments: any[]): any {
    const scores = enrollments.map(e => e.score);
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    const passingStudents = enrollments.filter(e => e.score >= 75).length;

    return {
        highestScore,
        lowestScore,
        averageScore,
        passingStudents
    };
}

function calculateCourseStatistics(enrollments: any[]): any {
    const courseStats: any = {};
    for (const enrollment of enrollments) {
        const course = enrollment.course;
        if (!courseStats[course]) {
            courseStats[course] = {
                totalEnrollments: 0,
                completedEnrollments: 0,
                averageDuration: 0
            };
        }
        courseStats[course].totalEnrollments++;
        if (enrollment.completed) {
            courseStats[course].completedEnrollments++;
        }
    }
    return courseStats;
}

function calculateLearningHours(enrollments: any[]): number {
    return enrollments.reduce((total, e) => total + e.duration, 0);
}

function calculateAverageLearningDuration(enrollments: any[]): number {
    const totalHours = calculateLearningHours(enrollments);
    return totalHours / enrollments.length;
}

function printLearningReport(): void {
    console.log("Completion Statistics:");
    console.log(calculateCompletionStatistics(enrollments));
    console.log("Academic Statistics:");
    console.log(calculateAcademicStatistics(enrollments));
    console.log("Course Statistics:");
    console.log(calculateCourseStatistics(enrollments));
    console.log("Total Learning Hours: " + calculateLearningHours(enrollments));
    console.log("Average Learning Duration: " + calculateAverageLearningDuration(enrollments));
}

printLearningReport();