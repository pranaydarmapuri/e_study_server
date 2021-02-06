import { Schema, model } from 'mongoose'

export default model('Notification', new Schema({
  title: {
    type: String,
    required: [true, 'Required']
  },
  body: {
    type: String,
    required: [true, 'Required']
  },
  sections: [{
    type: Schema.Types.ObjectId,
    ref: 'Section'
  }],
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  },
  time: {
    type: Date,
    default: new Date()
  }
}, {
  collection: 'Notification'
}))