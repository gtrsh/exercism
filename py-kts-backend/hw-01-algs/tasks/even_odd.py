__all__ = (
    'even_odd',
)


def even_odd(xs: list[int]) -> float:
    """
    Функция возвращает отношение суммы четных элементов массив к сумме нечетных
    Пример:
    even_odd([1, 2, 3, 4, 5]) == 0.8889
    """
    a = sum([i for i in xs if i % 2 == 0])
    b = sum([i for i in xs if i % 2 != 0])
    if a == 0 or b == 0:
        return 0
    return a / b
