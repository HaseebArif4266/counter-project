const counter = document.getElementById("counter");
const Incrementbtn = document.getElementById("Increase");
const decrementbtn = document.getElementById("Decrease");
const resetbtn = document.getElementById("Reset");

let count = 0;

Incrementbtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
});

decrementbtn.addEventListener("click", () => {
    if(count > 0)
    {
        count--;
        counter.innerHTML = count;
    }
    else
    {
        alert("counter is zero");
    }
});

resetbtn.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});