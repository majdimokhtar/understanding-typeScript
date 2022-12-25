class ProjectInput {
  templetaElement: HTMLTemplateElement
  hotsElement: HTMLDivElement
  element: HTMLFormElement
  constructor() {
    this.templetaElement = document.querySelector(
      "#project-input"
    )! as HTMLTemplateElement
    this.hotsElement = document.querySelector("#app")! as HTMLDivElement
    const importedNode = document.importNode(this.templetaElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.attach()
  }
  private attach() {
    this.hotsElement.insertAdjacentElement("afterbegin", this.element)
  }
}


const projectInput =  new ProjectInput()