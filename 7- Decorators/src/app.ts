function Logger(logString: string) {
  return function (constractor: Function) {
    console.log(logString)
    console.log(constractor)
  }
}

function withTemplate(template: string, hookId: string) {
  return function (constractor: any) {
    console.log("rendring template")
    const hookEl = document.getElementById(hookId)
    const p = new constractor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector("h1")!.textContent = p.name
    }
  }
}

@Logger("logging person")
@withTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "Majdi"
  constructor() {
    console.log("creating person object...")
  }
}

const pers = new Person()

console.log(pers)

function Log(target: any, propertyName: string | Symbol) {
  console.log("proprety decorator")
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDecorator) {
  console.log("Accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log3(target: any, name: string | Symbol, descriptor: PropertyDecorator) {
    console.log("Method decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
  }

class Product {
  @Log
  title: string
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error("error invalid price should be positive")
    }
  }
  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax)
  }
}
