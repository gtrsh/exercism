import { Point } from './point'
import { Segment } from './segment'

const reverse = (seg) => new Segment(
  new Point(seg.getEndPoint().getX(), seg.getEndPoint().getY()),
  new Point(seg.getBeginPoint().getX(), seg.getBeginPoint().getY())
)

export {
  reverse
}
