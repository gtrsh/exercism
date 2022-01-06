const f1 = () => {
  console.log(this)
}
f1()

function f2() {
  console.log(this)
}
f2()
