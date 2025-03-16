import { Injectable } from '@nestjs/common';
import { Student } from '../models/student.model';

@Injectable()
export class StudentsService {
  private readonly students: Student[] = [
    {
      studentId: 1,
      name: 'Mario',
      surname: 'Rossi',
      email: 'mario.rossi@example.com',
      class: '3A',
    },
    {
      studentId: 2,
      name: 'Luca',
      surname: 'Bianchi',
      email: 'luca.bianchi@example.com',
      class: '2B',
    },
    {
      studentId: 3,
      name: 'Paola',
      surname: 'Neri',
      email: 'paola.neri@example.com',
      class: '4C',
    },
  ];

  addStudent(
    name: string,
    surname: string,
    email: string,
    className: string,
  ): Student {
    const newStudent: Student = {
      studentId: this.students.length + 1,
      name,
      surname,
      email,
      class: className,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  removeStudent(studentId: number): boolean {
    console.log(`Attempting to remove student with ID: ${studentId}`);
    const index = this.students.findIndex(
      (student) => student.studentId === studentId,
    );
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`Student with ID ${studentId} removed successfully.`);
      return true;
    }
    console.log(`Student with ID ${studentId} not found.`);
    return false;
  }

  getAllStudents(): Student[] {
    return this.students;
  }
}
