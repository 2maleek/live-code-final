const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try{
    const token = req.headers.usertoken
    let decoded = jwt.verify(token, 'gogog')
    next()
  }catch(err){
    next({
      status:401,
      message: 'Unauthentication'
    })
  }
}