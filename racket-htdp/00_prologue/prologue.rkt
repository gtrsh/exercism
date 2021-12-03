#lang htdp/bsl

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

(and #t #t)
(and #t #f)
(or #t #t)
(or #t #f)
(not #t)
