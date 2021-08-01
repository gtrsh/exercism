/*
const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
 */

/*
const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
  const groupName = object[key];
  // контейнером группы выступает массив
  const group = acc[groupName] ?? []; // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  // возвращается новый объект аккумулятора
  return { ...acc, [groupName]: group.concat(object) }; // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
}, {});

export default groupBy;
 */

const groupBy = (xs, keyName) => xs.reduce((acc, val) => {
    const key = val[keyName];
    acc[key] = acc[key] ?? [];
    acc[key].push(val);

    return acc;
}, {});

export default groupBy;
