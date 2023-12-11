import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    year: String,
    department: String,
});