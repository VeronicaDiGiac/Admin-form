import { Student } from './interfaces/student.interface';
import { RequestStudentDto } from './dto/students.dto';
export declare class StudentsService {
    private readonly students;
    private readonly studentId;
    addStudent(RequestStudentDto: RequestStudentDto): Student;
    removeStudent(studentId: number): boolean;
    getAllStudents(): Student[];
}
