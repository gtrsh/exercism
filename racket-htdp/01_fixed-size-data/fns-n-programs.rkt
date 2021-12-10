#lang htdp/bsl

(require 2htdp/image)

;; Exercise 11

(define (dist x y)
  (sqrt (+ (* x x) (* y y))))

(dist 3 4)
(dist 12 5)

;; Exercise 12

(define (cvolume side)
  (* side side side))

(cvolume 2)
(cvolume 3)

;; Exercise 13

(define (string-first s)
  (substring s 0 1))

(string-first "hello")

;; Exercise 14

(define (string-last s)
  (substring s (- (string-length s) 1)))

(string-last "world")
