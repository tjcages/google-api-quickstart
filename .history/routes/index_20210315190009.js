const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc     Login/Landing page
// @route    GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc     Dashboard page
// @route    GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        displayName: req.user.displayName,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        imageUrl: req.user.image,
        createdAt: req.user.createdAt
    })
})

module.exports = router