import { generate } from '../src/genFS.js'

test('generate', () => {
  const expectation = ({
    name: 'nodejs-package',
    meta: { hidden: true },
    children: [
      { name: 'Makefile' },
      { name: 'README.md' },
      { name: 'dist' },
      {
        name: '__tests__',
        children: [
          { name: 'half.test.js', meta: { type: 'text/javascript' } }
        ]
      },
      { name: 'babel.config.js', meta: { type: 'text/javascript' } },
      {
        name: 'node_modules',
        meta: { owner: 'root', hidden: false },
        children: [
          {
            name: '@babel',
            children: [
              {
                name: 'cli',
                children: ([
                  {
                    name: 'LICENSE'
                  }
                ])
              }
            ]
          }
        ]
      }
    ]
  })
  const tree = generate()

  expect(tree).toMatchObject(expectation)
})
