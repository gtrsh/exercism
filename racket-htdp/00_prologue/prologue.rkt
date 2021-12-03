#lang htdp/bsl

(require 2htdp/image)

(+ 1 4)
(* 3 3)
(- 4 2)
(/ 6 2)

(sqr 3)
(expt 2 3)
(sin 0)
(cos pi)
(cos e)

(+ 12
   (+ 1 3)
   (* 2 4)
   (expt 2 (+ 1 2)))
(+ 1 2 3 4 5 6 7 8 9)
(* 1 2 3 4 5 6 7 8 9)

(string-append "hello" ", " "world")
(string-length
 (string-append "make" " " "the cake"))
(string->number "42")
(string? "aaa")
(string? 42)
(string=? "racket" "racket-lang")

(and #t #t)
(and #t #f)
(or #t #t)
(or #t #f)
(not #t)

(> 10 9)
(< -1 0)
(= 42 (* 21 2))

(circle 60 "solid" "pink")
(above (triangle 40 "solid" "red")
       (rectangle 40 30 "solid" "blue"))
(overlay (circle 15 "solid" "red")
         (rectangle 60 60 "solid" "blue"))
(image-width (square 10 "solid" "red"))

(empty-scene 100 100)
(place-image (circle 5 "solid" "green")
             40 80
             (empty-scene 200 200))
