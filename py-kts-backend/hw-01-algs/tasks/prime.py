__all__ = (
    'is_prime',
)


def is_prime(number: int) -> bool:
    """
    Функция должна вернуть True если число является простым, иначе - False
    """
    if number == 0 or number == 1:
        return False
    else:
        k = 0
        for i in range(2, number // 2 + 1):
            if number % i == 0:
                k += 1
        if k == 0:
            return True
        else:
            return False
