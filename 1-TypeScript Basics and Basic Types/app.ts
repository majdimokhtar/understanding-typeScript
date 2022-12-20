let userInput: unknown
let userName : string


if(typeof  userInput === "string"){
    userName =userInput
}

function generateErr(message : string,code:number){
throw {message : message ,errcode:code}

}
const res = generateErr("error!!!!",500)
console.log(res);


// const button = document.querySelector(".button")

// button.addEventListener("click",()=>{
//     console.log("clicked");
// })