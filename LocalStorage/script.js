const p = document.querySelector("p");
let counter = localStorage.getItem("counter");
if(counter === null) {
    counter = 0;
}
p.innerText = counter;

function increment(p) {
    p = document.querySelector("p");
    p.innerText = ++counter;
    localStorage.setItem("counter", counter);}

function decrement(p) {
    p = document.querySelector("p");
    p.innerText = --counter;
    localStorage.setItem("counter", counter);
}
