$(document).ready(function () {
    'use strict';

    $('.change-theme ul li').on('click', function () {
        $(':root').css('--maincolor', $(this).data('color'));  
    });

    // Start Transform Icons

    $('.our-button').click(function () {
        $('.our-button .bar:first-of-type').toggleClass('one');
        $('.our-button .bar:last-of-type').toggleClass('three');
        $('.our-button .bar:nth-of-type(2)').toggleClass('tow');
    })

    // Start Check The Value Of The Placeholder

    $('.placeholder-effect input[type="text"]').on('focusout', function () {
        if ($(this).val() != '') {
            $('.placeholder-effect').addClass('has-val');
        } else {
            $('.placeholder-effect').removeClass('has-val');
        }
    })

    // Start Custom Input File 

    $('.custom-input-file input[type="file"]').on('change', function () {
        var myLetterValue = $(this).val().length;
        $(this).prev('span').text($(this).val())
        if ($(this).prev('span').text().length > 15) {
            $(this).prev('span').text($(this).prev('span').text().slice(12, 15) + "..." + $(this).prev('span').text().slice(-4, myLetterValue))
        }
    })

    // Start Trigger NiceScroll Plugin

    $('html').niceScroll({
        cursorcolor: '#0a9cf1',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: 'none',
    });

    // Trigger To Fit Text

    $('.fittext h1').fitText(1.3, {
        minFontSize: 20,
         maxFontSize: 400
    });

    //Initialize Smooth Scroll

    smoothScroll.init({
        speed: 600,
        updateURL: false,
        offset: 100
        //callBackBefore/After: function (toggle, anchor) {}
    });

    // Start Typed.js

    $('.type-me').typed({
        strings: ['Amir Diafi', 'Web Developer', 'Web Designer', 'Front-End Developer', 'Javascript Developer', 'ReactJS'],
        typeSpeed: 50,
        startDelay: 1000,
        backDelay: 500,
        loop: true
    })

    // Start Fit Video JS Plugin

    $('.fit-vid').fitvids();

    // initialize Skitter JS Slider

    $('.box_skitter_large').skitter();

})