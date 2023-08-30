import time
import curses

def draw(canvas, row, col, delay):
    canvas.addstr(row, col, 'Hello, world!')
    canvas.refresh()
    time.sleep(delay)

if __name__ == '__main__':
    curses.update_lines_cols()
    curses.wrapper(lambda cnv: draw(cnv, 10, 20, 1))
