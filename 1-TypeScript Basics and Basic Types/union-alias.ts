type Combinable = number | string
type Conversion = "as-text" | "as-number"

function combine(input1: Combinable | string, input2: Combinable ,resultc : string) {
  let result
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  } else {
  result = input1.toLocaleString() + input2.toString()
  } 
  return result
  
}

let combinedAge = combine(55, 30 , "as num")
console.log(combinedAge);

let combinedAgeString = combine("55", "30" , "as num")
console.log(combinedAgeString)

let combineName = combine("Majdi"," Mokhtar","as text")
console.log(combineName);
