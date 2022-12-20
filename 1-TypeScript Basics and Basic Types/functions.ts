function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log("Result" + num)
}

let combineValue: (a: number, b: number) => number

combineValue = add

printResult(combineValue(5, 12))

function addHandler(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2
  cb(result)
}
addHandler(10,20,(result)=>{
  console.log(result);
})