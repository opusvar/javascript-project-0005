import { append, createNode } from "./domManipulator.js"

export const summonUsersApi = (url, hook) => {
    let ul = hook
    fetch(url)
    .then((response) => response.json())
    .then(function (data) {
        console.log("pass 1")
        console.log(data)
        let authors = data.results;
        console.log("pass 2")
        console.log(authors)
        return authors.map((author) => {
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
    .catch((error) => {
        console.log(error)
    })
}