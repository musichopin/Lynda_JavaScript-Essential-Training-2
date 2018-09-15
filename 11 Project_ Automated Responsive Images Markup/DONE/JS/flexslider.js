$(window).load(function() { //alt: $(window).on("load", function() { 
// top and bottom sections where we use slider
    $('.front-slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false
    });

    $('.story-slider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: true
    });
});
