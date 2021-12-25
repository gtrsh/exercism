const calculateDistance = ([x1, y1], [x2, y2]) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
const getMidpoint = (p1, p2) => ({
  x: (getX(p1) + getX(p2)) / 2,
  y: (getY(p1) + getY(p2)) / 2
})

const makeDecartPoint = (x, y) => ({ x, y })
const getX = (p) => p.x
const getY = (p) => p.y

export {
  calculateDistance,
  getMidpoint,
  makeDecartPoint,
  getX,
  getY
}
