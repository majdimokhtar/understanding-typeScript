// Code goes here!

class Departmen {
  name: string
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }
  describe(this: Departmen) {
    console.log("department :" + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Departmen("Accounting")

accounting.addEmployee("Majdi")
accounting.addEmployee("Mokhtar")
accounting.describe()
accounting.printEmployeeInfo()

console.log(accounting)

accounting.describe()
