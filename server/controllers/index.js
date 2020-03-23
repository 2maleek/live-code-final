const { Country, User, Report } = require('../models/')
let jwt = require('jsonwebtoken');

class Controller {
  static login(req, res, next){
    let username = req.body.username
    let password = req.body.password
    
    User.findOne({
      where: {
        username
      }
    })
      .then(data => {
        if(data){
          if(data.password === password){
            let token = jwt.sign({ 
              id: data.id,
              name: data.name,
              username: username
            }, 'gogog', { expiresIn: 60 * 60 })
            res.type('application/json')
            res.status(200).json({token, id: data.id, username})
          }else{
            next({status:400, message: "Wrong email or password!"})
          }          
        }else{
          next({status:400, message: "Username not found!"})
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static getCountries(req, res, next) {
    Country.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static getReports(req, res, next) {
    let token = req.headers.usertoken
    let UserId = null
    try{
      let decoded = jwt.verify(token, 'gogog')
      UserId = decoded.id
    }catch(err){
      next({
        status:401,
        message: 'Unauthentication'
      })
    }
    Report.findAll({
      where: {
        UserId
      }   
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static addReport(req, res, next) {
    let token = req.headers.usertoken
    let UserId = null
    let cases = null
    let id = null
    let { report, CountryId } = req.body
    try{
      let decoded = jwt.verify(token, 'gogog')
      res.send(decoded["id"])
    }catch(err){
      next({
        status:401,
        message: 'Unauthentication'
      })
    }
    // Report.create({
    //   report,
    //   CountryId,
    //   UserId
    // })
    //   .then(data => {
    //     id = data.id
    //     res.status(200).json(data)
    //     // return Country.findByPk(CountryId)
    //   })
  }

  static deleteReport(req, res, next) {
    let UserId = null
    try{
      let decoded = jwt.verify(token, 'gogog')
      UserId = decoded.id
    }catch(err){
      next({
        status:401,
        message: 'Unauthentication'
      })
    }
  }
}

module.exports = Controller