import { Student } from '../models/student.model';
export declare class StudentsService {
    private readonly students;
    addStudent(name: string, surname: string, email: string, className: string): Student;
    removeStudent(studentId: number): boolean;
    getAllStudents(): Student[];
}
