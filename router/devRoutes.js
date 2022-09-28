const express = require('express')
const router = express.Router()
const devController = require('../controllers/devController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/input', authMiddleware.ensureAuth, devController.getInput)
router.post('/input', authMiddleware.ensureAuth, authController.postSignup)

module.exports = router