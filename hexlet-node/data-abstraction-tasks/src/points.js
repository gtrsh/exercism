const calculateDistance = ([x1, y1], [x2, y2]) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
const getMidpoint = (p1, p2) => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2
})

const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

export {
  calculateDistance,
  getMidpoint
}
