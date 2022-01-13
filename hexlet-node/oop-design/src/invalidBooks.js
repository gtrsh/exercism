import * as yup from 'yup'

const GENRES = [
  'drama', 'horror', 'fantasy', 'classic'
]

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number(),
  link: yup.string().min(1).url(),
  genre: yup.string().oneOf(GENRES)
})

const getInvalidBooks = (xs) => xs.filter((book) => !schema.isValidSync(book))

export {
  getInvalidBooks
}
