import _ from 'lodash'
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta
} from '@hexlet/immutable-fs-trees'

const compressImages = (tree) => {
  const meta = _.cloneDeep(getMeta(tree))
  const childs = _.cloneDeep(getChildren(tree)).map((child) => {
    if (!isFile(child) || !getName(child).endsWith('.jpg')) {
      return child
    }

    const meta = _.cloneDeep(getMeta(child))
    return mkfile(getName(child), { ...meta, size: meta.size / 2 })
  })

  return mkdir(getName(tree), childs, meta)
}

export {
  compressImages
}
