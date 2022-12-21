// Code goes here!

class Department {
  // private id: string
  // private name: string
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }
  describe(this: Department) {
    console.log(`Department (${this.id}):(${this.name})`)
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
}
class AccountingDepartment extends Department {
  private lastReport: string
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
  constructor(id: string, private reports: string[]) {
    super(id, "IT")
    this.lastReport = this.reports[0]
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

const it = new ITDepartment("d1", ["Majdi"])

it.addEmployee("Majdi")
it.addEmployee("Mokhtar")
it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting = new AccountingDepartment("d2", [])
accounting.mostRecentReport = "sssss"
accounting.addReports("something")
accounting.printReports()
accounting.addEmployee("Majdi")
accounting.addEmployee("Mokhtar")
accounting.printEmployee()
console.log(accounting.mostRecentReport)

// it.describe()
