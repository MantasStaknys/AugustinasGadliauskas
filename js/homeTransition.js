// arrow hover effect

let elms1 = document.getElementsByClassName("lr-h");
let elms2 = document.getElementsByClassName("rr-h");
let n = elms1.length;
function changeColor1(color1, color2) {
    for(var i = 0; i < n; i ++) {
        elms1[i].style.backgroundColor = color1;
        elms1[i].style.color = color2;
    }
}
function changeColor2(color1, color2) {
    for(var i = 0; i < n; i ++) {
        elms2[i].style.backgroundColor = color1;
        elms2[i].style.color = color2;
    }
}
for(var i = 0; i < n; i ++) {
    elms1[i].onmouseover = function() {
        changeColor1("white", "black");
    };
    elms1[i].onmouseout = function() {
        changeColor1("rgb(88, 47, 215)", "white");
    };
}
for(var i = 0; i < n; i ++) {
    elms2[i].onmouseover = function() {
        changeColor2("white", "black");
    };
    elms2[i].onmouseout = function() {
        changeColor2("rgb(88, 47, 215)", "white");
    };
}

// transition effect 

let cont1 = document.getElementsByClassName("slide1");
let cont2 = document.getElementsByClassName("slide2");
let n1 = cont1.length;
const lBtn = document.getElementById("lbtn")
const rBtn = document.getElementById("rbtn")

function clearSlide(element) {
    element.style.display = "none"
}

function slideLeft(number) {
   switch(number) {
    case 0:
        for (let i = 0; i < n1; i++) {
            cont1[i].style.transition = "0.3s ease-in-out"
            cont1[i].style.opacity = "0.0"
            cont1[i].style.transform = "translateX(-300px)"
            setTimeout(() => {
                cont1[i].style.display = "none"
                cont2[i].style.display = "inline"
                cont2[i].style.opacity = "1.0"
                cont2[i].style.transform = "translateX(0px)"
            }, 290)
            
            
        }
        for (let i = 0; i < n1; i++) {
            
        }
   }
}

lBtn.addEventListener("click", ()=> {
    slideLeft(0)
})


//         elms[i].style.transition = "0.3s ease-in-out"
//         elms[i].style.opacity = "0.0"
//         elms[i].style.transform = "translateX(-300px)"