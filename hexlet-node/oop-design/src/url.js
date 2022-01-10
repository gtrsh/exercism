import { URL } from 'url'
import _ from 'lodash'

class Url {
  constructor (url) {
    this.url = url
  }

  getScheme () {
    return new URL(this.url).protocol.slice(0, -1)
  }

  getHostName () {
    return new URL(this.url).hostname
  }

  getQueryParams () {
    return Object.fromEntries(
      new URL(this.url).searchParams
    )
  }

  getQueryParam (param, def = null) {
    return _.get(this.getQueryParams(), param, def)
  }

  equals (urlObj) {
    return this.url === urlObj.url
  }
}

export {
  Url
}
