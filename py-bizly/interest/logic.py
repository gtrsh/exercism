def interest(principal, rate, numyears):
    year = 1
    while year <= numyears:
        principal = principal * (1 + rate)
        print(year, principal)
        year += 1
