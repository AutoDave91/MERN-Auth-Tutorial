const User = require('../models/userModel.js')

// login
const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' })
}

// signup
const signupUser = async (req, res) => {
    res.json({ mssg: 'signup user' })
}

module.exports = { signupUser, loginUser }