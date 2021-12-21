#lang htdp/bsl

;; Number -> Number
;; converts Fahrenheit temperatures to Celsius
(define (f2c f)
  (* 5/9 (- f 32)))

(check-expect (f2c -40) -40)
(check-expect (f2c 32) 0)
(check-expect (f2c 212) 100)
