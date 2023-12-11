import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    //MongooseModule.forRoot('mongodb://localhost/student_manager'),
  ],
})
export class AppModule {}
