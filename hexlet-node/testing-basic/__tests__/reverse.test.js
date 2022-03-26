import reverse from '../src/reverse'

test('reversing', () => {
  expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
})
