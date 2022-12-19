console.log("Your code goes here...")

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return num1 + num2
  }
}

let number1 :number

number1 = 5
const number2 = 10.5
const printResult = true
const resultPhrase = "the result is: "

const result = add(number1, number2, printResult, resultPhrase)

console.log(result)
