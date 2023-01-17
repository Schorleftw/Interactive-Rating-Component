const submit = document.getElementById("submit");
const ratingButtons = document.querySelectorAll(".button");
const ratingStart = document.querySelector(".Rating-start");
const thanks = document.querySelector(".thanks");
const selected = document.getElementById("selected")
let rating;


ratingButtons.forEach(element => {
    element.addEventListener("click", () => {
        rating = document.activeElement.value;
        console.log(rating)
    })
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    ratingStart.style.display = "none";
    thanks.style.display = "flex";
    selected.innerText = `You selected ${rating} out of 5`;
});

