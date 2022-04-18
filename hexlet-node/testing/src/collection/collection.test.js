// @ts-check
import getFunction from './collection-fn.js';
const get = getFunction();

// Проверка, что функция возвращает нужное значение
// по существующему ключу (прямой тест на работоспособность)
if (get({ hello: 'world' }, 'hello') !== 'world') {
  throw new Error('test failed: get existed key')
}

// Проверка на то, что возвращается значение по умолчанию, если ключа нет
if (get({}, 'hello', 'def') !== 'def') {
  throw new Error('test failed: get default key')
}
// Проверка на то, что возвращается значение по существующему ключу,
// даже если передано значение по умолчанию (пограничный случай)
if (get({ hello: 'world' }, 'hello', 'kek') !== 'world') {
  throw new Error('test failed: get existed key with default')
}
