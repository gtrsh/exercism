class Time {
  constructor (hours, mins) {
    this.hours = hours
    this.mins = mins
  }

  toString () {
    return `${this.hours}:${this.mins}`
  }

  static fromString (time) {
    const [hours, mins] = time.split(':')
    return new Time(hours, mins)
  }
}

export {
  Time
}
