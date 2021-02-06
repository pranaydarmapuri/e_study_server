import Meeting from '../../_models/Meetings.model'

export default async (req, res) => {

  // edit Meetings
  Meeting.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, async (e, d) => {
    if (e)
      res.status(400).json(e)
    else
      res.json({ message: 'Updated, successfully.' })
  })
}