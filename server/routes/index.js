const router = require('express').Router()
const Controller = require('../controllers/index')
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('Ok!')
})

router.post('/login', Controller.login)
router.get('/countries', authentication, Controller.getCountries)
router.get('/reports', Controller.getReports)
module.exports = router