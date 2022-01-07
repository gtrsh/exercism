import { Money } from '../src/money.js'

test('Money', () => {
  const money1 = new Money(100)
  expect(money1.getValue()).toBe(100)
  expect(money1.exchangeTo('eur').getValue()).toBe(70)
  expect(money1.exchangeTo('usd').getValue()).toBe(100)
  const money2 = new Money(200, 'eur')
  expect(money2.getValue()).toBe(200)
  const money3 = money2.add(money1)
  expect(money3.getValue()).toBe(270)
  const money4 = money1.add(money2)
  expect(money4.getValue()).toBe(340)

  expect(money1.format()).toBe('$100.00')
  expect(money2.format()).toBe('€200.00')

  const money5 = new Money(10000)
  expect(money5.format()).toBe('$10,000.00')

  const money6 = money3.add(money2)
  expect(money6.getValue()).toBe(470)
  const money7 = new Money(10.20)
  expect(money7.format()).toBe('$10.20')
})
