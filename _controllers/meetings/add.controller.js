import Meetings from '../../_models/Meetings.model'

export default async (req, res) => {
  const {
    host, title
  } = req.body
  // adding meeting
  Meetings.create(req.body, async (e, d) => {
    e ? res.status(500).json(e) : res.json({ message: 'Added successfully' })
  })
}