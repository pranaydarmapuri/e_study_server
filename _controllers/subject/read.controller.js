// -------->>>>>> Import Statements
import Subject from '../../_models/Subject.model'

//-----------> fetching all subjects
const readAllSubjects = async (req, res) => {
  Subject
    .find()
    .populate('department section')
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}

// ----------> Getting Subject by id
const readSubject = async (req, res) => {
  Subject
    .findById(req.params.id)
    .populate('department section')
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}

// -----------> Export Statements
export { readAllSubjects, readSubject }