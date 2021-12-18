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

;; String -> String
;; get first character of non-empty string
;; given "cat", expected "c"
;; given "", expected Error
(define (string-first s)
  (substring s 0 1))

(string-first "hello")

;; Exercise 14

;; String -> String
;; get last character of non-empty string
;; given "cat", expected "t"
;; given "", expected Error
(define (string-last s)
  (substring s (- (string-length s) 1)))

(string-last "world")

;; Exercise 15

(define (==> sn fr)
  (or (not sn) fr))

(==> #f #t)
(==> #t #f)

;; Exercise 16

;; Image -> Number
;; compute image area
;; given (rectangle 20 2 ...), expected 40
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

(define CUSTOMERS_BASE 120)
(define CUSTOMERS_DIFF 15)
(define PRICE_BASE 5.0)
(define PRICE_DIFF 0.1)
(define COST_BASE 180)
(define COST_DIFF 0.04)

(define (attendees ticket-price)
  (- CUSTOMERS_BASE
     (*
      (- ticket-price PRICE_BASE)
      (/ CUSTOMERS_DIFF PRICE_DIFF))))

(define (revenue ticket-price)
  (* ticket-price (attendees ticket-price)))

(define (cost ticket-price)
  (+ COST_BASE (* COST_DIFF (attendees ticket-price))))

(define (profit ticket-price)
  (- (revenue ticket-price)
     (cost ticket-price)))

(profit 1)
(profit 2)
(profit 3)
(profit 4)
(profit 5)

;; Exercise 29

(define COST_FIX 1.5)

(define (cost-upd ticket-price)
  (* COST_FIX (attendees ticket-price)))

(define (profit-upd ticket-price)
  (- (revenue ticket-price)
     (cost-upd ticket-price)))

(profit-upd 3)
(profit-upd 4)
(profit-upd 5)
