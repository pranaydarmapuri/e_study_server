import Assignment from '../../_models/Assigments.model'

export default {
  add: async (req, res) => {
    Assignment
      .create(req.body, async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  getByStudent: async (req, res) => {
    Assignment
      .find({ student: req.params.id })
      .populate('subject')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  getByFaculty: async (req, res) => {
    Assignment
      .find({ faculty: req.params.id })
      .populate('subject student')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  delete: async (req, res) => {
    Assignment.findByIdAndDelete(
      req.params.id,
      async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'File is deleted' })
    )
  }
}