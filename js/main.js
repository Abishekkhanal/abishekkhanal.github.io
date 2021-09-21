(function($) {

	"use strict";	

  


})(jQuery);






$(window).load(function () {
    blogisotope = function () {
        var e, t = $(".blog-Abishek").width(),
            n = Math.floor(t);
        if ($(".blog-Abishek").hasClass("Abishek-true") === true) {
            n = Math.floor(t * .3033);
            e = Math.floor(t * .04);
            if ($(window).width() < 1023) {
                if ($(window).width() < 768) {
                    n = Math.floor(t * 1)
                } else {
                    n = Math.floor(t * .48)
                }
            } else {
                n = Math.floor(t * .3033)
            }
        }
        return e
    };
    var r = $(".blog-Abishek");
    bloggingisotope = function () {
        r.isotope({
            itemSelector: ".post-Abishek",
            animationEngine: "jquery",
            Abishek: {
                gutterWidth: blogisotope()
            }
        })
    };
    bloggingisotope();
    $(window).smartresize(bloggingisotope)
})