import Meetings from '../../_models/Meetings.model'

export default async (req, res) => {

  // getting classList
  Meetings
    .find({ host: req.params.id })
    .populate('section')
    .sort('timings')
    .exec(async (e, d) => e ? res.status(500) : res.json(d))
}