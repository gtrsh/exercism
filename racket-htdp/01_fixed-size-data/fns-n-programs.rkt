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

;; Exercise 15

(define (==> sn fr)
  (or (not sn) fr))

(==> #f #t)
(==> #t #f)

;; Exercise 16

(define (image-area img)
  (*
   (image-height img)
   (image-width img)))

(image-area (rectangle 10 20 100 "black"))

;; Exercise 17

(define (image-classify img)
;;  (define height (image-height img))
;;  (define width  (image-width img))

  (cond
    [(> (image-height img) (image-width img)) "tall"]
    [(< (image-height img) (image-width img)) "wide"]
    [else "square"]))

(image-classify (rectangle 100 100 "solid" "red"))
(image-classify (rectangle 10  100 "solid" "red"))
(image-classify (rectangle 100 10  "solid" "red"))

;; Exercise 18

(define (string-join str1 str2)
  (string-append str1 "_" str2))

(string-join "hello" "world")