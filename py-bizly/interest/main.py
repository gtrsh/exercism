import sys
from logic import interest


if __name__ == '__main__':
    principal = float(sys.argv[1])
    rate = float(sys.argv[2])
    years = int(sys.argv[3])

    interest(principal, rate, years)
