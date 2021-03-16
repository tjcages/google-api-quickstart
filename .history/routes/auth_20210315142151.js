const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc     Authenticate with Google
// @route    GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc     Dashboard page
// @route    GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router