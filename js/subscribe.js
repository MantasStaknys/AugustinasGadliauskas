// let btn = document.getElementById("news-btn");
let form = document.getElementById("news-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    location.reload();
})