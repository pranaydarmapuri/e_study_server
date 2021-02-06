/**
 * -------------->>>>> Import Statements
 */
import { Schema, model } from 'mongoose'

export default model('SubjectFaculty', (new Schema({
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Subject is required']
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Subject is required']
  },
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: [true, 'Subject is required']
  }
}, {
  collection: 'subjectFaculty'
})))