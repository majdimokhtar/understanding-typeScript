import axios from "axios"
const form = document.querySelector("form")!
const addressInput = document.querySelector("#address")! as HTMLInputElement
declare var google :any


type GoogleGeoCodingRes= {results : {geometry :{location :{ lat :number,lng : number}}}[]
status :"OK" | "ZERO RESULTS"
}

function searchAddressHandler(event: Event) {
  event.preventDefault()
  const entredAddress = addressInput.value
  axios
    .get<GoogleGeoCodingRes>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        entredAddress
      )}&key=${process.env.GOOGLE_API_KEY}`
    )
    .then((response) => {
        if (response.data.status !== "OK") {
            throw new Error("could not fetch location")
        }
      const coordinates = response.data.results[0].geometry.location
      const map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
        zoom: 16})
        new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => console.log(err))
}

form.addEventListener("submit", searchAddressHandler)
