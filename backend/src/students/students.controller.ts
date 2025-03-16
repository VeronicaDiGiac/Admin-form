import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { RequestStudentDto } from './dto/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('add')
  async addStudent(@Body() RequestStudentDto: RequestStudentDto) {
    return this.studentsService.addStudent(RequestStudentDto);
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
