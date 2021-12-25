import { getMidpoint } from './points'

const makeSegment = (p1, p2) => ({ begin: p1, end: p2 })
const getBeginPoint = (segment) => segment.begin
const getEndPoint = (segment) => segment.end
const getMidpointOfSegment = ({ begin, end }) => getMidpoint(begin, end)

export {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment
}
