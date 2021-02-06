import Notes from '../../_models/LectureNotes'

export default {
  get: async (req, res) => {
    // getting notes
    Notes.find(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  getByFac: async (req, res) => {
    // getting notes of fac
    Notes
      .find({ faculty: req.params.id })
      .populate('sections')
      .exec(async (e, d) => e ? res.status(400).json(e) : res.json(d))
  },
  getBySec: async (req, res) => {
    Notes
      .find({ sections: req.params.id })
      .populate('faculty')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  add: async (req, res) => {
    Notes.create({ ...req.body }, async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'Added' }))
  },
  delete: async (req, res) => {
    Notes.findByIdAndDelete(
      req.params.id,
      async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'File is deleted' })
    )
  }
}