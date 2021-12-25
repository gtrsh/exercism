import { makeDecartPoint } from '../src/points.js'
import {
  makeSegment, getMidpointOfSegment, getBeginPoint, getEndPoint
} from '../src/segments.js'

describe('segment', () => {
  test('get begin & end points', () => {
    const beginPoint = makeDecartPoint(3, 2)
    const endPoint = makeDecartPoint(0, 0)
    const segment = makeSegment(beginPoint, endPoint)
    expect(getBeginPoint(segment)).toEqual(beginPoint)
    expect(getEndPoint(segment)).toEqual(endPoint)
  })

  test('get midpoint of segment 1', () => {
    const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(0, 0))
    expect(getMidpointOfSegment(segment)).toEqual(makeDecartPoint(1.5, 1))
  })

  test('get midpoint of segment 2', () => {
    const segment2 = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(2, 3))
    expect(getMidpointOfSegment(segment2)).toEqual(makeDecartPoint(2.5, 2.5))
  })
})
