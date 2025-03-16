"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
let StudentsService = class StudentsService {
    constructor() {
        this.students = [
            {
                studentId: 1,
                name: 'Mario',
                surname: 'Rossi',
                email: 'mario.rossi@example.com',
                className: '3A',
            },
            {
                studentId: 2,
                name: 'Luca',
                surname: 'Bianchi',
                email: 'luca.bianchi@example.com',
                className: '2B',
            },
            {
                studentId: 3,
                name: 'Paola',
                surname: 'Neri',
                email: 'paola.neri@example.com',
                className: '4C',
            },
        ];
        this.studentId = 3;
    }
    addStudent(RequestStudentDto) {
        const newStudent = {
            studentId: this.studentId + 1,
            ...RequestStudentDto,
        };
        this.students.push(newStudent);
        return newStudent;
    }
    removeStudent(studentId) {
        console.log(`Attempting to remove student with ID: ${studentId}`);
        const index = this.students.findIndex((student) => student.studentId === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(`Student with ID ${studentId} removed successfully.`);
            return true;
        }
        console.log(`Student with ID ${studentId} not found.`);
        return false;
    }
    getAllStudents() {
        return this.students;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)()
], StudentsService);
//# sourceMappingURL=students.service.js.map