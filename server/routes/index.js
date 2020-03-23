const router = require('express').Router()
const Controller = require('../controllers/index')

router.get('/', (req, res) => {
  res.send('Ok!')
})

router.post('/login', Controller.login)
router.get('/countries', Controller.getCountries)
// router.get('/reports', Controller.getReports)
module.exports = router