class School {
    name: string;
    students: Student[]=[];
    teachers: Teacher[]=[];
    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }

    addTeacher (techObj:Teacher){
        this.students.push(techObj)
    }


    constructor(name:string){
        this.name=name;
    }
}


class Student {
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string, age: number, schoolName: string) {
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
}

class Teacher extends Student {}

let school1 = new School("Secondary School")
let school2 = new School("High School")


let s1 = new Student("Mohsin", 27, school2.name)
let s2 = new Student("Ahsaan", 25, school2.name)
let s3 = new Student("Saif Ali", 18, school1.name)
let s4 = new Student("Abdullah", 19, school1.name)

let t1 = new Teacher("Fahad", 35, school1.name)
let t2 = new Teacher("Khurram", 40, school2.name)


// ADD STUDENT
// school1.addStudent(s3)
// school1.addStudent(s4)
// school2.addStudent(s1)
// school2.addStudent(s2)

// ADD TEACHER
school1.addTeacher(t1)
school2.addTeacher(t2)

console.log(school1);
console.log(school2);