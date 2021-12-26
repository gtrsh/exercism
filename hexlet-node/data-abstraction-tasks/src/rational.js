const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b))

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom)
  return { numer: numer / gcd, denom: denom / gcd }
}
const getNumer = (rational) => rational.numer
const getDenom = (rational) => rational.denom

const add = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2)
  )
)

const sub = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2)
  )
)

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString
}
