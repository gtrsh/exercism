const make = (numer, denom) => ({
  numer,
  denom,
  getNumer () {
    return this.numer
  },
  getDenom () {
    return this.denom
  },
  toString () {
    return `${this.getNumer()}/${this.getDenom()}`
  },
  add (rational) {
    const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom()
    const newDenom = this.getDenom() * rational.getDenom()
    return make(newNumer, newDenom)
  }
})

export default make
