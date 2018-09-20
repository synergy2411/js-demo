"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
exports.MAGIC_NUMBER = Math.random() * 10;
