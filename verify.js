var sx_verify = {
 
  //去身份证信息验证 
  idcard: function (idcard) {
    var idcardInfo = {
      isTrue: false,
      province: '',
      birthday: '',
      sex: ''
    }

    if (idcard.length !== 15 && idcard.length !== 18) {
      return idcardInfo;
    } else if (!mapAddr[idcard.substr(0, 2)]) {
      return idcardInfo;
    } else {
      if (idcard.length === 15) {
        idcardInfo.isTrue = true;
        idcardInfo.province = mapAddr[idcard.substr(0, 2)];
        idcardInfo.birthday = ('19' + idcard.substr(6, 6)).replace(/(.{4})(.{2})/, '$1-$2-');
        idcardInfo.sex = isSingular(idcard.substr(12, 3)) ? '男' : '女';
        return idcardInfo;
      } else if (idcard.length === 18 && verifyID(idcard)) {
        idcardInfo.isTrue = true;
        idcardInfo.province = mapAddr[idcard.substr(0, 2)];
        idcardInfo.birthday = (idcard.substr(6, 8)).replace(/(.{4})(.{2})/, '$1-$2-');
        idcardInfo.sex = isSingular(idcard.substr(14, 3)) ? '男' : '女';
        return idcardInfo;
      } else {
        return idcardInfo;
      }

    }
  },
}

exports.sx_verify = sx_verify;

// static variable

var mapAddr = {
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
}

// helper
function isSingular(value) {
  return value % 2 == '0' ? false : true;
}

function verifyID(id) {
  var wi = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]; //前十七位的加权因子
  var sum = 0;
  for (let i = 0; i < wi.length; i++) {
    sum += parseInt(id.charAt(i)) * wi[i];
  }
  var c = sum % 11;

  var ch = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  var code = ch[c];
  var last = id.charAt(17);
  last = last == 'x' ? 'X' : last;
  return last == code;
}

// test

var idcard1 = '420621199309159313';

console.log('1、',sx_verify.idcard(idcard1));
