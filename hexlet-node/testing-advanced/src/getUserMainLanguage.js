import _ from 'lodash'
import { Octokit } from '@octokit/rest'

const getUserMainLanguage = async (username, client = new Octokit()) => {
  const { data } = await client.repos.listForUser({ username })
  if (data.length === 0) {
    return null
  }
  const languages = data.map((repo) => repo.language)
    .reduce((acc, name) => {
      const count = _.get(acc, `${name}.count`, 0) + 1
      return { ...acc, [name]: { count, name } }
    }, {})
  const { name } = _.maxBy(Object.values(languages), (lang) => lang.count)
  return name
}

export {
  getUserMainLanguage
}
