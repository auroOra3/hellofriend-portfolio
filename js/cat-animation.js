console.clear();

gsap.defaults({
    ease: "linear",
});

// PULL

gsap.set("#switch_string",{
    drawSVG: "0% 90%"
});

function pullAnim() {
    const pull = gsap.timeline({});
    pull
        .to("#right-hand",{
            rotate: 20,
            transformOrigin: "right bottom",
            repeat: 1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to("#switch",{
            y:17,
            ease: "power1.inOut"
        },"-=0.6")
        .to("#switch_string",{
            drawSVG: "0% 100%"
        },"-=0.6");

    return pull;
}

function pullPlay() {
    const pullPlay = gsap.timeline({repeat:-1, yoyo: true,repeatDelay:1});

    pullPlay
        .to("#switch_whole",{
            rotate:10,
            transformOrigin: "top center",
            duration: 1,
            ease: "sine.inOut",
            repeat: 1,
            yoyo: true,
        },0)
        .to("#right-hand",{
            rotate: 20,
            transformOrigin: "right bottom",
            repeat: 1,
            yoyo: true,
            duration: 1,
            ease: "power1.out"
        },0);

    return pullPlay;
};

// KITTY

gsap.set("#eye_left_open, #eye_right_open",{
    opacity: 0,
    scale: 1.2,
    transformOrigin: "center",
});

gsap.to("#left-hand",{
    rotate: -10,
    transformOrigin: "top",
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut"
});

function openEyes() {
    const open = gsap.timeline({});
    open
        .to("#eye_left_open, #eye_right_open",{
            opacity:1,
            duration: 0.01
    });

    return open;
}

// BLINK

function blinkEyes() {
    const blink = gsap.timeline({repeat: -1, repeatDelay:5});
    blink
        .to("#eye_left_open, #eye_right_open",{
            duration: 0.1,
            opacity: 1,
        })
        .to("#eye_left_open, #eye_right_open",{
            duration: 0.03,
            opacity: 0,
        })
        .to("#eye_left_open, #eye_right_open",{
            duration: 0.03,
            opacity: 0,
        })
        .to("#eye_left_open, #eye_right_open",{
            duration: 0.1,
            opacity: 1,
        });

    return blink;
}

// FACE ON MOUSE HOVER

$("#window").mouseenter(function() {
    gsap.to("#ear_left, #ear_right, #face_details",{y:-3, ease: "power2.inOut"});
    gsap.to("#face_details, #head_mark",{y:-2, ease: "power2.inOut"});
})

$("#window").mouseleave(function() {
    gsap.to("#ear_left, #ear_right",{y:0});
    gsap.to("#face_details, #head_mark",{y:0});
})

// TAIL

gsap.to("#tail", {
    rotation: 10, 
    transformOrigin: "top left", 
    duration: 1, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
});
  
// SUN / MOON

function sunMoonAnim() {

    const sunMoon = gsap.timeline({});

    sunMoon.to("#sunMoon",{
        rotate: 35,
        transformOrigin: "center",
        duration:1,
        ease: "power2.inOut"
    });

    return sunMoon;
}

// BLINDS

gsap.set("#blinds",{
    y:-10,
    scaleY: 0.1
});

function blindAnim() {

    const blinds = gsap.timeline({});

    blinds.to("#blinds",{
        y:0,
        scaleY: 1,
        duration:2,
        ease: "power2.inOut"
    });

    return blinds;
}

// GENERAL

var closeMaster = gsap.timeline({paused: true});

closeMaster
    .add(sunMoonAnim() )
    .add(pullAnim(),"-=1" )
    .add(blindAnim(),"-=0.5" )
    .add(openEyes(),"reverse" )
    .add(blinkEyes() )
    .add(pullPlay(),"+=0.5" )

var changeColors = gsap.timeline({paused: true,defaults:{duration:1, ease:"sine.Out"}});

changeColors
    .to("body",{backgroundColor: "#303853"},"color")
    .to("p",{color:"#ffffff"},"color")
    .to("h1",{color:"#98AEBE"},"color")


$("#window").click(function(){
    if ($(this).hasClass('close')){
        // Remove class and play back the animation
        $(this).toggleClass("close");
        closeMaster.reverse("reverse");
        // Change color to light
        // $("html").attr('data-theme', 'light');
        changeColors.reverse();
    } else {
        // Add class and play the animation
        $(this).toggleClass("close");
        closeMaster.play();
        // Change color to dark
        // $("html").attr('data-theme', 'dark');
        changeColors.play();
    }
});

$("#window").click(function(){
    if ($("html").hasClass('dark-mode')) {
        $("html").removeClass('dark-mode');
        changeColors.reverse();
    } else {
        $("html").addClass('dark-mode');
        changeColors.play();
    }
});