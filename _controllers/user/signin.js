/* 
* ----> Import Startment
*/

import jwt from 'jsonwebtoken'
import User from '../../_models/User'

module.exports = async (req, res) => {

  const { email, photoURL } = req.body

  try {
    const existingUser = await User.findOne({ email: email })
    if (!existingUser)
      return res.status(400).json({ error: "User does not exixts with this Mail Id" })

    const payload = {
      _id: existingUser._id,
      role: existingUser.role,
      id: existingUser.id,
      photoURL: photoURL
    }

    // ->> Create Access Token 
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE
    })

    res.send(accessToken)

  } catch (err) {
    res.status(500).json(err);
  }
}