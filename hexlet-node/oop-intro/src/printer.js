const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};

// Прямой запуск
printer.print();

// Хотим запустить метод print через секунду
// Обязательно запустите этот код на своем компьютере
// чтобы почувствовать то как работает setTimeout
setTimeout(printer.print, 1000);

setTimeout(() => printer.print(), 1000);

const boundPrint = printer.print.bind(printer, 'hey!');
setTimeout(boundPrint, 1000);

// func.apply(thisArg, [ argsArray])
const print = printer.print;
print.apply(printer, ['how-how']); // how-how, Hexlet

// func.call([thisArg[, arg1, arg2, ...argN]])
print.call(printer, 'how-how'); // how-how, Hexlet
