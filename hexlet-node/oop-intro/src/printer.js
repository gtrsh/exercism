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
