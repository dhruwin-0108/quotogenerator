let url = "https://api.quotable.io/random";
let quoto = document.getElementById("quoto");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let loader = document.querySelector(".loader");

loader.style.display = 'none';

let generate = () => {
    loader.style.display = 'flex';
    quoto.innerText = "";
    author.innerText = "";  
    fetch(url)
    .then((Response) => { 
        return Response.json()
    })
    .then((data) => {
        loader.style.display = 'none';
        quoto.innerText = data.content;
        author.innerText = data.author;    
    });
};

window.addEventListener("load", generate);
btn.addEventListener("click", generate);