#lang htdp/bsl

(require 2htdp/image)

;; Exercise 1

(define x 12)
(define y 5)

(sqrt (+ (* x x) (* y y)))

;; Exercise 2

(define prefix "hello")
(define suffix "world")

(string-append prefix "_" suffix)

;; Exercise 3

(define str "helloworld")
(define i 5)

(string-append
 (substring str 0 i)
 "_"
 (substring str i))

;; Exercise 4

(substring str 0 i)
(substring str (+ i 1) (string-length str))

(string-append
 (substring str 0 i)
 (substring str (+ i 1) (string-length str)))

;; Exercise 5

(define tree-section
  (triangle 20 "solid" "green"))

(above
 tree-section
 tree-section
 tree-section)

;; Exercise 6

(define kitten1
  (bitmap "files/cat1.png"))

(*
 (image-height kitten1)
 (image-width  kitten1))

;; Exercise 7

(define sunny  #t)
(define friday #f)

(or (not sunny) friday)
