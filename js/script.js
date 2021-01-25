
let header = $("#headerJS");
let headerH = header.innerHeight();
let scrollPos = $(window).scrollTop();
let nav = $("#navJS");
let burger = $("#header__burger");
let burgerMenu = $("#menu-icon");
let headerBar = $("#barJS");

$(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > headerH) {
        headerBar.addClass("fixed");
        burger.addClass('active');
        burgerMenu.addClass('active');
    } else {
        headerBar.removeClass("fixed");
        burger.removeClass('active');
        burgerMenu.removeClass('active');
    }
});

// /*=========/.FIXED HEADER========*/

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset - 56
    }, 700);

});

// /*=========/.SMOOTH SCROLL========*/

$(document).ready(function () {
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        swipeToSlide: true
    });
});

// //*********/.SLIDER*********//

$(document).ready(function () {

    $('#menu-icon').click(function () {
        if ($('#header__burger').css("left") == "-250px") {
            $('#header__burger').animate({ left: '0px' }, 350);
            $('#menu-icon').animate({ left: '250px' }, 350);
            $('.menu-text').animate({ left: '300px' }, 350).empty().text("Close");
        }
        else {
            $('#header__burger').animate({ left: '-250px' }, 350);
            $(this).animate({ left: '0px' }, 350);
            $('.menu-text').animate({ left: '50px' }, 350).empty().text("Menu");

        }
    });
    $('#menu-icon').click(function () {
        $(this).toggleClass("on");
    });
});

// //*********/.BURGER*********//
