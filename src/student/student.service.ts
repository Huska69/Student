import { Injectable, HttpException } from '@nestjs/common';
import { STUDENTS } from './students.mock'; 
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {IStudent} from './interfaces/car.interface';
import {StudentDto} from './student.dto';

@Injectable()
export class StudentService {
    private students = STUDENTS; 

    public async getStudent(){ //return the students
        return this.students;
    }

    public async postStudent(student){  //add student element to students array
        return this.students.push(student);
    }

    public async getStudentById(id: number){  //search students
        const student = this.students.find(student => student.id == id);
        if(student){
            throw new HttpException('Not found', 404);
        }
        return student;
    }

    public async deleteStudentById(id: number){  //delete students
        const index = this.students.findIndex(student => student.id == id);
        if(index === -1){
            throw new HttpException('Not found', 404);
        }
        this.students.splice(index, 1);
        return this.students;
    }

    public async putStudentById(id: number, property_name: string, property_value: string){  //change student data
        const index = this.students.findIndex(student => student.id == id);
        if(index === -1){
            throw new HttpException('Not found', 404);
        }
        this.students[index][property_name] = property_value;

        return this.students[index];
    }
}
