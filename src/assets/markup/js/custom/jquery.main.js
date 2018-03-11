jQuery(document).ready(function($){
    initMobileNav();
    initSearchToggle();
    initSliderWine();
    initAnchor();
 //   initNiceSelect();
    initSliderBlog();
    initPopup();
    initAccordion();
    initModal();
   // initFormValidation();
});

jQuery(window).load(function(){
    initIsotopeGrid();
});

function initMobileNav() {
    var navopener = jQuery('.nav-opener'),
    navwrap   = jQuery('.nav'),
    links     = navwrap.find('a:not(.has-dropdown-a)'),
    navactive = 'nav-active';

    navopener.click(function() {
        jQuery('body').toggleClass(navactive);
    });

    links.click(function() {
        jQuery('body').removeClass(navactive);
    });

    jQuery('html').on('click touchstart pointerdown MSPointerDown', function(e) {
        var target = jQuery(e.target);
        if(!target.closest(navopener).length && !target.closest(navwrap).length) {
            jQuery('body').removeClass(navactive);
        }
    });
}

function initSearchToggle() {
    jQuery('#header .search-opener').click(function() {
        jQuery('#header').addClass('search-active');
    });

    jQuery('.search-panel .close').click(function() {
        jQuery('#header').removeClass('search-active');
    });
}

function initIsotopeGrid() {
    jQuery('.grid-isotope').isotope({
        itemSelector: 'li',
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });
}

function initSliderWine() {
    jQuery('.slider-wine').on('init', function(event, slick, currentSlide) {
        if(slick.slideCount > 1) {
            jQuery('<div class="total-slide">' + slick.slideCount + ' sizes</div>').appendTo(jQuery(this));
        }
    });

    jQuery('.slider-wine').slick({
        arrows: false,
        dots: true
    })
}

function initAnchor() {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                return false;
            }
        }
    });
}

function initNiceSelect() {
    jQuery('select').niceSelect();
}

function initSliderBlog() {
    jQuery('.slider-blog').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });
}

function initPopup() {
    jQuery('#share-trigger').click(function() {
        jQuery('body').addClass('share-popup');
    });

    jQuery('.popup-share .close').click(function() {
        jQuery('body').removeClass('share-popup');
    });

    jQuery('.hero-cheer-play .popup-opener').click(function() {
        jQuery(this).parents('.hero-cheer-play').addClass('popup-active');
    });

    jQuery('.popup .close').click(function() {
        jQuery('.hero-cheer-play').removeClass('popup-active');
    });
}

// accordion menu init
function initAccordion() {
    jQuery('.faq-accordion').slideAccordion({
        opener: '.opener',
        slider: '.slide',
        animSpeed: 300
    });
}

// modal init
function initModal() {
    jQuery('body').mobileNav({
        hideOnClickOutside: true,
        menuActiveClass: 'modal-active',
        menuOpener: '.modal-opener',
        menuDrop: '.modal'
    });
}

//validation init
function initFormValidation() {
    jQuery('.form-validation').formValidation({
        errorClass: 'input-error',
        addClassToParent: '.form-group'
    });
}