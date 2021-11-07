XA.component.Navigation = (function($) {
    var api = {};
    api.initInstance = function() {
        setupScrollEvent();             
    };

    api.init = function() {
        var navigation = $(".navigation");                 
        if (navigation.length > 0) {               
            setupScrollEvent();
        }
    };
    /* Setting Scroll Event to Add Sticky class */
    function setupScrollEvent() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 200) {
                $("nav").addClass("sticky");
            }else {
                $("nav").removeClass("sticky");
            }
        });
    }
    return api;
})(jQuery, document);

XA.register("Navigation", XA.component.Navigation);
