#lang racket

(struct point (x y))

(define (point-distance p)
    (sqrt (+ (sqr (point-x p)) (sqr (point-y p)))))

(point-distance (point 3 4))
