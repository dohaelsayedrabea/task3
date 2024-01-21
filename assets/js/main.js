(function($) {
    "use strict";
    /*
  < !-- ============================================================== -->
  < !--Password Toggle js -- >
  < !-- ============================================================== -->
*/
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-lock fa-lock-open");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    /*
  < !-- ============================================================== -->
  < !--Header Mobile -- >
  < !-- ============================================================== -->
*/
    (function($) {
        $.fn.grtmobile = function() {
            $('.grt-mobile-button').on('click', function() {
                $(this).toggleClass("grt-mobile-button-open");
                $("ul.grt-menu").toggleClass("open-grt-menu ");
                $("html, body").toggleClass("body-overflow");
            });
            $('li.grt-dropdown').on('click', function(e) {
                $(this).toggleClass("active-dropdown");
            });
        }
    })(jQuery);

    // Initialize and check for mobile
    $.fn.grtmobile();

    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
})(jQuery);