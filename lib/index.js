var verify = require('./verify')

module.exports = {
  idcard: function(idcard) {
    return verify.idcard(String(idcard));
  },
  phone: function(phoneNumber) {
    return verify.phone(phoneNumber);
  },
  email: function(email) {
    return verify.email(email);
  }
}