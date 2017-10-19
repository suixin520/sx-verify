var VerifyPhone = require('./utils/phone');
var VerifyIDCard = require('./utils/IDCard');

var sx_verify = {
 
  /**
   * 身份证号码验证
   * @returns {
   *   isTrue: true | false  // 身份证是否正确
   *   province: '湖北省'  // 省份
   *   birthday: '2017-10-10' // 生日
   *   gender: '男' | '女'  // 性别
   * }
   */
  idcard: function (IDCard) {
    return VerifyIDCard.checkIDCard(IDCard);
  },

  /**
   * 手机号码验证
   * @return true || false
   */
  phone: function(phoneNumber) {
    return VerifyPhone.checkPhone(phoneNumber);
  }
}

module.exports = sx_verify;