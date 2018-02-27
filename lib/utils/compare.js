 /**
  * 比较两个对象是否完全相等
  */
function deepCompare() {
  var i, l, leftChain, rightChain;

  function compare2Objects(x, y) {
    var p;

    /**
     * JS中 NaN === NaN 会 return false
     * isNaN(undefined) 会 return true
     */
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
      return true;
    }

    /**
     * 如果两个对象指向的是同一地址，辣么~~~
     */
    if (x === y) {
      return true;
    }

    /**
     * 如果x是function，或者是Date/RegExp/String/Number的一个对象
     */
    if (
      (typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString();
    }

    /**
     * 检查是否是一个对象的实例
     */
    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    /**
     * 检查一个对象是否存在于另外一个对象的原型链中
     */
    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }

    /**
     * 检查两个对象的构造数据结构是否一致
     */
    if (x.constructor !== y.constructor) {
      return false;
    }

    /**
     * 检查原型链是否一致
     */
    if (x.prototype !== y.prototype) {
      return false;
    }

    /**
     * 检查环
     */
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false;
    }

    /**
     * 检查对象属性和值是否相等
     */
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }

      switch (typeof (x[p])) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);
          // 如果属性是一个对象，辣么还要比较
          if (!compare2Objects(x[p], y[p])) {
            return false;
          }
          leftChain.pop();
          rightChain.pop();
          break;
        default:
          if (x[p] !== y[p]) {
            return false;
          }
          break;
      }
    }

    /**
     * 其他情况
     */
    return true;
  }

  // 只传一个参数
  if (arguments.length < 1) {
    return true;
  }

  // 传两个以上的参数
  for (i =1, l = arguments.length; i < l; i++) {
    leftChain = [];
    rightChain = [];

    if (!compare2Objects(arguments[0], arguments[i])) {
      return false;
    }
  }
  return true;
}


var a = {
  a: '1',
  b: '2'
}
var d = a;
var b = {
  b: '2',
  a: '1'
}

var c = {
  b: '2',
  a: '1.0'
}

var e = {
  a: {
    a: '1',
    b: '2'
  },

  b: {
    a: '3'
  }
}

var f = {
  a: {
    a: '1',
    b: '2'
  },

  b: {
    a: '3'
  }
}

var g = {
  a: {
    a: '1',
    b: '2.0'
  },

  b: {
    a: '3'
  }
}
console.log(deepCompare(a, b));
console.log(deepCompare(a, c));
console.log(deepCompare(c, b));
console.log(deepCompare(a, d));
console.log(deepCompare(a, b ,d));

console.log(deepCompare(e, f ,g));
console.log(deepCompare(e, f));
console.log(deepCompare(e, g));
