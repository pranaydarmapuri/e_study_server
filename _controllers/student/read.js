// ------------------------- Import Statements
const Student = require('../../_models/Student')

module.exports.readStudents = async (req, res) => {

  // Reading Students
  Student
    .find()
    .populate('department section')
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}

module.exports.readStudent = async (req, res) => {

  // Getting student by id
  Student
    .findById(req.params.id)
    .populate('department section')
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}

module.exports.readStudentByRoll = async (req, res) => {
  // Getting student by id
  Student
    .findOne({ id: req.params.id })
    .populate('department section')
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}