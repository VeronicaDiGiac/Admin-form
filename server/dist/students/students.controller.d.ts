import { StudentsService } from './students.service';
import { RequestStudentDto } from './dto/students.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    addStudent(RequestStudentDto: RequestStudentDto): Promise<import("./interfaces/student.interface").Student>;
    removeStudent(studentId: number): {
        message: string;
    };
    getStudents(): {
        students: import("./interfaces/student.interface").Student[];
    };
}
