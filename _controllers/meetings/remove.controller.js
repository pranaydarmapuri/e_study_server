import Meeting from '../../_models/Meetings.model'

export default async (req, res) => {

  // removing class
  Meeting.findByIdAndDelete(
    req.params.id,
    async (e, d) => e ? res.status(500).json(e) : res.json({ message: 'Deleted!' })
  )
}