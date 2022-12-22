// const names :Array<string> = [] //string
// names[0].split(" ")
// const promise :Promise<string> = new Promise  ((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("this is done");
//     },500)
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

console.log(merge({ name: "Majdi" }, { age: 30 }))

const mergeObj = merge<{ name: string }, { age: number }>(
  { name: "Majdi" },
  { age: 30 }
)

console.log(mergeObj.name)
