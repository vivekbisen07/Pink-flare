function timelineOne() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#first",
            pin: true,
            start: "top top",
            scrub: 1,
        }
    })

    t1
        .from("#center ", {
            x: 500,
            ease: Power1,

        }, )
        .to("#circle", {
            scale: 0.1,
            ease: Power1,

        }, "a")
        .to("#mainimage img", {
            scale: 1.25,
            ease: Power1,

        }, "a")
        .from("#gallery", {
            bottom: "-15%",
            ease: Power0,

        }, "a")
        .to("#pflare", {
            bottom: "-15%",
            ease: Power0,
            rotate: 0,

        }, "a")
        .to("#circle #btm img", {
            scale: 1,
            rotate: "-180deg",
            stagger: 0.04,
            ease: Power1,

        }, "a")
        .to("#smcircle", {
            scale: 0.5,
            ease: Power1,

        }, "a")
        .from("#overlay #purple", {
            y: 400,
            scale: 0.3,
            ease: Power1,

        }, "a")
        .to("#center span", {
            opacity: 0,
            ease: Power1,

        }, "a")
        .to("#center img", {
            ease: Power1,
            scale: 0,
            delay: 0.09,

        }, "a")

    .to("#purple", {
            opacity: -1,
            ease: Power0,

        }, "same")
        .to("#smcircle", {
            scale: 0,
            ease: Power1,


        }, "same")
        .to("#circle", {
            scale: 0,
            ease: Power1,

        }, "same")
        .to("#mainimage img", {
            scale: 1,
            ease: Power1,

        }, "same")
        .to("#purplebox", {
            top: "-40%",
            delay: 0.1,
            ease: Power1,

        }, "same")

}


function timelineTwo() {
    gsap.set("#soverlay #boxone .circle", { top: "150%", scale: .5 })


    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            pin: true,
            // markers: true,
            start: "top top",
            scrub: 1,
            // duration: 100000

        }
    })
    t2
        .to("#boxone .circle", {
            top: "50%",
            scale: 1,
            stagger: 0.1,
            ease: Power1

        })
        .to("#boxone .circle", {
            top: "50%",
            left: "50%",

            stagger: 0.1,
            ease: Power1

        })

    .to("#boxone .circle", {
            scale: .7,
            ease: Power1

        }, "clr")
        .to("#boxone .circle", {
            scale: 7,
            ease: Power1
        }, "one")
        .to("#soverlay #navbar #lnav h3", {
            color: "#fff",
            fontWeight: 600,
            ease: Power1

        }, "clr")
        .to("#boxone h1", {
            left: "-150%",
            ease: Power1,
        }, "left")
        .to("#boxone .pi", {
            background: `linear-gradient(to right , #D5A7B4,#b4aad9, #b4aad9)`,
            ease: Power1,
            delay: 0.05
        }, "left")
        .to("#boxone #pinkb .bone", {
            top: "0%",
            ease: Power1,
            stagger: 0.05
        }, )

    .to("#boxone #pinkb .bone .bd", {
            left: "-50%",
            ease: Power1,
        }, )
        .to("#boxone #pinkb .bone .bd .bdd", {
            left: "-25%",
            ease: Power1,
        }, )

    .to("#boxtwo #pa", {
            opacity: 0,
            delay: 0.09,
            ease: Power1
        }, "one")
        .to("#boxtwo #pb", {
            opacity: 1,
            delay: 0.1,
            ease: Power1
        }, "left")
        .to("#boxtwo #square :nth-child(1)", {
            top: "-50%",
            delay: 0.1,
            ease: Power1
        }, "one")
        .to("#boxtwo #square :nth-child(2)", {
            top: "-50%",
            // delay: 0.1,
            ease: Power1
        }, "left")
        .to("#boxtwo #square :nth-child(3)", {
            top: "50%",
            delay: 0.4,
            ease: Power1
        }, "left")

}

function timelineThree() {



    var t3 = gsap.to("#third", {
        scrollTrigger: {
            trigger: "#third",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // /: "buttom 90%",
            scrub: 1
        },






    }, "copy")
    var t4 = gsap.to("#thirdlay #centerbox #navbar", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            pin: true,
            // markers: true,
            start: "top top",

            scrub: 0.1
        },



    }, )
    var b1 = gsap.to("#thirdlay #btmnav", {
        scrollTrigger: {
            trigger: "#pset",
            scroller: "body",
            pin: true,
            // markers: true,
            start: "top top",
            // scrub: 0.1
        },

    }, )
    var t5 = gsap.to("#rowthree", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 1
        },
        rotate: 90
    }, )
    var t6 = gsap.to("#rowfour h3", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 2
        },
        x: -700
    }, )
    var t7 = gsap.from("#rsone h2", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 2
        },
        x: -200
    }, )
    var t8 = gsap.from("#rstwo h2", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 2
        },
        x: 200
    }, )
    var t9 = gsap.from("#rstree h2", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 2
        },
        x: -300
    }, )
    var t10 = gsap.to("#imgthree img", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 1
        },
        y: -500,
        delay: 1
    }, )
    var t11 = gsap.to("#imgtwo img", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 1
        },
        y: -250,
        delay: 5
    }, )
    var t12 = gsap.to("#rowseven h1", {
        scrollTrigger: {
            trigger: "#fixed",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top top",
            // end: "buttom 90%",
            scrub: 0.1
        },
        x: -400,
        delay: 2
    }, )






}

function timelinefour() {
    var p1 = gsap.to("#fourth #finish", {
        scrollTrigger: {
            trigger: "#fourth",
            scroller: "body",
            // pin: true,
            // markers: true,
            start: "top 90%",
            end: "buttom 32%",
            scrub: 1
        },
        // y: -100,
        scale: 7,
        duration: 25,
        // y: 10
        // delay: 50
    }, )
}



window.addEventListener("DOMContentLoaded", function() {
    timelineOne();
    timelineTwo();
    timelineThree();
    timelinefour();


})