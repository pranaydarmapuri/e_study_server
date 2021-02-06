import Noti from '../../_models/Notification.model'

export default {
  add: async (req, res) => Noti.create(
    req.body, async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'Notifiction has send' })
  ),
  get: async (req, res) => {
    Noti
      .find()
      .populate('sections sender')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  getBySender: async (req, res) => {
    Noti
      .find({ sender: req.params.id })
      .populate('sections sender')
      .sort('-time')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  getBySection: async (req, res) => {
    Noti
      .find({ sections: req.params.id })
      .populate('sender section')
      .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
  },
  delete: async (req, res) => {
    Noti
      .findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: 'Deleted!' }))
      .catch(e => res.status(500).json(e))
  }
}