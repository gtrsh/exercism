/*
const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};

// Обратите внимание, что не используется возврат.
// Объекты, как и массивы, передаются по ссылке.
// Изменение переданного объекта внутри отражается на самом объекте:
normalize(lesson);

console.log(lesson);
// {
//   name: 'Деструктуризация',
//   description: 'как удивить колек'
// }
 */

import capitalize from 'lodash/capitalize';

export default (data) => {
    const { name, description } = data;

    data.name = capitalize(name);
    data.description = description.toLowerCase();
};
