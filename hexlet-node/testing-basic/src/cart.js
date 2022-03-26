import _ from 'lodash'

export default () => ({
  items: [],
  addItem (good, count) {
    this.items.push({ good, count })
  },
  getItems () {
    return this.items
  },
  getCount () {
    return _.sumBy(this.items, (item) => item.count)
  },
  getCost () {
    return _.sumBy(this.items, (item) => item.good.price * item.count)
  }
})
