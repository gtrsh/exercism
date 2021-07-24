/*
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
 */

export default (xs) => {
    const listOfDefinitions = xs.map(([term, def]) => (`<dt>${term}</dt><dd>${def}</dd>`));
    return listOfDefinitions.length === 0 ? '' : `<dl>${listOfDefinitions.join('')}</dl>`;
};
