- function*
> 返回一个生成器函数(generator function)，只有next方法被调用时才会去执行具体内容

````javascript
var func_test = function* (num = 1) {
        if (num === 0) {
          return false; // 显示返回
        }
        yield num++;
        let another_num = yield num;
        yield another_num;
        if (num > 10) {
          yield 10;
        } else {
          yield another_num;
        }
    }
var func = func_test(0);          // 执行完成   0-首次next()执行时会使用的参数
// done:表示这个function已经结束,后续继续执行将返回undefined
console.log(func.next().value);   // { value: false, done: true }
console.log(func.next(2).value);  // undefined

var func_1 = func_test();
console.log(func_1.next().value);   // { value: 1, done: false }
console.log(func_1.next(15).value);   // { value: 2, done: false }
console.log(func_1.next(9).value);   // { value: 9, done: false }   9-next()携带的参数会替换掉上一次yield左侧的参数
console.log(func_1.next(8).value);   // { value: 9, done: false }
````
- 
