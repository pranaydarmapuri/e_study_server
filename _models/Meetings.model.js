import {
  Schema,
  model
} from 'mongoose'

export default model('Meetings', new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Host is required']
  },
  timings: {
    type: Date,
    required: [true, 'Time is required']
  },
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: [true, 'Section is requried']
  },
  link: {
    type: String,
    required: [true, 'Required']
  }
}, {
  collection: 'meetings'
}))