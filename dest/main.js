// const { option } = require("grunt");

// viết hiêu ứng
var nav = document.querySelector(".nav");
const hamburger = document.querySelector('.hamburger i');
const header = document.querySelector('.header');
const slider = document.querySelector('.slider');
var menuA = document.querySelectorAll(".menu__item a");
var headerHeight = header.clientHeight;
// đổi icon hamburger

hamburger.addEventListener("click", function() {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        hamburger.classList.remove("fa-bars")

        hamburger.classList.add("fa-times")
    }
    if (!nav.classList.contains("open")) {
        hamburger.classList.add("fa-bars")

        hamburger.classList.remove("fa-times")
    }
})
var pageY = window.pageYOffset;

//header background ++ back to top + scroll menu active
var headerTop = document.querySelector("#header").offsetTop;
var productsTop = document.querySelector("#products").offsetTop;
var qualityTop = document.querySelector("#quality").offsetTop;

var aboutTop = document.querySelector("#about").offsetTop;
var galleryTop = document.querySelector("#gallery").offsetTop;
var newTop = document.querySelector("#new").offsetTop;
var dragTop = document.querySelector(".slider__drag").offsetTop;



window.addEventListener("scroll", function() {
    var pageY = window.pageYOffset;
    var qualityHeight = document.querySelector(".quality").offsetTop;
    var sliderHeight = slider.clientHeight;

    if (pageY > (sliderHeight - headerHeight)) {
        header.classList.add("black");
    }
    if (pageY < (sliderHeight - headerHeight)) {
        header.classList.remove("black");
    }
    if (pageY > qualityHeight) {

        back.classList.remove("remove");
    } else {
        back.classList.add("remove")
    }

})

// inner lang
var langCur = document.querySelector(".language__current");
var langCurSpan = document.querySelector(".language__current span");

var langOp = document.querySelector(".language__option");
var langBoxs = document.querySelectorAll(".lang__box");

langCur.addEventListener("click", function(e) {
    e.stopPropagation();
    langOp.classList.toggle("block");
})

langBoxs.forEach(function(langBox) {
        langBox.addEventListener("click", function(e) {
            e.preventDefault();
            langOp.classList.remove("block");
            var content = langBox.textContent;
            var CurContent = langCurSpan.textContent;

            langCurSpan.innerHTML = content;
            langBox.innerHTML = CurContent;
        })
    })
    // slider
var sliderItems = document.querySelectorAll(".slider__item");
var sliderList = document.querySelector(".slider__list");
var prev = document.querySelector(".btn.--prev");
var next = document.querySelector(".btn.--next");
var number = document.querySelector(".number");
var dots = document.querySelectorAll(".dotted");
var curIndex = 0;
//prev next
setInterval(function() {
    if (curIndex < sliderItems.length - 1) {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[curIndex + 1].classList.add("--active");

        dots[curIndex].classList.remove("--active");
        dots[curIndex + 1].classList.add("--active");
        curIndex++;

    } else {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[0].classList.add("--active");
        dots[curIndex].classList.remove("--active");
        dots[0].classList.add("--active");
        curIndex = 0;

    }
    number.innerHTML = "0" + (curIndex + 1);
}, 6000);

sliderItems.forEach(function(item, index) {
    if (item.classList.contains("--active")) {

        curIndex = index;
    }
})
dots.forEach(function(dot, index) {
    if (dot.classList.contains("--active")) {

        indexDot = index;
    }
})
next.addEventListener("click", function() {
    if (curIndex < sliderItems.length - 1) {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[curIndex + 1].classList.add("--active");

        dots[curIndex].classList.remove("--active");
        dots[curIndex + 1].classList.add("--active");
        curIndex++;

    } else {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[0].classList.add("--active");
        dots[curIndex].classList.remove("--active");
        dots[0].classList.add("--active");
        curIndex = 0;
    }
    number.innerHTML = "0" + (curIndex + 1);


})
prev.addEventListener("click", function() {
    if (curIndex > 0) {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[curIndex - 1].classList.add("--active");
        curIndex--;
        dots[curIndex + 1].classList.remove("--active");
        dots[curIndex].classList.add("--active");

    } else {
        sliderItems[curIndex].classList.remove("--active");
        sliderItems[sliderItems.length - 1].classList.add("--active");
        curIndex = sliderItems.length - 1;
        dots[0].classList.remove("--active");
        dots[curIndex].classList.add("--active");
    }
    number.innerHTML = "0" + (curIndex + 1);

})
dots.forEach(function(dot, index) {
    dot.addEventListener("click", function handleDot() {

        sliderItems.forEach(function(em) {
            em.classList.remove("--active");
        })
        dots.forEach(function(em) {
            em.classList.remove("--active");
        })
        sliderItems[index].classList.add("--active");
        dots[index].classList.add("--active");
        console.log(index)
        number.innerHTML = "0" + (index + 1);


    })
})

