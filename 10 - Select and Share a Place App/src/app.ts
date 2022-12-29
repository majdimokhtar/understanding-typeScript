const form = document.querySelector("form")!
const addressInput = document.querySelector("#address")! as HTMLInputElement

function searchAddressHandler (event:Event){
event.preventDefault()
const entredAddress =addressInput.nodeValue
}

form.addEventListener("submit",searchAddressHandler)