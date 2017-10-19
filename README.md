# sx-verify

## Abstract

&ensp;&ensp; This is a instrument to verify various of number, such as IDCard、phone number...

## Installation

&ensp;&ensp; npm install sx-verify --save

## Using

&ensp;&ensp; As follows:
```
var sx = require('sx-verify');

/**
  @return{
    isTrue: false, // The IDCard is correct or incorrect  true | false
    province: '湖北省', // Where from are you on the basis of IDCard
    birthday: '1990-01-01', // The birthday on the basis of IDCard
    sex: '男' // The sex on the basis of IDCard  '男' | '女'
  }
*/
var IDCard = '42***';
sx.idcard(IDCard);

/**
  @return true | false
*/
var phoneNumber = '131***';
sx.phone(phoneNumber);
```