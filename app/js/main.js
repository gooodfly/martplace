$(function () {

    $(".rate-star").rateYo({
        starWidth: "17px",
        rating: 4.5,
        readOnly: true,
    });

    $('.slider-single__inner').slick({
        prevArrow: '<button class="slick-arrow slick-prev icon-angle-right"></button>',
        nextArrow: '<button class="slick-arrow slick-next icon-angle-right"></button>',

    });

    var mixer = mixitup('.product__inner-box');

});