import { Schema, model } from 'mongoose'

export default model('Assigment', new Schema({
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Required']
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Required']
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Required']
  },
  fileId: {
    type: String,
    required: [true, 'Required']
  },
  fileName: {
    type: String,
    required: [true, 'Required']
  }
}, {
  collection: 'assignments'
}))