import time
import curses

def draw(canvas, row, col, delay):
    canvas.border()
    canvas.addstr(row, col, 'Hello, world!')
    canvas.refresh()
    time.sleep(delay)

if __name__ == '__main__':
    curses.initscr()
    curses.update_lines_cols()
    curses.curs_set(False)
    curses.wrapper(lambda cnv: draw(cnv, 10, 20, 1))
