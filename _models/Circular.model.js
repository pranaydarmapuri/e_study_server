import {
  Schema,
  model
} from 'mongoose'

export default model('Circular', new Schema({
  time: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String,
    required: [true, 'Required']
  },
  body: {
    type: String,
    required: [true, 'Required']
  }
}, {
  collection: 'circular'
}))