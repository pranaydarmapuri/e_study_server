import Timetable from '../../_models/Timetable.model'

const pop = `monday.one monday.two monday.three monday.four monday.five monday.six tuesday.one tuesday.two tuesday.three tuesday.four tuesday.five tuesday.six wednesday.one wednesday.two wednesday.three wednesday.four wednesday.five wednesday.six thursday.one thursday.two thursday.three thursday.four thursday.five thursday.six friday.one friday.two friday.three friday.four friday.five friday.six saturday.one saturday.two saturday.three saturday.four saturday.five saturday.six`

export default async (req, res) => {

  //read table
  Timetable
    .findOne({ id: req.params.id })
    .populate(pop)
    .exec(async (er, data) => er ? resstatus(500).json(er) : res.json(data))
}