import _ from 'lodash'
import {
  mkdir, mkfile, isFile, getName, getChildren, isDirectory
} from '@hexlet/immutable-fs-trees'

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf')
    ])
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data')
  ]),
  mkfile('hosts'),
  mkfile('resolve')
])

const countFiles = (node) => {
  if (isFile(node)) {
    return 1
  }

  const children = getChildren(node)
  const descCount = children.map(countFiles)
  return _.sum(descCount)
}

const getSubdirectoriesInfo = (tree) => {
  const children = getChildren(tree)
  return children
    .filter(isDirectory)
    .map((node) => [getName(node), countFiles(node)])
}

console.log(
  _.isEqual(getSubdirectoriesInfo(tree), [['etc', 1], ['consul', 2]])
)
