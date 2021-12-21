#lang htdp/bsl

(require 2htdp/image)
(require 2htdp/universe)

(define WIDTH-OF-WORLD 200)
(define HEIGHT-OF-WORLD 40)
(define WHEEL-RADIUS 5)
(define WHEEL-DISTANCE (* WHEEL-RADIUS 5))

(define BACKGROUND
  (rectangle WIDTH-OF-WORLD HEIGHT-OF-WORLD "solid" "white"))
(define WHEEL
  (circle WHEEL-RADIUS "solid" "black"))
(define SPACE
  (rectangle WHEEL-DISTANCE WHEEL-RADIUS "solid" "white"))
(define BOTH-WHEELS
  (beside WHEEL SPACE WHEEL))
(define CAR
  (above (rectangle
          (image-width BOTH-WHEELS)
          (image-height BOTH-WHEELS) "solid" "red")
         BOTH-WHEELS))
(define CAR-Y
  (- (image-height BACKGROUND) 10))

;; A WorldState is a Number.
;; interpretation the number of pixels between
;; the left border of the scene and the car

;; WorldState -> Image
;; place the image of the car x pixels from
;; the left margin of the BACKGROUND image
(define (render x)
  (place-image CAR x CAR-Y BACKGROUND))

;; WorldState -> WorldState
;; add 3 to x to move the car right
(define (tock cw)
  (+ cw 3))

(check-expect (tock 0) 3)
(check-expect (tock 87) 90)

;; WorldState -> WorldState
;; run the world with initial state
(define (main ws)
  (big-bang
    ws
    [on-tick tock]
    [to-draw render]))

(main 0)
