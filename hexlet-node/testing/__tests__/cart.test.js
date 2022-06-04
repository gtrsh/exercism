import makeCart from '../src/cart'

let cart
const goodApple = { name: 'apple', price: 1 }
const goodPineapple = { name: 'pine', price: 2 }

beforeEach(() => {
  cart = makeCart()
})

test('add good to cart', () => {
  cart.addItem(goodApple, 2)
  expect(cart.getItems()).toMatchObject([{ good: goodApple, count: 2 }])
  cart.addItem(goodPineapple, 3)
  expect(cart.getItems()).toMatchObject([
    { good: goodApple, count: 2 },
    { good: goodPineapple, count: 3 }
  ])
  expect(cart.getItems().length).toBe(2)
})

test('count goods in cart', () => {
  cart.addItem(goodApple, 2)
  cart.addItem(goodPineapple, 3)

  expect(cart.getCount()).toBe(5)
})

test('count cost of cart', () => {
  cart.addItem(goodApple, 4)
  cart.addItem(goodPineapple, 2)

  expect(cart.getCost()).toBe(8)
})
