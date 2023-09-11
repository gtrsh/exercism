def interest(principal, rate, numyears):
    year = 1
    while year <= numyears:
        principal = principal * (1 + rate)
        print(f'{year:>3d} {principal:0.2f}')
        year += 1
