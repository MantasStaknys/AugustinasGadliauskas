let button = document.getElementById("rm-btn");
let buttonTxt = document.getElementById("rm-btnTxt")
let isOpened = false;
let divs = document.getElementsByClassName("divider");

button.addEventListener("click", () => {
    isOpened = !isOpened;
    for (let i = 0; i < divs.length; i++) {
        if (isOpened) {
            divs[i].classList.add("show");
            buttonTxt.textContent = "Read Less"
        } else {
            divs[i].classList.remove("show");
            buttonTxt.textContent = "Read More"
        }
    }
});

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#421fad";
})
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#582fd7";
})