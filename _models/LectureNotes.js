import {
  Schema,
  model
} from 'mongoose'

export default model('Notes', new Schema({
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: [true, 'Required']
  },
  sections: [{
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: [true, 'Required']
  }],
  fileId: {
    type: String,
    required: [true, 'Required']
  },
  fileName: {
    type: String,
    required: [true, 'Required']
  }
}, {
  collection: 'notes'
}))