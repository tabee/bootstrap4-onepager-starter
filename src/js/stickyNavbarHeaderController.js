/**
 * Sticky Bootstrap navbar on scroll for Bootstrap 4.
 * http://bootbites.com/articles/freebie-sticky-bootstrap-navbar-scroll-bootstrap-4
 */
$(document).ready(stickyNavbarHeader);
$(window).on('resize', stickyNavbarHeader);

function stickyNavbarHeader() {
    // Custom
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });


    // Calculate header min-height
    var windowsHeight = $(window).height();
    var navbarHeight = $('#navbar-main').height();
    var navbarPaddingTop = parseFloat($('#navbar-main').css('padding-top'));
    var navbarPaddingBottom = parseFloat($('#navbar-main').css('padding-bottom'));
    var headerHeight = windowsHeight - (navbarHeight + navbarPaddingTop + navbarPaddingBottom);

    // set optimal min-height to header
    $("header").css('min-height', headerHeight + 'px');
}



