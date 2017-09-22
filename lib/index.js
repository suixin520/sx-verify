var verify = require('./verify')

module.exports = {
  idcard: function(idcard) {
    return verify.sx_verify.idcard(idcard);
  }
}