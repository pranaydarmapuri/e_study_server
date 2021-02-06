/**
 * 
 *  ------------ Classes Schema
 */
import { Schema, model } from 'mongoose'

// --------- Schema
export default model('Section', new Schema({
  displayName: {
    type: String,
    unique: [true, 'Section already exists'],
    required: [true, 'Name is required']
  },
  name: {
    type: String,
    required: [true, 'Enter class name']
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: [true, 'Enter department of class']
  },
  year: {
    type: Number,
    required: [true, 'Enter year']
  }
}, {
  collection: 'sections'
}))