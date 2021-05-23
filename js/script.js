let header = $("#headerJS");
let headerH = header.innerHeight();
let scrollPos = $(window).scrollTop();

let nav = $("#navJS");
let burger = $("#header__burger");
let burgerMenu = $("#menu-icon");
let headerBar = $("#barJS");

$(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop(); // обновление позиции скрола при прокрутке страницы

    if (scrollPos > headerH) {
        headerBar.addClass("fixed");
        burger.addClass("active");
        burgerMenu.addClass("active");
    } else {
        headerBar.removeClass("fixed");
        burger.removeClass("active");
        burgerMenu.removeClass("active");
    } if ( window.innerWidth >= 768 ) {
        burgerMenu.removeClass("active");
    }  

});

// /*=========/.FIXED HEADER========*/

$("[data-scroll]").on("click scroll", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll"); // получене id блока, который связан по data-scoll
    let elementOffset = $(elementId).offset().top;  // позиция каждого элемента от верха страницы

    $("html, body").animate(
        {
            scrollTop: elementOffset,
        },
        900
    );

    $(window).on("scroll", function () { // удаление класса fixed у header при прокрутке к блоку
        scrollPos = $(this).scrollTop();

        if (elementOffset == scrollPos) {
            headerBar.removeClass("fixed");
        } 
    });

});

// /*=========/.SMOOTH SCROLL========*/

$(document).ready(function () {
    $(".reviews__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        swipeToSlide: true,
    });
});

// //*********/.SLIDER*********//

$(document).ready(function () {
    burgerMenu.click(function () {
        if (burger.css("left") == "-250px") {
            burger.animate({ left: "0px" }, 350);
            burgerMenu.animate({ left: "250px" }, 350);
            $(".menu-text").animate({ left: "300px" }, 350).empty().text("Close");
            $(".header__logo").css({ opacity: "0" });
        } else {
            burger.animate({ left: "-250px" }, 350);
            $(this).animate({ left: "0px" }, 350);
            $(".menu-text").animate({ left: "50px" }, 350).empty().text("Menu");
            $(".header__logo").css({ opacity: "1" });
        }
    });
    burgerMenu.click(function () {
        $(this).toggleClass("on");
    });
    $(".burger__tab").click(function () {
        $(this).toggleClass("active");
        if ($(".burger__tab").hasClass("active")) {
            burger.animate({ left: "-250px" }, 350);
            burgerMenu.removeClass("on");
            burgerMenu.animate({ left: "0px" }, 350);
            $(".menu-text").animate({ left: "50px" }, 350).empty().text("Menu");
            $(".header__logo").css({ opacity: "1" });
        }
    });
});

// //*********/.BURGER*********//
