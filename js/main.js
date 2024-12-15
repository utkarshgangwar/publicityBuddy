(function ($) {
    "use strict";

    const validPaths = [
        'index.html',
        'about.html',
        'contact.html',
        'services.html',
        'publicRelation.html',
        'digitalMarketing.html',
        'eventManagement.html',
        'politicalCampaign.html',
        'advertisement.html',
        '404.html'
    ];
    
    // Get the current path from the URL (without the domain)
    const fullPath = window.location.pathname;
    
    // Remove the base path "/publicityBuddy/" from the full path
    const basePath = '/publicityBuddy';  // The path where your site is hosted
    
    // Strip base path and get the file name from the URL
    let routeName = fullPath.replace(basePath, '').split('/').pop();  // Strip base path and get the file name
    
    // Handle the case where the route is "/" (root path)
    if (fullPath === basePath + '/' || fullPath === basePath) {
        window.location.replace(basePath + '/index.html');  // Redirect to index.html if root path is accessed
    } else if (routeName !== 'index.html' && !validPaths.includes(routeName)) {
        // Only check for valid paths and 404 redirection if not on the root path
        window.location.replace(basePath + '/index.html');  // Redirect to the 404 page if the route is invalid
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);
