import {summonUsersApi} from "./modules/summonAPI.js"

console.log("Scripts connected")

const ul = document.getElementById('authors')
const url = "https://randomuser.me/api/?results=10"

window.addEventListener("click", () => {
    summonUsersApi(url, ul)
   
})