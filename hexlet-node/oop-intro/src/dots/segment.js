function Segment (beginPoint, endPoint) {
  this.beginPoint = beginPoint
  this.endPoint = endPoint

  this.getBeginPoint = function () {
    return this.beginPoint
  }

  this.getEndPoint = function () {
    return this.endPoint
  }
}

export {
  Segment
}
