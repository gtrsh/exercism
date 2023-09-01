import time
import curses

def draw(canvas):
    row, col = (10, 20)
    canvas.border()

    while True:
        canvas.addstr(row, col, '*', curses.A_DIM)
        canvas.refresh()
        time.sleep(2)

        canvas.addstr(row, col, '*')
        canvas.refresh()
        time.sleep(0.3)

        canvas.addstr(row, col, '*', curses.A_BOLD)
        canvas.refresh()
        time.sleep(0.5)

        canvas.addstr(row, col, '*')
        canvas.refresh()
        time.sleep(0.3)

if __name__ == '__main__':
    curses.initscr()
    curses.update_lines_cols()
    curses.curs_set(False)
    curses.wrapper(draw)
