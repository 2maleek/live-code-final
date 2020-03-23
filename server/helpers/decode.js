const jwt = require('jsonwebtoken')

module.exports = function(token){
  try {
    var decoded = jwt.verify(token, 'gogog');
    return decoded
  } catch(err) {
    res.status(401).json({
      message: 'Forbidden Access'
    });
  }
}