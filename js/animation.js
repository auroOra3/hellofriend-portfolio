// Define DOM elements

const heroImage = document.querySelector("#hero_animation_img");

const topL = document.querySelector("#grid_topL");
const topR = document.querySelector("#grid_topR");
const bottomL = document.querySelector("#grid_bottomL");
const bottomR = document.querySelector("#grid_bottomR");

const topLBtn = document.querySelector("#grid_topL_btn");
const topRBtn = document.querySelector("#grid_topR_btn");
const bottomLBtn = document.querySelector("#grid_bottomL_btn");
const bottomRBtn = document.querySelector("#grid_bottomR_btn");

const topLContent = document.querySelector("#grid_topL_content");
const topRContent = document.querySelector("#grid_topR_content");
const bottomLContent = document.querySelector("#grid_bottomL_content");
const bottomRContent = document.querySelector("#grid_bottomR_content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and positions

const bgColorWhite = "var(--bg-light)";
const bgColorBlack = "var(--bg-dark)";
const textColor = "var(--text-color)";
const bgButton = "var(--btn-bg);"

let tlActive = "translateX(0) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(0)";

let trActive = "translateX(0) translateY(0)"; 
let trHidden = "translateX(100vw) translateY(0)"; 

let blActive = "translateX(0) translateY(0)";
let blHidden = "translateX(-100vw) translateY(0)";

let brActive = "translateX(0) translateY(0)";
let brHidden = "translateX(100vw) translateY(0)";

let activeCorner = ""; 

window.addEventListener("resize", handleWindowResize); 
function handleWindowResize() {
    switch (activeCorner) {
        case "top-left": 
            if (window.innerWidth <= 1100) {
                tlActive = "translateX(0) translateY(0)";
                topLContent.style.transform = "translateX(0) translateY(0)";
                topLContent.style.width = "100vw";
                topLContent.style.height = "100vh";
                topLContent.style.top = "0";
                topLContent.style.display = "flex"; 
                topLContent.style.alignItems = "center";
                topLContent.style.justifyContent = "center";
                topLContent.style.background = "var(--bg-transparent)";
                topLContent.style.zIndex = "200";
                topLBtn.style.zIndex = "300";
                topRBtn.style.zIndex = "100";
                bottomLBtn.style.zIndex = "100";
                bottomRBtn.style.zIndex = "100";
            } else {
                tlActive = "translateX(0) translateY(0)"; 
                topLContent.style.transform = "translateX(0) translateY(-50%)"; // Vertikal zentrieren
                topLContent.style.transition = "transform 0.5s ease";    
                topLContent.style.width = "30vw";
                topLContent.style.height = "100vh"; 
                topLContent.style.display = "block"; 
                topLContent.style.background = "transparent";
                topLContent.style.left = "5vw";
                var screenHeight = window.innerHeight;
                var topPosition = ((screenHeight / 2 - 200) / screenHeight) * 100;
                topLContent.style.top = topPosition + "vh";
            }
            
            break;
        case "top-right":
            if (window.innerWidth <= 1100) {
                trActive = "translateX(0) translateY(0)";
                topRContent.style.transform = "translateX(0) translateY(0)";
                topRContent.style.width = "100vw";
                topRContent.style.height = "100vh";
                topRContent.style.top = "0";
                topRContent.style.display = "flex"; 
                topRContent.style.alignItems = "center";
                topRContent.style.justifyContent = "center";
                topRContent.style.background = "var(--bg-transparent)";
                topRContent.style.zIndex = "200";
                topRBtn.style.zIndex = "300";
                topLBtn.style.zIndex = "100";
                bottomLBtn.style.zIndex = "100";
                bottomRBtn.style.zIndex = "100";
            } else {
                trActive = "translateX(0) translateY(0)";
                topRContent.style.transform = "translateX(0) translateY(0)"; 
                topRContent.style.transition = "transform 0.5s ease"; 
                topRContent.style.width = "30vw";
                topRContent.style.height = "100vh";
                topRContent.style.right = "5vw"; 
                topRContent.style.display = "block"; 
                topRContent.style.background = "transparent";
                var screenHeight = window.innerHeight;
                var topPosition = ((screenHeight / 2 - 250) / screenHeight) * 100;
                topRContent.style.top = topPosition + "vh";
            }
            break;
        case "bottom-left":
            if (window.innerWidth <= 600) {
                blActive = "translateX(0) translateY(0)";
                bottomLContent.style.transform = "translateX(0) translateY(0)";
                bottomLContent.style.width = "100vw";
                bottomLContent.style.height = "100vh";
                bottomLContent.style.top = "0";
                bottomLContent.style.display = "flex"; 
                bottomLContent.style.alignItems = "center";
                bottomLContent.style.justifyContent = "center";
                bottomLContent.style.background = "var(--bg-transparent)";
                bottomLContent.style.zIndex = "200";
                bottomLBtn.style.zIndex = "300";
                topLBtn.style.zIndex = "100";
                topRBtn.style.zIndex = "100";
                bottomRBtn.style.zIndex = "100";
                projectOne.style.width = "70%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "70%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "70%";
                projectThree.style.margin = "auto auto 0.5rem";
            } else if (window.innerWidth <= 1100) {
                bottomLContent.style.transform = "translateX(0) translateY(0)";
                bottomLContent.style.width = "100vw";
                bottomLContent.style.height = "100vh";
                bottomLContent.style.top = "0";
                bottomLContent.style.display = "flex"; 
                bottomLContent.style.alignItems = "center";
                bottomLContent.style.justifyContent = "center";
                bottomLContent.style.background = "var(--bg-transparent)";
                bottomLContent.style.zIndex = "200";
                bottomLBtn.style.zIndex = "300";
                topLBtn.style.zIndex = "100";
                topRBtn.style.zIndex = "100";
                bottomRBtn.style.zIndex = "100";
                projectOne.style.width = "40%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "40%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "40%";
                projectThree.style.margin = "auto auto 0.5rem";
            } else {
                blActive = "translateX(0) translateY(0)";
                bottomLContent.style.transform = "translateX(0) translateY(0)"; 
                bottomLContent.style.transition = "transform 0.5s ease"; 
                bottomLContent.style.width = "20rem";
                bottomLContent.style.height = "0";
                bottomLContent.style.left = "10vw";
                bottomLContent.style.display = "block"; 
                projectOne.style.width = "100%";
                projectTwo.style.width = "100%";
                projectThree.style.width = "100%";
                var screenHeight = window.innerHeight;
                var topPosition = ((screenHeight / 2 - 250) / screenHeight) * 100;
                bottomLContent.style.top = topPosition + "vh";
            }
            break;
        case "bottom-right":
            if (window.innerWidth <= 1100) {
                brActive = "translateX(0) translateY(0)";
                bottomRContent.style.transform = "translateX(0) translateY(0)";
                bottomRContent.style.width = "100vw";
                bottomRContent.style.height = "100vh";
                bottomRContent.style.top = "0";
                bottomRContent.style.display = "flex"; 
                bottomRContent.style.alignItems = "center";
                bottomRContent.style.justifyContent = "center";
                bottomRContent.style.background = "var(--bg-transparent)";
                bottomRContent.style.zIndex = "200";
                topRBtn.style.zIndex = "100";
                topLBtn.style.zIndex = "100";
                bottomLBtn.style.zIndex = "100";
                bottomRBtn.style.zIndex = "300";
            } else {
                brActive = "translateX(0) translateY(0)";
                bottomRContent.style.transform = "translateX(0) translateY(0)"; 
                bottomRContent.style.transition = "transform 0.5s ease"; 
                bottomRContent.style.width = "20vw";
                bottomRContent.style.height = "100vh";
                bottomRContent.style.right = "5vw"; 
                bottomRContent.style.display = "block"; 
                bottomRContent.style.background = "transparent";
                var screenHeight = window.innerHeight;
                var topPosition = ((screenHeight / 2 - 200) / screenHeight) * 100;
                bottomRContent.style.top = topPosition + "vh";
            }
            break;
        default:
    }
}

function playClosingAnimation(reverseAnimation) {
    topLBtn.innerHTML = "ABOUT";
    topRBtn.innerHTML = "EXPERIENCE";
    bottomLBtn.innerHTML = "PROJECTS";
    bottomRBtn.innerHTML = "CONTACT";

    switch (activeCorner) {
        case "top-left":
            topLBtn.style.background = bgButton;
            topLBtn.style.color = textColor;
            topLContent.style.transform = tlHidden;
            break;
        case "top-right":
            topRBtn.style.background = bgButton;
            topRBtn.style.color = textColor;
            topRContent.style.transform = trHidden;
            break;
        case "bottom-left":
            bottomLBtn.style.background = bgButton;
            bottomLBtn.style.color = textColor;
            bottomLContent.style.transform = blHidden;
            break;
        case "bottom-right":
            bottomRBtn.style.background = bgButton;
            bottomRBtn.style.color = textColor;
            bottomRContent.style.transform = brHidden;
            break;
        default:
    }

    activeCorner = "";
}


topLBtn.onclick = function () {
    if (activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {
        topRBtn.innerHTML = "EXPERIENCE";
        bottomLBtn.innerHTML = "PROJECTS";
        bottomRBtn.innerHTML = "CONTACT";

        activeCorner = "top-left";
        topLBtn.innerHTML = "ABOUT";

        handleWindowResize();

        topRContent.style.transform = trHidden;
        bottomRContent.style.transform = brHidden;
        bottomLContent.style.transform = blHidden;
        topLContent.style.transform = tlActive;
    }
};

topRBtn.onclick = function () {
    if (activeCorner === "top-right") {
        playClosingAnimation("reverse-animate-top-right");
    } else {
        topLBtn.innerHTML = "ABOUT";
        bottomLBtn.innerHTML = "PROJECTS";
        bottomRBtn.innerHTML = "CONTACT";

        activeCorner = "top-right";
        topRBtn.innerHTML = "EXPERIENCE";

        handleWindowResize();

        topRContent.style.transform = trActive;
        bottomRContent.style.transform = brHidden;
        bottomLContent.style.transform = blHidden;
        topLContent.style.transform = tlHidden;
    }
};

bottomLBtn.onclick = function () {
    if (activeCorner === "bottom-left") {
        playClosingAnimation("reverse-animate-bottom-left");
    } else {
        topLBtn.innerHTML = "ABOUT";
        topRBtn.innerHTML = "EXPERIENCE";
        bottomRBtn.innerHTML = "CONTACT";

        activeCorner = "bottom-left";
        bottomLBtn.innerHTML = "PROJECTS";

        handleWindowResize();

        topRContent.style.transform = trHidden;
        bottomRContent.style.transform = brHidden;
        bottomLContent.style.transform = blActive;
        topLContent.style.transform = tlHidden;
    }
};

bottomRBtn.onclick = function () {
    if (activeCorner === "bottom-right") {
        playClosingAnimation("reverse-animate-bottom-right");
    } else {
        topLBtn.innerHTML = "ABOUT";
        topRBtn.innerHTML = "EXPERIENCE";
        bottomLBtn.innerHTML = "PROJECTS";

        activeCorner = "bottom-right";
        bottomRBtn.innerHTML = "CONTACT";

        handleWindowResize();

        topRContent.style.transform = trHidden;
        bottomRContent.style.transform = brActive;
        bottomLContent.style.transform = blHidden;
        topLContent.style.transform = tlHidden;
    }
};

// Behaviour on mobile screens

// document.addEventListener("DOMContentLoaded", function() {
//     var svgElement = document.querySelector(".hero"); 
//     var mobileImage = document.querySelector(".mobile-image");

//     function toggleDisplayForMobile() {
//         if (window.matchMedia("(max-width: 768px)").matches) {
//             svgElement.style.display = "none"; 
//             // mobileImage.style.display = "block"; 
//         } else {
//             svgElement.style.display = "block"; 
//             // mobileImage.style.display = "none"; 
//         }
//     }

//     toggleDisplayForMobile();
//     window.addEventListener("resize", toggleDisplayForMobile);
// });
