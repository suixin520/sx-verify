/**
 * 电子邮箱的验证
 * @param {email} email 
 */
module.exports = {
  checkEmail: function(email) {
    var RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RegExp.test(email);
  }
}