const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const counter = document.querySelector(".counter");

var number = 0; // as number is assigned here, it has global scoop, that is why it is working fine.

const incr = () => {
    number++;
    counter.innerText = number;

}

const decr = () =>{
    number--;
    counter.innerText = number;
}


increase.addEventListener("click", incr);
decrease.addEventListener("click", decr);
