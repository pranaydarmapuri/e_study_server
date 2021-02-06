// ------------------------- Import Statements
import ClassRoom from '../../_models/ClassRoom'
import Dept from '../../_models/Department'

const romanize = num => {
  let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

module.exports.readClassRooms = async (req, res) => {
  // Reading ClassRoom
  ClassRoom
    .find()
    .populate('department')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
}

module.exports.readClassRoom = async (req, res) => {
  // Getting ClassRoom by id
  ClassRoom
    .findById(req.params.id)
    .populate('department')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
}