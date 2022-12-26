//validation
interface Validatble {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

function validate(validatbleInput: Validatble) {
  let isValid = true
  if (validatbleInput.required) {
    isValid = isValid && validatbleInput.value.toString().trim().length !== 0
  }
  if (
    validatbleInput.minLength != null &&
    typeof validatbleInput.value === "string"
  ) {
    isValid =
      isValid && validatbleInput.value.length > validatbleInput.minLength
  }
  if (
    validatbleInput.maxLength != null &&
    typeof validatbleInput.value === "string"
  ) {
    isValid =
      isValid && validatbleInput.value.length < validatbleInput.maxLength
  }
  if (
    validatbleInput.min != null &&
    typeof validatbleInput.value === "number"
  ) {
    isValid = isValid && validatbleInput.value > validatbleInput.min
  }
  if (
    validatbleInput.max != null &&
    typeof validatbleInput.value === "number"
  ) {
    isValid = isValid && validatbleInput.value < validatbleInput.max
  }
  return isValid
}

// autobind decorator

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

// project input class
class ProjectInput {
  templetaElement: HTMLTemplateElement
  hotsElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement
  constructor() {
    this.templetaElement = document.querySelector(
      "#project-input"
    )! as HTMLTemplateElement
    this.hotsElement = document.querySelector("#app")! as HTMLDivElement
    const importedNode = document.importNode(this.templetaElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = "user-input"
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement
    this.descInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement

    this.configure()
    this.attach()
  }
  private gatherUserInput(): [string, string, number] | void {
    const entredTitle = this.titleInputElement.value
    const entredDesc = this.descInputElement.value
    const entredPeople = this.peopleInputElement.value

    const titleValidatble: Validatble = {
      value: entredTitle,
      required: true,
    }
    const descriptionValidatble: Validatble = {
      value: entredDesc,
      required: true,
      minLength : 5
    }
    const peopleValidatble: Validatble = {
      value: +entredPeople,
      required: true,
      min: 1,
      max: 5,
    }
    if (
      !validate(titleValidatble) ||
      !validate(descriptionValidatble) ||
      !validate(peopleValidatble)
    ) {
      alert("invalid Input please try again")
      return
    } else {
      return [entredTitle, entredDesc, +entredPeople]
    }
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput()
    console.log(this.titleInputElement.value)
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput
      console.log(title, description, people)
      this.clearInput()
    }
  }
  private clearInput() {
    this.titleInputElement.value = ""
    this.descInputElement.value = ""
    this.peopleInputElement.value = ""
  }
  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this))
  }
  private attach() {
    this.hotsElement.insertAdjacentElement("afterbegin", this.element)
  }
}

const projectInput = new ProjectInput()
