const Province = {
  '11': '北京市',
  '12': '天津市',
  '13': '河北省',
  '14': '山西省',
  '15': '内蒙古自治区',
  '21': '辽宁省',
  '22': '吉林省',
  '23': '黑龙江省',
  '31': '上海市',
  '32': '江苏省',
  '33': '浙江省',
  '34': '安徽省',
  '35': '福建省',
  '36': '江西省',
  '37': '山东省',
  '41': '河南省',
  '42': '湖北省',
  '43': '湖南省',
  '44': '广东省',
  '45': '广西壮族自治区',
  '46': '海南省',
  '50': '重庆市',
  '51': '四川省',
  '52': '贵州省',
  '53': '云南省',
  '54': '西藏自治区',
  '61': '陕西省',
  '62': '甘肃省',
  '63': '青海省',
  '64': '宁夏回族自治区',
  '65': '新疆维吾尔自治区',
  '71': '台湾',
  '81': '香港',
  '82': '澳门',
  '91': '国外'
};

module.exports = {
  checkIDCard: function(number) {
    var IDCardInfo = {
      isTrue: false,
      province: '',
      birthday: '',
      gender: ''
    };
    number = changeFivteenToEighteen(number);
    if (checkLength(number) && checkProvince(number) && checkParity(number)) {
      IDCardInfo.isTrue = true;
      IDCardInfo.province = Province[number.substr(0, 2)];
      IDCardInfo.birthday = (number.substr(6, 8)).replace(/(.{4})(.{2})/, '$1-$2-');
      IDCardInfo.gender = isSingular(number.substr(14, 3)) ? '男' : '女';
      return IDCardInfo;
    } else {
      return IDCardInfo;
    }
  }
};

// utils
// 校验位数
function checkLength(number) {
  let RegExp = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
  if (RegExp.test(number) === false) {
    return false;
  }
  return true;
}

// 取身份证前两位,校验省份 
function checkProvince(number) {
  var province = number.substr(0, 2);
  if (typeof Province[province] === 'undefined') {
    return false;
  }
  return true;
}

// 校验位的检测
function checkParity(number) {
  var len = number.length;
  if (len == '18') {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardTemp = 0,
      i, valnum;
    for (i = 0; i < 17; i++) {
      cardTemp += number.substr(i, 1) * arrInt[i];
    }
    valnum = arrCh[cardTemp % 11];
    if (valnum == number.substr(17, 1)) {
      return true;
    }
    return false;
  }
  return false;
}
// 15位转18位身份证号
function changeFivteenToEighteen(number) {
  if (number.length == '15') {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardTemp = 0,
      i;
    number = number.substr(0, 6) + '19' + number.substr(6, number.length - 6);
    for (i = 0; i < 17; i++) {
      cardTemp += number.substr(i, 1) * arrInt[i];
    }
    number += arrCh[cardTemp % 11];
    return number;
  }
  return number;
}
// 判断是否为偶数
function isSingular(value) {
  return value % 2 == '0' ? false : true;
}
