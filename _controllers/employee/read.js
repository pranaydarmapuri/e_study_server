/**
 * ============== Import Statements
 */
const Employee = require('../../_models/Employee')

module.exports.readEmployees = async (req, res) => {

  // getting all employees list
  Employee
    .find()
    .populate('department')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
}

module.exports.readEmployee = async (req, res) => {

  // fetching by id
  Employee
    .findById(req.params.id)
    .populate('department')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))

}

module.exports.readEmployeeById = async (req, res) => {

  // fetching by employee id
  Employee
    .findOne({ id: req.params.id })
    .populate('department')
    .exec(async (e, d) => e ? res.status(500).json(e) : res.json(d))
}