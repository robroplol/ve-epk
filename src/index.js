const $ = require("jquery");
const slick = require("slick-carousel");

$(document).ready(function () {
  $(".slide-container").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
});
