import _ from 'lodash'

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
    return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count)
  }

  getCount () {
    return _.sumBy(this.getItems(), (goods) => goods.count)
  }
}

export {
  Cart
}
