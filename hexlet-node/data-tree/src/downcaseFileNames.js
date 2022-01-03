import _ from 'lodash'
import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren
} from '@hexlet/immutable-fs-trees'

const downcaseFileNames = (node) => {
  const name = getName(node)
  const newMeta = _.cloneDeep(getMeta(node))

  if (isFile(node)) {
    return mkfile(name.toLowerCase(), newMeta)
  }

  const childs = getChildren(node)

  const newChilds = childs.map((ch) => downcaseFileNames(ch))
  return mkdir(name, newChilds, newMeta)
}

export {
  downcaseFileNames
}
