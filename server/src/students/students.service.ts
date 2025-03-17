import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { RequestStudentDto } from './dto/students.dto';

@Injectable()
export class StudentsService {
  private readonly students: Student[] = [
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

  // In assenza di DB ho creato una varibile per simulare l'autoincrement.
  private readonly studentId = 3;

  addStudent(RequestStudentDto: RequestStudentDto): Student {
    const newStudent = {
      studentId: this.studentId + 1,
      ...RequestStudentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  removeStudent(studentId: number): boolean {
    const index = this.students.findIndex(
      (student) => student.studentId === studentId,
    );
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }

  getAllStudents(): Student[] {
    return this.students;
  }
}
