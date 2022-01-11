import { normalize } from '../src/normalize.js'

test('#1 normalize', () => {
  const raw = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' }
  ]

  const expected = {
    russia: [
      'moscow',
      'samara'
    ],
    turkey: [
      'antalia',
      'istanbul'
    ],
    usa: [
      'miami'
    ]
  }

  const actual = normalize(raw)
  expect(actual).toEqual(expected)
})

test('#2 normalize', () => {
  const raw = [
    {
      name: 'pariS ',
      country: ' france'
    },
    {
      name: ' madrid',
      country: ' sPain'
    },
    {
      name: 'valencia',
      country: 'spain'
    },
    {
      name: 'marcel',
      country: 'france'
    },
    {
      name: ' madrid',
      country: ' sPain'
    }
  ]

  const expected = {
    france: [
      'marcel',
      'paris'
    ],
    spain: [
      'madrid',
      'valencia'
    ]
  }

  const actual = normalize(raw)
  expect(actual).toEqual(expected)
})
