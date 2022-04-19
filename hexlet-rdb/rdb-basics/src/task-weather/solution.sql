SELECT cw.id FROM weathers AS cw, weathers AS yw
WHERE cw.temperature > yw.temperature AND cw.date - yw.date = 1;
