#lang htdp/bsl

;; Exercise 1

(define x 12)
(define y 5)

(sqrt (+ (* x x) (* y y)))

;; Exercise 2

(define prefix "hello")
(define suffix "world")

(string-append prefix "_" suffix)
