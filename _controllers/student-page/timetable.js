import Timetable from '../../_models/Timetable.model'
import Subject from '../../_models/Subject.model'
import SubFac from '../../_models/SubjectFaculty.model'
import Faculty from '../../_models/Employee'

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const hours = ['one', 'two', 'three', 'four', 'five', 'six']

const pop = `monday.one monday.two monday.three monday.four monday.five monday.six tuesday.one tuesday.two tuesday.three tuesday.four tuesday.five tuesday.six wednesday.one wednesday.two wednesday.three wednesday.four wednesday.five wednesday.six thursday.one thursday.two thursday.three thursday.four thursday.five thursday.six friday.one friday.two friday.three friday.four friday.five friday.six saturday.one saturday.two saturday.three saturday.four saturday.five saturday.six`



export default async (req, res) => {

  Timetable
    .findOne({ id: req.params.id })
    .populate(pop)
    .exec(async (e, d) => {
      if (e)
        return res.status(500).json(e)
      SubFac
        .find({ section: req.params.id })
        .populate('faculty subject')
        .exec(async (er, data) => er ? res.status(500).json(err) : res.json({ timetable: d, subFac: data }))
    })

  // let subFacRec = []

  // Timetable.findOne({ id: req.params.id }, async (err, data) => {
  //   if (err)
  //     return res.status(500).json(err)

  //   Subject.find(async (e, subjects) => {
  //     if (e)
  //       return res.status(500).json(e)

  //     for (let day of days) {

  //       let thisDay = data[day]

  //       for (let hour of hours) {

  //         const sub = subjects.find(s => s.code === thisDay[hour])
  //         thisDay[hour] = sub.abbr
  //       }
  //     }

  //     SubFac.find({ section: req.params.id }, async (error, subFacList) => {
  //       if (error)
  //         return res.status(500).json(error)
  //       Faculty.find(async (er, facs) => {
  //         if (er)
  //           return res.status(500).json(er)
  //         subFacList.forEach(list => {
  //           const fac = facs.find(f => f.id === list.faculty)
  //           const sub = subjects.find(s => s.code === list.subject)
  //           subFacRec.push({
  //             ...list._doc,
  //             subject: { ...sub._doc },
  //             faculty: { ...fac._doc }
  //           })
  //         })
  //         res.json({ timetable: { ...data._doc }, subFac: subFacRec })
  //       })
  //     })
  //   })
  // })
}