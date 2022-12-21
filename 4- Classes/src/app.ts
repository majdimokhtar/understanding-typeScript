interface AddFn{
  (a:number,b:number):number
}
let add : AddFn
add=(n1 :number,n2:number)=>{
  return n1+n2
}


interface Named {
  outputName? :string
  readonly name?: string
}

interface Greatable extends Named {
  greet(phrase: string): void
}

class Person implements Greatable ,Named  {
  name? : string
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
