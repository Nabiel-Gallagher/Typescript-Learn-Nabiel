/**
 * A school wants to create a simple student profile system. 
 * Every student has a student ID, name, age, major, and current grade level. 
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 * 
 * The program should allow the school to create multiple student objects with different information.
 * Student Tasks
 * Create a class named with "Student"
 * 
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 * 
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */

class siswa {
    StudentID: string;
    name: string;
    age: number;
    jurusan: string;
    kelas: number;

    constructor(StudentID: string, name: string, age : number, jurusan : string, kelas : number ) {
        this.StudentID = StudentID
        this.name = name
        this.age = age
        this.jurusan = jurusan
        this.kelas = kelas
    }

    kasihKenow(): void {
        console.log("=====Profil Siswa=====")
        console.log(`Student ID : ${this.StudentID}`)
        console.log(`Nama       : ${this.name}`)
        console.log(`Umur       : ${this.age}`)
        console.log(`Jurusan    : ${this.jurusan}`)
        console.log(`Kelas      : ${this.kelas}`)
    }
}

const Nabiel = new siswa("1903", "Nabiel", 16, "RPL", 11)

Nabiel.kasihKenow()