window.onload = function () {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

const primaryNav = document.getElementById('navigation');
const displayButton = document.getElementById('displayMenu');

displayButton.addEventListener("click", slideMenu);

function slideMenu() {
    let visibility = primaryNav.getAttribute("data-visible");

    // if button is clicked, open the menu
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        displayButton.setAttribute("data-visible", "true");
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
        displayButton.setAttribute("data-visible", "false");
    }
}

// function displayMenu() {
//     document.getElementById('hamburger-icon').style.display = "none";
//     document.getElementById('x-icon').style.display = "block";
//     document.getElementById('navigation').style.transform = "translateX(0%)";
//     // document.getElementById('navigation').style.display = "block";
// }

// function hideMenu() {
//     document.getElementById('navigation').style.transform = "translateX(100%)";
//     document.getElementById('hamburger-icon').style.display = "block";
//     document.getElementById('x-icon').style.display = "none";
//     // document.getElementById('navigation').style.display = "none";

// }

// window.addEventListener("resize", hideButtons);

// function hideButtons() {
//     if(window.innerWidth > 767) {
//         document.getElementById('hamburger-icon').style.display = "none";
//         document.getElementById('x-icon').style.display = "none";
//         document.getElementById('navigation').style.transform = "translateX(0%)";
    
//     }
//     else {
//         document.getElementById('hamburger-icon').style.display = "block";   
//         document.getElementById('navigation').style.transform = "translateX(100%)";

//     }
// }

function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

let intIndex = 0

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dot = document.getElementsByClassName('dot');

    for (n = 0; n < images.length; n++) {
        images [n].style.display = "none";
        dot[n].className = dot[n].className.replace(" active", "");
    }

    if (intIndex > images.length -1) {
        intIndex = 0;
    }
    if (intIndex < 0) {
        intIndex = images.length -1;
    }

    images[intIndex].style.display = "block";
    dot[intIndex].className += " active";
}

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("cornerBtn").style.display = "block";
    } else {
        document.getElementById("cornerBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function() {
    currentYear();
    showImage(intIndex);
}