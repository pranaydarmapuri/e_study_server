import SubjectFaculty from '../../_models/SubjectFaculty.model'
import Department from '../../_models/Department'
import Section from '../../_models/ClassRoom'
import Faculty from '../../_models/Employee'
import Subject from '../../_models/Subject.model'

const readSubFacList = async (req, res) => {

  // Read Subject Faculty List
  // SubjectFaculty.find(
  //   async (e, d) => e ? res.status(400).json(e) : res.json(d)
  // )
  SubjectFaculty
    .find()
    .populate('subject faculty section')
    .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
  // SubjectFaculty.aggregate([{
  //   $lookup: {
  //     from: 'Subject',
  //     localField: 'subject',
  //     foreignField: '_id',
  //     as: 'subject'
  //   }
  // }, {
  //   $lookup: {
  //     from: 'Classes',
  //     localField: 'section',
  //     foreignField: '_id',
  //     as: 'section'
  //   }
  // }, {
  //   $lookup: {
  //     from: 'Employee',
  //     localField: 'faculty',
  //     foreignField: '_id',
  //     as: 'faculty'
  //   }
  // }
  // ], (e, data) => {
  //   e ? res.status(500).json(e) : res.json(data)
  // })
}

const readSubFacByClass = async (req, res) => {

  // Read Subject-Faculty of class
  SubjectFaculty
    .find({ section: req.params.id })
    .populate('subject faculty section')
    .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
}

const readSubFacByFaculty = async (req, res) => {

  // Read list of Subject of Faculty 
  SubjectFaculty
    .find({ faculty: req.params.id })
    .populate('subject section')
    .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
}

const readSubFacBySubject = async (req, res) => {

  // Read List of faculty of given subject
  SubjectFaculty.find({ subject: req.params.id }, async (e, d) => {
    e ? res.status(400).json(e) : res.json(d)
  })
}

const getWithAllAttributes = async (req, res) => {

  SubjectFaculty
    .find()
    .populate('subject faculty section')
    .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
}

const timeTable = async (req, res) => {

  SubjectFaculty
    .find({ section: req.params.id })
    .populate('subject faculty section')
    .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
}


export {
  readSubFacByClass,
  readSubFacList,
  readSubFacBySubject,
  readSubFacByFaculty,
  getWithAllAttributes,
  timeTable,
}