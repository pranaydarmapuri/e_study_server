import {
  Schema,
  model
} from 'mongoose'

const schema = {
  one: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  },
  two: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  },
  three: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  },
  four: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  },
  five: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  },
  six: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: [true, 'Requried']
  }
}

export default model('Timetable', new Schema({
  id: {
    type: String,
    required: [true, 'Section Id required']
  },
  monday: { ...schema },
  tuesday: { ...schema },
  wednesday: { ...schema },
  thursday: { ...schema },
  friday: { ...schema },
  saturday: { ...schema }
}, {
  collection: 'timetables'
}))