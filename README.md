# sx-verify
用法：npm install sx-verify

> v 0.0.1

  first commit

  var verify = require('sx-verify);
> v 0.0.3

  1、加入了身份证号验证模块：

  verify.idcard(IDCard);

  ```
  return:
  {
    isTrue: false, // 身份证号码是否验证正确
    province: '', // 来自哪个省份 “湖北省”
    birthday: '', // 生日 “1993-09-15”
    sex: '' // 性别 “男” || “女”
  }
  ```