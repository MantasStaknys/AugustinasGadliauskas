let burgerBtn = document.getElementById("brg-btn");
let header = document.getElementById("header")
let article = document.getElementById("article")
let footer = document.getElementById("footer")
let brgMenuParent = document.body;
let brgMenu = document.getElementById("brgMenu");
let brgMenu2 = document.getElementById("brgMenu2");
let menuOn = false;


header.style.transition = "0.2s ease-in-out"
article.style.transition = "0.2s ease-in-out"
// footer.style.transition = "0.2s ease-in-out"

// burgerBtn.style.position = "fixed";


document.addEventListener("click", e => {
    console.log(e.target.id);
    if (e.target.id != "brg-btn" && menuOn && e.target.id != "brgMenu") {
        header.style.filter = "brightness(100%)"
        article.style.filter = "brightness(100%)"
        // footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        brgMenu2.style.right = "-300px";
        menuOn = false;
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        header.style.filter = "brightness(100%)"
        article.style.filter = "brightness(100%)"
        // footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        brgMenu2.style.right = "-300px";
        menuOn = false;
        burgerBtn.style.display = "block";

    }
})

burgerBtn.addEventListener("click", function() {

    header.style.filter = "brightness(50%)"
    article.style.filter = "brightness(50%)"
    // footer.style.filter = "brightness(50%)"
    brgMenu.style.right = "0px";
    brgMenu2.style.right = "0px";
    menuOn = true;
    console.log("facts")
})


