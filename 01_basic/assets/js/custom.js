/**
 * Box 1
 */

gsap.to(".box1", {
    x: 100,
    y: 150,
    backgroundColor: "red",
    // backgroundColor: "var(--bs-red)",
    duration: 2,
    delay: 0.5,
    rotate: 180,
    scale: 1.5,
    // borderRadius: 50,
    borderRadius: "50%",
    ease: "back.inOut(3)",
});

/**
 * Box 2
 */

// gsap.set(".box2 img", {
//     transformOrigin: "50% 50%",
// });

// gsap.to(".box2 img", {
//     position: "relative",
//     left: "50%",
//     x: "-50%",
//     y: 30,
//     duration: 2,
//     ease: "back.inOut(3)",
//     rotation: 360,
// });

gsap.set(".gsapIcon2", {
    transformOrigin: "50% 50%",
});

const gsapIcon2Change = {
    left: "50%",
    x: "-50%",
    duration: 2,
    ease: "back.inOut(3)",
    rotation: 90,
    position: "relative",
};

// gsap.to(".gsapIcon2", gsapIcon2Change);
gsap.from(".gsapIcon2", gsapIcon2Change);
// gsap.fromTo(".gsapIcon2", gsapIcon2Change);

/**
 * Box 3
 */

// let easeArr = [];
// document.querySelectorAll(".box3>div").forEach((dot, i) => {
//     gsap.to(dot, {
//         duration: 1,
//         ease: easeArr[i],
//         delay: i * 0.06,
//         y: "50%",
//         x: "50%",
//     });
// });

// var gsapIcon3Change = {
//     rotation: 0,
//     x: "6.25rem",
//     y: "-6.25rem",
//     duration: 1,
// };

// gsap.to(".gsapIcon3, .pitbullDog3", gsapIcon3Change);

// var myObject = { x: 0 };

// gsap.to(myObject, {
//     duration: 5,
//     x: "10rem",
//     onUpdate: function () {
//         // console.log(myObject.x);
//     },
// });

gsap.set(".gsapIcon3_svg", { overflow: "visible" });
gsap.set(".gsapIcon3, .pitbullDog3", { transformOrigin: "50%" });

var gsapIcon3Change = {
    duration: 10,
    rotation: 360,
    x: 0,
};

gsap.to(".gsapIcon3, .pitbullDog3", gsapIcon3Change);

var myObject = {
    rotation: 0,
    x: 100,
};

gsap.to(myObject, {
    duration: 10,
    rotation: 360,
    x: 350,
    onUpdate: function () {
        if (myObject.rotation >= 100 && myObject.rotation <= 120) {
            // console.log(myObject.rotation);
            // console.log("if = x" + myObject.x);

            gsap.to(myObject, { x: 150 });
        } else {
            gsapIcon3Change.x = 10;
            // console.log("else = x" + myObject.x);
        }
    },
});

/**
 * Box 4
 */

var circle4Changes = {
    stagger: 0.25,
    xPercent: -50,
    yPercent: -50,
    rotation: 360,
};

var myObject2 = { stagger: 0 };

// gsap.set(".circle4", { position: "absolute" });

gsap.to(".circle4", circle4Changes);

gsap.from(".circle4", {
    borderRadius: "50%",
    duration: 5,
});

/**
 * Box 5
 */

let circle5 = document.querySelectorAll(".circle5");

gsap.set(circle5, { borderRadius: 0, scale: 1.1, x: 10, transformOrigin: "50%" });

gsap.to(circle5, { borderRadius: "50%", duration: 5, scale: 1.5, x: 150, y: 150, stagger: 0.5 });

gsap.fromTo(circle5, { backgroundColor: "blue", duration: 5, delay: 1 }, { backgroundColor: "green", duration: 5 });

/**
 * Box 6
 */

let circle6 = document.querySelectorAll(".circle6");

// gsap.from(circle6, { duration: 5, opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.5 });
gsap.from(circle6, { duration: 5, opacity: 0, y: "random(-200, 200)", stagger: 0.5 });

/**
 * Box 7
 */

let tl = gsap.timeline();
let circle7 = document.querySelectorAll(".circle7");

//sequenced one-after-the-other
tl.to(circle7, { duration: 2, x: 100, backgroundColor: "blue", stagger: 0.25 }) //notice that there's no semicolon!
    .to(circle7, { duration: 1, y: 150, stagger: 0.5, rotationY: 360, scaleX: 1.1 })
    .to(circle7, { duration: 2, x: 300, stagger: 0.75 })
    .to(circle7, { duration: 3, y: -150, stagger: 1, rotationX: 360 });