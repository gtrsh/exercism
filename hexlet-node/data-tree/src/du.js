import _ from 'lodash'
import {
  isFile, getName, getMeta, getChildren
} from '@hexlet/immutable-fs-trees'

const countSize = (node) => {
  if (isFile(node)) {
    const { size } = getMeta(node)
    return size
  }

  return _.sum(
    getChildren(node).map(countSize)
  )
}

const du = (tree) => (
  getChildren(tree)
    .map((node) => [getName(node), countSize(node)])
    .sort((n, m) => m[1] - n[1])
)

export {
  du,
  countSize
}
