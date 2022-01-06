// module level context:

const f1 = () => {
  console.log(this)
}
f1()

function f2() {
  console.log(this)
}
f2()

// object level context:

const test = {
  f1, f2
}

test.f1()
test.f2()

// call and bind change context example:

f1.call({ name: 'context' })
f1.bind({ name: 'context' })()

// context loose example:

const printerArrow = {
  items: [1, 32, 'context'],
  print() {
    this.items.forEach(() => console.log(this.items))
  }
}

printerArrow.print()

/*
const printer = {
  items: [1],
  print() {
    this.items.forEach(function () { console.log(this.items); });
  },
};

printer.print(); // undefined
 */
