/*
* 数据类型判断
* */
function dataType(v) {
  let type = ['null', 'undefined', 'number', 'string', 'boolean', 'array', 'object', 'function'];
  let object_toString = Object.prototype.toString.call(v);
  let dataType_name = '';
  switch (object_toString) {
    case '[object Null]':
      dataType_name = type[0];
      break;
    case '[object Undefined]':
      dataType_name = type[1];
      break;
    case '[object Number]':
      dataType_name = type[2];
      break;
    case '[object String]':
      dataType_name = type[3];
      break;
    case '[object Boolean]':
      dataType_name = type[4];
      break;
    case '[object Array]':
      dataType_name = type[5];
      break;
    case '[object Object]':
      dataType_name = type[6];
      break;
    case '[object Function]':
      dataType_name = type[7];
      break;
  }
  return dataType_name;
}

/*
* rest参数
* */
// 定义：数组实例，把参数对象所以的参数传递给函数
// 额外特性：callee属性
// 注：注意浏览器版本，不支持IE,Edge浏览器

/*
* 数组去重
* */
// object, for...of方法
function forOf_object(...args) {
  let new_arr = [].concat(...args);
  let new_obj = {};
  let result_arr = [];
  for (let i of new_arr) {
    if (!new_obj[i]) {
      result_arr.push(i);
      new_obj[i] = 1;
    }
  }
}
// new Set方法
function set_deWeight(...args) {
  return Array.from(new Set([].concat(...args)));
}

/*
* 获取多个数组内不相同的元素
* */
function get_diff(...args) {
  return [].concat(...args).filter((v, index, arr) => {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  })
}

/*
* 二维数组排序
* */
function get_diff_twoDimension(standard, ...args) {
  if (typeof standard !== 'string' || typeof standard !== 'number') {
    console.error('parameter: standard, not string or number');
    return false;
  }
  return [].concat(...args).sort((x, y) => {
    return x[standard] - y[standard];
  })
}
