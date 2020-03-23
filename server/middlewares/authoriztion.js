const { Report } = require('../models')
const decode = require('../helpers/decode')

module.exports = (req, res, next) => {
  let id = Number(req.params.id)
  const userData = decode(req.headers.usertoken)
  Report.findByPk(id)
  .then(data =>{
    if(!data){
      next({
        status: 404,
        message: "Report not found"
      })
    }else{
      if(Number(data.UserId) === Number(userData.id)){
        next()
      }else{
        next({
          status: 401,
          message: "Unauthorized"
        })
      }
    }
  })
  .catch(err => {
    next(err)
  })
}