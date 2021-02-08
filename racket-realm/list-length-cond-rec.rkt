#lang racket

(define (list-ln my-list)
    (cond
        [(empty? my-list) 0]
        [else (add1 (list-ln (rest my-list)))]))


(list-ln '(1 2 3 4 5 )) ;; 5 elements
(list-ln (list))        ;; 0 elements
