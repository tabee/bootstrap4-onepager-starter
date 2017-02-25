/**
 * Load OWL 2 carousels settings.
 *
 */
// $(document).ready(function () {

    $('#owl-carousel-welcome').owlCarousel({
        items: 1,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        lazyLoad: true,
        loop: true,
        margin: 0
    }); // control the zoomIn-zoomOut carousel in the first section

    $('#owl-carousel-demo').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10
    }); // control the normal standard carousel

// });