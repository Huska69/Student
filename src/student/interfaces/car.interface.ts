import {Document} from 'mongoose';

export interface IStudent extends Document {
    readonly id: Number;
    readonly name: String;
    readonly year: String;
    readonly department: String;
}