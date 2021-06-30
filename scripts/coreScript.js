import { createNode, append } from "./modules/domManipulator";
console.log("Scripts connected")

const ul = document.getElementById('authors')
const url = "https://randomuser.me/api/?results=10"

window.addEventListener("click", () => {
    fetch(url)
    .then((response) => {
        response.json()
        console.log(json)})
    .then((data) => {
        let authors = data.results;
        return authors.map((author){
            let li = createNode("li");
            let img = createNode("img");
            let span = createNode("span");
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch((error){
        console.log(error)
    })
})