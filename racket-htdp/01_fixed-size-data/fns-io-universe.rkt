#lang htdp/bsl

(require 2htdp/image)
(require 2htdp/universe)

(define (number->square s)
  (square s "solid" "blue"))

(define (reset s ke)
  100)

(big-bang
 100
 [on-key reset]
 [on-tick sub1]
 [stop-when zero?]
 [to-draw number->square])
