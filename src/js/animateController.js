// welcome animation over all
$(document).ready(function () {
    $('html').animateCss('bounce');
});

// A tada animation for all fontawesome icons.
$( ".fa" ).hover( function() {
    $(this).animateCss('tada'); // Issue: it breaks fontawesome default animation after hover.
});

// A zoomOut animation for all href's
$("a.fa").on('click', function () {
    $(this).animateCss('zoomOut');
});

// helper from fontawesome to add needed classes.
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


