class Cart {
  constructor () {
    this.items = []
  }

  addItem (item, count) {
    this.items.push({ item, count })
  }

  getItems () {
    return this.items
  }

  getCost () {
    return (
      this.items
        .map(({ item, count }) => item.price * count)
        .reduce((acc, val) => acc + val)
    )
  }

  getCount () {
    console.log(this.items)
    return (
      this.items
        .map(({ count }) => count)
        .reduce((acc, val) => acc + val)
    )
  }
}

export {
  Cart
}
