import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('add')
  addStudent(
    @Body()
    body: {
      name: string;
      surname: string;
      email: string;
      class: string;
    },
  ) {
    return this.studentsService.addStudent(
      body.name,
      body.surname,
      body.email,
      body.class,
    );
  }

  @Delete('remove/:studentId')
  removeStudent(@Param('studentId') studentId: number) {
    try {
      const success = this.studentsService.removeStudent(Number(studentId));
      if (!success) {
        throw new Error('Student not found');
      }
      return { message: 'Student removed successfully' };
    } catch (error) {
      console.error(
        `Error while removing student with ID ${studentId}: ${error.message}`,
      );
      throw error;
    }
  }

  @Get('list')
  getStudents() {
    const students = this.studentsService.getAllStudents();
    return { students };
  }
}
