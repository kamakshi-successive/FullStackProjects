$(".testcard_section").slick({
    infinite: true,
    slidesToShow: 1,
    focusOnSelect: true,
    centerPadding: "15%",
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerpadding: "50px",
    dots: true,
    responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: "2%",
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerPadding: "2%",
                slidesToScroll: 1,
            },
        },
    ],
});
// get video element id
var vedio = document.getElementById("vedio");
var playPauseButton = document.getElementById("playPauseButton");
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        vedio.play();
        playPauseButton.innerHTML = "&#9208;";
    } else {
        count = 0;
        vedio.pause();
        playPauseButton.innerHTML = "&#9658;";
    }
}
var theToggle = document.getElementById("toggle");

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
    return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += " " + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, "");
    }
}
// toggleClass
// function toggleClass(elem, className) {
//     var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
//     if (hasClass(elem, className)) {
//         while (newClass.indexOf(" " + className + " ") >= 0) {
//             newClass = newClass.replace(" " + className + " ", " ");
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, "");
//     } else {
//         elem.className += " " + className;
//     }
// }

// theToggle.onclick = function() {
//     toggleClass(this, "on");
//     return false;
// };


$("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#menu").slideToggle();
});