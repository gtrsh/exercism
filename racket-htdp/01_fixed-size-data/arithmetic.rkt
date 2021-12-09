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

;; Exercise 8

(define black-square
  (rectangle 300 300 "solid" "black"))
(define height (image-height black-square))
(define width  (image-width black-square))

(if
 (>
  (image-height kitten1)
  (image-width  kitten1))
 "tall"
 "wide")

(cond
  [(> height width) "tall"]
  [(< height width) "wide"]
  [else "square"])

;; Exercise 9

(define in #t)

(define (string-to-num in)
  (string-length in))
(define (image-to-num in)
  (*
   (image-height in)
   (image-width  in)))
(define (num-to-num in)
  (abs in))
(define (bool-to-num in)
  (if in 10 20))

(cond
  [(string?  in) (string-to-num in)]
  [(image?   in) (image-to-num  in)]
  [(number?  in) (num-to-num    in)]
  [(boolean? in) (bool-to-num   in)])
