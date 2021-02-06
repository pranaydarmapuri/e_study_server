import Meetings from '../../_models/Meetings.model'

export default async (req, res) => {

  // Getting Meeting
  Meetings
    .find({ section: req.params.id })
    .populate('host')
    .sort('timings')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
}