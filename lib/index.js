var verify = require('./verify')

module.exports = {
  idcard: function(idcard) {
    return verify.sx_verify.idcard(idcard);
  },
  phone: function(phoneNumber) {
    return verify.sx_verify.phone(phoneNumber);
  },
}