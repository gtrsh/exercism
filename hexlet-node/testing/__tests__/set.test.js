import _ from 'lodash';
import { set } from '../src/set';

let data;
let dataCopy;

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  };
  dataCopy = _.cloneDeep(data);
});

test('plain set', () => {
  set(data, 'a', 'value');
  dataCopy.a = 'value';
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  set(data, 'a[0].b.c', true);
  dataCopy.a[0].b.c = true;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  set(data, 'a[0].b.d', false);
  dataCopy.a[0].b.d = false;
  expect(data).toEqual(dataCopy);
});
