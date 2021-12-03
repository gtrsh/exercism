#lang htdp/bsl

(require 2htdp/image)
(require 2htdp/universe)

(define ROCKEET
  (circle 10 "solid" "red"))

(define (picture-of-rocket height)
  (place-image ROCKEET 50 height (empty-scene 100 1000)))

(animate picture-of-rocket)
