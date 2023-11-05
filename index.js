var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (techObj) {
        this.students.push(techObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var school1 = new School("Secondary School");
var school2 = new School("High School");
var s1 = new Student("Mohsin", 27, school2.name);
var s2 = new Student("Ahsaan", 25, school2.name);
var s3 = new Student("Saif Ali", 18, school1.name);
var s4 = new Student("Abdullah", 19, school1.name);
var t1 = new Teacher("Fahad", 35, school1.name);
var t2 = new Teacher("Khurram", 40, school2.name);
// ADD STUDENT
// school1.addStudent(s3)
// school1.addStudent(s4)
// school2.addStudent(s1)
// school2.addStudent(s2)
// ADD TEACHER
school1.addTeacher(t1);
school2.addTeacher(t2);
console.log(school1);
console.log(school2);
