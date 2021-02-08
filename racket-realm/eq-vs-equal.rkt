#lang racket

(struct point (x y) #:transparent)

(define pt1 (point 1 2))
(define pt2 (point 1 2))

(eq? pt1 pt2)    ;; #f
(equal? pt1 pt2) ;; #t

(define ls1 '(1 2 3))
(define ls2 '(1 2 3))

(eq? ls1 ls2)    ;; #f
(equal? ls1 ls2) ;; #t
