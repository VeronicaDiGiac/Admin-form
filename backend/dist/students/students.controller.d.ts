import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    addStudent(body: {
        name: string;
        surname: string;
        email: string;
        class: string;
    }): import("../models/student.model").Student;
    removeStudent(studentId: number): {
        message: string;
    };
    getStudents(): {
        students: import("../models/student.model").Student[];
    };
}
