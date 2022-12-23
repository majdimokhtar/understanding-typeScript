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

// console.log(merge({ name: "Majdi" }, { age: 30 }))

const mergeObj = merge({ name: "Majdi" }, { age: 30 })

console.log(mergeObj)

interface lengthy {
  length: number
}

function countAndPrint<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "Got no Value"
  if (element.length === 1) {
    descriptionText = "got one element"
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements"
  }
  return [element, descriptionText]
}

console.log(countAndPrint("Hi Majdi!"))

function extractAndConvert<
  T extends string | number | boolean,
  U extends keyof T
>(obj: T, key: U) {
  return obj[key]
}

// extractAndConvert({ name: "Majdi" }, "name")

class dataStorage<T extends string | number | boolean> {
  private data: T[] = []
  additem(item: T) {
    this.data.push(item)
  }
  removeData(item: T) {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return [...this.data]
  }
}
const textStorage = new dataStorage<string>()
textStorage.additem("Majdi")
textStorage.additem("Mokhtar")
textStorage.removeData("Majdi")
console.log(textStorage.getItems())

const numberStorage = new dataStorage<number>()
// const objectStorage = new dataStorage<object>()
// const majdiObject = {name:"Majdi"}
// objectStorage.additem(majdiObject)
// objectStorage.additem({ name: "Mokhtar" })
// objectStorage.removeData(majdiObject)
// console.log(objectStorage.getItems())

interface courseGoal {
  title: string
  description: string
  completedUntil: Date
}

function createGoal(
  title: string,
  description: string,
  date: Date
): courseGoal {
  let courseGoal: Partial<courseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completedUntil = date
  return courseGoal as courseGoal
}

const names: Readonly<string[]> = ["Majdi", "Mokhtar"]
// names.push("Majdi")
