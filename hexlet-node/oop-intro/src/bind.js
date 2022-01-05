const bind = (context, fn) => (...args) => fn.apply(context, args)

/*
Если разложить решение на обычные функции, то получится такой код:
const bind = function (context, fn) {
  return function (...args) { // упаковка входных аргументов в массив
    return fn.apply(context, args);
  };
};

----

Как это работает:

bind обычно вызывается как метод на объекте функции,
поэтому требуется передача аргументом только контекста:
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const bindedFn1 = fn.bind(obj);
в данной задаче bind является отдельной функцией, а не методом, поэтому fn передаётся аргументом:
const bindedFn2 = bind(obj, fn); // возврат функции из функции

bindedFn1(7); // 12
bindedFn2(7); // 12

----

Альтернативное решение:
const bind = (context, fn) => (...args) => fn.call(context, ...args);
*/

export {
  bind
}
