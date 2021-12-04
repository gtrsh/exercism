#lang htdp/bsl

(require 2htdp/image)
(require 2htdp/universe)

(define WIDTH 100)
(define HEIGHT 600)
(define V 3)
(define X 50)

(define SCENE (empty-scene WIDTH HEIGHT))
(define ROCKET (circle 10 "solid" "pink"))
(define ROCKET-CENTER-TO-TOP
  (- HEIGHT (/ (image-height ROCKET) 2)))

(define (picture-of-rocket t)
  (cond
    [(<= (distance t) ROCKET-CENTER-TO-TOP)
     (place-image ROCKET X (distance t) SCENE)]
    [(> (distance t) ROCKET-CENTER-TO-TOP)
     (place-image ROCKET X ROCKET-CENTER-TO-TOP SCENE)]))

(define (distance t)
  (* V t))

(animate picture-of-rocket)
