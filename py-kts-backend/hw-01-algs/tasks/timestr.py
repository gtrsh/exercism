__all__ = (
    'seconds_to_str',
)


def seconds_to_str(seconds: int) -> str:
    """
    Функция должна вернуть текстовое представление времени
    20 -> 20s
    60 -> 01m00s
    65 -> 01m05s
    3700 -> 01h01m40s
    93600 -> 01d02h00m00s
    """
    seconds_in_minute = 60
    seconds_in_hour = 60 * seconds_in_minute
    seconds_in_day = 24 * seconds_in_hour

    temp_str_time = ''
    tmp_time = seconds // seconds_in_day
    if tmp_time:
        temp_str_time += f'{tmp_time:02}d'
        seconds %= seconds_in_day

    tmp_time = seconds // seconds_in_hour
    if tmp_time:
        temp_str_time += f'{tmp_time:02}h'
        seconds %= seconds_in_hour
    elif temp_str_time:
        temp_str_time += '00h'

    tmp_time = seconds // seconds_in_minute
    if tmp_time:
        temp_str_time += f'{tmp_time:02}m'
        seconds %= seconds_in_minute
    elif temp_str_time:
        temp_str_time += '00m'

    temp_str_time += f'{seconds:02}s'

    return temp_str_time
