const EUR_TO_USD_RATIO = 0.7
const USD_TO_EUR_RATIO = 1.2

const Money = function (value, currency = 'usd') {
  this.value = value
  this.currency = currency
}

Money.prototype.getValue = function () {
  return this.value
}

Money.prototype.getCurrency = function () {
  return this.currency
}

Money.prototype.exchangeTo = function (currency) {
  if (this.getCurrency() === currency) {
    return new Money(this.getValue(), this.getCurrency())
  }

  if (currency === 'usd') {
    return new Money(this.getValue() * USD_TO_EUR_RATIO, currency)
  }

  if (currency === 'eur') {
    return new Money(this.getValue() * EUR_TO_USD_RATIO, currency)
  }
}

Money.prototype.add = function (money) {
  const moneyAmount = (
    (this.getCurrency() !== money.getCurrency())
      ? (this.getCurrency() === 'usd')
          ? money.exchangeTo('usd').getValue()
          : money.exchangeTo('eur').getValue()
      : money.getValue()
  )

  return new Money(this.getValue() + moneyAmount, this.getCurrency())
}

Money.prototype.format = function () {
  return this.getValue().toLocaleString(undefined, {
    style: 'currency',
    currency: this.getCurrency().toUpperCase()
  })
}

export {
  Money
}
