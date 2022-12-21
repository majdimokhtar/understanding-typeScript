// Code goes here!

abstract class Department {
  static fiscalYear = 2022
  // private id: string
  // private name: string
  protected employees: string[] = []

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }
  abstract describe(this: Department): void

  static createEmployee(name: string) {
    return { name: name }
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInfo() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, "Accounting")
    this.admins = admins
  }

  describe() {
    console.log("It department :" + this.id)
  }
}
class AccountingDepartment extends Department {
  private lastReport: string
  private static instance : AccountingDepartment
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("no report found")
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please add a valid value")
    }
    this.addReports(value)
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "IT")
    this.lastReport = this.reports[0]
  }
  static getInstance(){
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment("d2", [])
    return this.instance
  }
  describe() {
    console.log(`Accounting department (${this.id})`)
  }
  addReports(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  addEmployee(name: string) {
    if (name === "Majdi") {
      return
    }
    this.employees.push(name)
  }
  printReports() {
    console.log(this.reports)
  }
  printEmployee() {
    console.log(this.employees)
  }
}

const employee1 = Department.createEmployee("Majdi employee")
console.log(employee1, Department.fiscalYear)
const it = new ITDepartment("d1", ["Majdi"])

it.addEmployee("Majdi")
it.addEmployee("Mokhtar")
it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting = AccountingDepartment.getInstance()
accounting.mostRecentReport = "sssss"
accounting.addReports("something")
accounting.printReports()
accounting.addEmployee("Majdi")
accounting.addEmployee("Mokhtar")
accounting.printEmployee()
console.log(accounting.mostRecentReport)

accounting.describe()

// it.describe()
