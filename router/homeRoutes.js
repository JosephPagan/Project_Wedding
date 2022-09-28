const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', homeController.getIndex)
router.get('/rsvp', authMiddleware.ensureAuth, homeController.getRSVP)
router.put('/rsvp', authMiddleware.ensureAuth, homeController.putRSVP)
router.get('/success', authMiddleware.ensureAuth, homeController.getSuccess)

module.exports = router
