#lang htdp/bsl

(define (sign x)
  (cond
    [(> x 0)  1]
    [(= x 0)  0]
    [(< x 0) -1]))

(sign 0)
(sign 100)
(sign -100)
(sign -200)
