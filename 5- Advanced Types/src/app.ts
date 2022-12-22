// Code goes here!

type Admin = {
  name: string
  privileges: string[]
}
type Employee = {
  name: string
  startDate: Date
}

// interface ElevatedEmployee extends Employee , Admin{}
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: "Majdi",
  privileges: ["create a server"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

type unknowEmployee = Employee | Admin

function printEmployeeInfo(emp: unknowEmployee) {
  console.log("Name :" + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges :" + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("startDate :" + emp.startDate)
  }
}

printEmployeeInfo(e1)

class Car {
  drive() {
    console.log("driving")
  }
}
class Truck {
  drive() {
    console.log("driving a truck")
  }
  loadCargo(amount: number) {
    console.log("loading cargo : " + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVihicule(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}
useVihicule(v1)
useVihicule(v2)

interface Bird {
  type: "bird"
  flyingSpeed: number
}
interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
  }
  console.log("moving at speed " + speed)
}
moveAnimal({ type: "bird", flyingSpeed: 100 })

// const userInput =<HTMLInputElement> document.getElementById("user-input")!
const userInput = document.querySelector("#user-input")

if (userInput) {
  ;(userInput as HTMLInputElement).value = "Hi there Majdi!"
}

interface ErrorContainer {
  [prop: string]: string
}

const errBag: ErrorContainer = {
  email: "not a valid email",
  userName: "must start with a capital letter",
}
