#lang htdp/bsl

(require 2htdp/image)
(require 2htdp/universe)
(require 2htdp/batch-io)

(define BACKGROUND (empty-scene 100 100))
(define DOT (circle 3 "solid" "red"))

(define (main y)
  (big-bang y
    [on-tick sub1]
    [stop-when zero?]
    [to-draw place-dot-at]
    [on-key stop]))

(define (place-dot-at y)
  (place-image DOT 50 y BACKGROUND))

(define (stop y ke)
  0)

(main 80)

;; Exercise 31

(define (letter fst lst signature-name)
  (string-append
   (opening fst)
   "\n\n"
   (body fst lst)
   "\n\n"
   (closing signature-name)))

(define (opening fst)
  (string-append "Dear " fst ","))

(define (body fst lst)
  (string-append
   "We have discovered that all people with the" "\n"
   "last name " lst " have won our lottery. So, " "\n"
   fst ", " "hurry and pick up your prize."))

(define (closing signature-name)
  (string-append
   "Sincerely,"
   "\n\n"
   signature-name
   "\n"))

(define (main-letter in-fst in-lst in-sig out)
  (write-file out
              (letter (read-file in-fst)
                      (read-file in-lst)
                      (read-file in-sig))))

(main-letter
      "files/in-fst"
      "files/in-lst"
      "files/in-sig"
      "files/letter")
