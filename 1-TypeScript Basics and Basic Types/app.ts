function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log("Result" + num)
}

let combineValue: (a: number, b: number) => number

combineValue = add

printResult(combineValue(5, 12))
