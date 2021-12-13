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

;; Exercise 19

(define (string-insert str i)
  (string-append
   (substring str 0 i)
   "_"
   (substring str i )))

(string-insert "racket" 3)

;; Exercise 20

(define (string-delete str i)
  (string-append
   (substring str 0 i)
   (substring str (+ i 1) (string-length str))))

(string-delete "bracket" 0)

;; Exercise 28

(define (attendees ticket-price)
  (- 120 (* (- ticket-price 5.0) (/ 15 0.1))))

(define (revenue ticket-price)
  (* ticket-price (attendees ticket-price)))

(define (cost ticket-price)
  (+ 180 (* 0.04 (attendees ticket-price))))

(define (profit ticket-price)
  (- (revenue ticket-price)
     (cost ticket-price)))

(profit 1)
(profit 2)
(profit 3)
(profit 4)
(profit 5)
