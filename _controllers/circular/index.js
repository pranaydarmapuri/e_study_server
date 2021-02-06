import Circular from '../../_models/Circular.model'

export default {
  add: async (req, res) => {
    Circular.create(req.body, async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'Added Successfully' }))
  },
  delete: async (req, res) => {
    Circular
      .findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: 'Deleted!' }))
      .catch(e => res.status(500).json(e))
  },
  get: async (req, res) => {
    Circular.find(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  }
}