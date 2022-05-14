import OctokitFake from '../__stubs__/octoKit'
import { getUserMainLanguage } from '../src/getUserMainLanguage'

test('test main flow', async () => {
  const data = [
    { language: 'ruby' },
    { language: 'php' },
    { language: 'java' },
    { language: 'php' },
    { language: 'js' }
  ]
  const client = new OctokitFake(data)
  const mainLanguage = await getUserMainLanguage('linus', client)
  expect(mainLanguage).toEqual('php')
})

test('must return null for user with empty repo', async () => {
  const client = new OctokitFake([])

  const mainLanguage = await getUserMainLanguage('pepe', client)
  expect(mainLanguage).toBeNull()
})
