// const person: { name: string; age: number } = {
//   name: "Majdi",
//   age: 30,
// }

// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: "Majdi",
//   age: 30,
//   hobbies: ["sport", "music"],
//   role: [2, "author"],
// }

// let favActivity: string[]
// favActivity = ["sport", "hii"]
// console.log(person.name)
// person.role.push("admin")
// // person.role[1] = 10

// for (let hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
// }
// const ADMIN = 0
// const READONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN = 5,
  READONLY = "hii",
  AUTHOR = 50,
}

const person = {
  name: "Majdi",
  age: 30,
  hobbies: ["sport", "music"],
  role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
  console.log("Is admin!!")
}
