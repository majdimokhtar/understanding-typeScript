interface Greatable {
  readonly name: string

  greet(phrase: string): void
}

class Person implements Greatable  {
  name : string
  constructor(n:string){
    this.name = n
  }
  greet(phrase : string){
    console.log(phrase + " " + this.name)
  }
}
let user1: Greatable

user1 = new Person("Majdi")
user1.greet("Hi there I am ")
