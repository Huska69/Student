import { Body, Controller, Delete, Get, Post, Put, Param, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import {StudentDto} from './student.dto';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}

    @Get()
    async getStudent(){
        return this.studentService.getStudent();
    }

    @Post()
    public postStudent(@Body() student: StudentDto ){
        return this.studentService.postStudent(student);
    }

    @Get(':id')
    public getStudentById(@Param('id') id: number){
        return this.studentService.getStudentById(id);
    }

    @Delete(':id') 
    public deleteStudentById(@Param('id') id: number){
        this.studentService.deleteStudentById(id);
    }

    @Put(':id')
    public putStudentById(@Param('id') id: number, @Query() query){
        const property_name = query.property_name;
        const property_value = query.property_value;
        return this.studentService.putStudentById(id, property_name, property_value);
    }
}

