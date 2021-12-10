#lang htdp/bsl

(require 2htdp/image)

;; Exercise 11

(define (dist x y)
  (sqrt (+ (* x x) (* y y))))

(dist 3 4)
(dist 12 5)
