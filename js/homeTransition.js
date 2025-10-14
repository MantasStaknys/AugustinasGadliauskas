// arrow hover effect

let elms1 = document.getElementsByClassName("lr-h");
let elms2 = document.getElementsByClassName("rr-h");
let n = elms1.length;
function changeColor1(color1, color2) {
    for(let i = 0; i < n; i ++) {
        elms1[i].style.backgroundColor = color1;
        elms1[i].style.color = color2;
    }
}
function changeColor2(color1, color2) {
    for(let i = 0; i < n; i ++) {
        elms2[i].style.backgroundColor = color1;
        elms2[i].style.color = color2;
    }
}
for(let i = 0; i < n; i ++) {
    elms1[i].onmouseover = function() {
        changeColor1("white", "black");
    };
    elms1[i].onmouseout = function() {
        changeColor1("rgb(88, 47, 215)", "white");
    };
}
for(let i = 0; i < n; i ++) {
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
let cont3 = document.getElementsByClassName("slide3");
let cont4 = document.getElementsByClassName("slide4");
let n1 = cont1.length;
const lBtn = document.getElementById("lbtn")
const rBtn = document.getElementById("rbtn")

let nm = 1;
let canSwitch = true;

function clearSlide(element) {
    element.style.display = "none"
}

function slide(direction, number) {
    if (direction == "left") {
        console.log("left")
        switch(number) {
            case 1:
                for (let i = 0; i < n1; i++) {
                    cont1[i].style.transition = "0.3s ease-in-out"
                    cont1[i].style.opacity = "0.0"
                    cont1[i].style.transform = "translateX(300px)"
                    cont4[i].style.transform = "translateX(-300px)"
                    setTimeout(() => {
                        cont1[i].style.display = "none"
                        cont4[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont4[i].style.opacity = "1.0"
                        cont4[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                nm = 5;
                break;
            case 2:
                for (let i = 0; i < n1; i++) {
                    cont2[i].style.transition = "0.3s ease-in-out"
                    cont2[i].style.opacity = "0.0"
                    cont2[i].style.transform = "translateX(300px)"
                    cont1[i].style.transform = "translateX(-300px)"
                    setTimeout(() => {
                        cont2[i].style.display = "none"
                        cont1[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont1[i].style.opacity = "1.0"
                        cont1[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;
            case 3:
                for (let i = 0; i < n1; i++) {
                    cont3[i].style.transition = "0.3s ease-in-out"
                    cont3[i].style.opacity = "0.0"
                    cont3[i].style.transform = "translateX(300px)"
                    cont2[i].style.transform = "translateX(-300px)"
                    setTimeout(() => {
                        cont3[i].style.display = "none"
                        cont2[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont2[i].style.opacity = "1.0"
                        cont2[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;
            case 4:
                for (let i = 0; i < n1; i++) {
                    cont4[i].style.transition = "0.3s ease-in-out"
                    cont4[i].style.opacity = "0.0"
                    cont4[i].style.transform = "translateX(300px)"
                    cont3[i].style.transform = "translateX(-300px)"
                    setTimeout(() => {
                        cont4[i].style.display = "none"
                        cont3[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont3[i].style.opacity = "1.0"
                        cont3[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;

        }
    } else {
        console.log("right")
        switch(number) {
            case 1:
                for (let i = 0; i < n1; i++) {
                    cont1[i].style.transition = "0.3s ease-in-out"
                    cont1[i].style.opacity = "0.0"
                    cont1[i].style.transform = "translateX(-300px)"
                    cont2[i].style.transform = "translateX(300px)"
                    setTimeout(() => {
                        cont1[i].style.display = "none"
                        cont2[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont2[i].style.opacity = "1.0"
                        cont2[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;
            case 2:
                for (let i = 0; i < n1; i++) {
                    cont2[i].style.transition = "0.3s ease-in-out"
                    cont2[i].style.opacity = "0.0"
                    cont2[i].style.transform = "translateX(-300px)"
                    cont3[i].style.transform = "translateX(300px)"
                    setTimeout(() => {
                        cont2[i].style.display = "none"
                        cont3[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont3[i].style.opacity = "1.0"
                        cont3[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;
            case 3:
                for (let i = 0; i < n1; i++) {
                    cont3[i].style.transition = "0.3s ease-in-out"
                    cont3[i].style.opacity = "0.0"
                    cont3[i].style.transform = "translateX(-300px)"
                    cont4[i].style.transform = "translateX(300px)"
                    setTimeout(() => {
                        cont3[i].style.display = "none"
                        cont4[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont4[i].style.opacity = "1.0"
                        cont4[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                break;
            case 4:
                for (let i = 0; i < n1; i++) {
                    cont4[i].style.transition = "0.3s ease-in-out"
                    cont4[i].style.opacity = "0.0"
                    cont4[i].style.transform = "translateX(-300px)"
                    cont1[i].style.transform = "translateX(300px)"
                    setTimeout(() => {
                        cont4[i].style.display = "none"
                        cont1[i].style.display = "flex"
                    }, 290)
                    setTimeout(() => {
                        cont1[i].style.opacity = "1.0"
                        cont1[i].style.transform = "translateX(0px)"
                    }, 310)
                    
                }
                nm = 0;
                break;
        }
    }
   
}

lBtn.addEventListener("click", ()=> {
    if (canSwitch) {
        canSwitch = false;
        console.log(nm)
        slide("left", nm);
        nm--;
        setTimeout(() => {
            canSwitch = true;
        }, 450)
    }
})
rBtn.addEventListener("click", () => {
    if (canSwitch) {
        canSwitch = false;
        console.log(nm)
        slide("right", nm);
        nm++;
        setTimeout(() => {
            canSwitch = true;
        }, 450)
    }
})


//         elms[i].style.transition = "0.3s ease-in-out"
//         elms[i].style.opacity = "0.0"
//         elms[i].style.transform = "translateX(-300px)"