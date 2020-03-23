const Country = require('../models/country')
const User = require('../models/user')
let jwt = require('jsonwebtoken');

class Controller {
  static login(req, res, next){
    let username = req.body.username
    let password = req.body.password

    res.send(password)
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
            }, process.env.SECRET, { expiresIn: 60 * 60 })
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
        console.log(err)
        next(err)
      })
  }

  static getCountries(req, res, next) {
    Country.findAll()
      .then(data => {
        res.status(200).json(data)
      })
  }
}

module.exports = Controller