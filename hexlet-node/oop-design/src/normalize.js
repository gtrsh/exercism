const sn = (str) => str.trim().toLowerCase()

const normalize = (data) => (
  data
    .map(({ country, name }) => ({ country: sn(country), city: sn(name) }))
    .map(({ country, city }) => [country, city])
    .sort()
    .reduce((acc, [country, city]) => {
      const citiesAcc = acc[country] ?? []
      const cities = citiesAcc.concat(city)
      const uniqCities = new Set(cities)

      return { ...acc, [country]: [...uniqCities] }
    }, {})
)

export {
  normalize
}