// xử lý nav
var windowWidth = window.innerWidth;

window.addEventListener("resize", function() {
    if (windowWidth > 992) {
        nav.classList.remove("open");
        hamburger.classList.add("fa-bars")

        hamburger.classList.remove("fa-times")
    }
})

//back to top
var back = document.querySelector(".backtotop");
var backFooter = document.querySelector(".back");


back.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    });
})
backFooter.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"

    });
})

// popup video
var popup = document.querySelector(".popup-video");
var iframe = document.querySelector(".wrapper__video-yt");
var audio = document.querySelectorAll(".audio-play");
var close = document.querySelector(".close");

audio.forEach(function(e) {
    e.addEventListener("click", function() {
        var data = e.getAttribute("data");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + data + "?autoplay=1")
            //open popUp
        this.addEventListener('click', function(e) {
            e.stopPropagation();
            popup.classList.add("open");
        })
    })
})

close.addEventListener("click", function(e) {
    e.stopPropagation();
    popup.classList.remove("open");
    iframe.setAttribute('src', "")
})
document.addEventListener("click", function() {
    langOp.classList.remove("block");
    popup.classList.remove("open");
    iframe.setAttribute('src', "") // hoy z nha okee

})

//scroll menu + nav

menuA.forEach(function(e) {
    e.addEventListener("click", function(event) {
        menuA.forEach(function(event) {
            event.classList.remove("active");
        })
        var href = e.getAttribute("href");
        var section = href.replace("#", "");
        var sectionItem = document.querySelector("." + section);
        var sectionTop = document.querySelector("." + section).offsetTop;
        var top = sectionTop - headerHeight + 10;
        event.preventDefault()


        window.scrollTo({

            top: top,
            behavior: "smooth"

        });
        e.classList.add("active");

    })
})

var navA = document.querySelectorAll(".nav__list-item a");

navA.forEach(function(a) {
        a.addEventListener("click", function(aa) {
            aa.preventDefault();
            nav.classList.remove("open");
            var hrefMobile = a.getAttribute("href");
            var sectionMobile = hrefMobile.replace("#", "");
            var sectionTopMobile = document.querySelector("." + sectionMobile).offsetTop;
            var topMobile = sectionTopMobile - headerHeight + 10;

            hamburger.classList.toggle("fa-bars");

            hamburger.classList.toggle("fa-times");

            window.scrollTo({

                top: topMobile,
                behavior: "smooth"

            });

        })
    })
    // FAQ + Arcrordian
var newbtn = document.querySelectorAll(".new__btn-choose");
var newItem = document.querySelectorAll(".new__items");



newbtn.forEach(function(item, index) {
    item.addEventListener("click", function() {

        newbtn.forEach(function(e) {
            e.classList.remove("active");
        })

        newItem.forEach(function(e) {
            e.classList.add("hidden");

        })
        item.classList.add("active");
        newItem[index].classList.remove("hidden");
    })
})

var faqTitle = document.querySelectorAll(".faq__item-title");

var faqPara = document.querySelectorAll(".faq__item-para");

faqTitle.forEach(function(item) {
    item.addEventListener("click", function() {

        // faqTitle.forEach(function(e) {
        //     e.classList.remove("ok");
        // })
        this.classList.toggle("ok");
        var panel = this.nextElementSibling;
        // faqPara.forEach(function(p) {
        //     p.style.height = "0";
        // })
        if (panel.style.height) {
            var i = item.lastChild;
            i.classList.remove("fa-sort-up");
            i.classList.add("fa-sort-down");

            panel.style.height = null;
        } else {
            var i = item.lastChild;
            i.classList.remove("fa-sort-down");
            i.classList.add("fa-sort-up");
            panel.style.height = panel.scrollHeight + "px";
        }





    })
})