// ============================ Import Statements ////////////
const bcrypt = require('bcrypt')
const userSchema = require('../../_models/User')
import Employee from '../../_models/Employee'
import Student from '../../_models/Student'
import jwt from "jsonwebtoken"
// ------------------------- Import Statements


// ==============---------------------> Password hashing  //////////
const getHashedPassword = async (pwd) => await bcrypt.hash(pwd, await bcrypt.genSalt())

module.exports = async (req, res) => {

  let { email, id, password, rePassword } = req.body

  if (password !== rePassword)
    return res.status(400).json({
      "errors": {
        "rePassword": {
          "message": "Password doesn't matched",
        }
      }
    })

  if (!id)
    return res.status(400).json({ message: "Id/Roll no is required" })
  const role = id.length == 5 ? 'faculty' : 'student'
    

  const hashedPassword = await getHashedPassword(password)

  let newUser = {
    email: email,
    id: id,
    password: hashedPassword,
    role: role
  }
  try {
    const user = role == 'faculty' ? Employee.findOne({ id: newUser.id }) : Student.findOne({ id: newUser.id })
    if (!user)
      return res.status(400).json({ error: `No ${role} exixts with id: ${newUser.id}` })
  } catch (e) {
    res.status(400).json({ message: e })
  }

  userSchema.create(newUser, async (error, data) => {
    if (error)
      res.status(400).json(error)
    else {
      try {
        const payload = {
          _id: data._id,
          role: data.role,
          id: data.id
        }
        // let user = await userSchema.findOne({ id: '35135' })
        // res.json({ message: 'Successfully, registered' })
        // ->> Create Access Token 
        const accessToken = await jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

        res.send(accessToken)
      } catch (e) {
        res.status(500).json(e)
      }
    }
  })
}