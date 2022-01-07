const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

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

Money.prototype.exchangeTo = function (newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];

  return new Money(newValue, newCurrency);
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
