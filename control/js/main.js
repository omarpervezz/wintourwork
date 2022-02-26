/*global $, WOW*/
/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Project Name		: Persoway - Responsive CV/Resume Template
 Author             : Yahya Essam
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2016 - Yahya Essam - https://themeforest.net/user/yahyaessam
===========================================================================
*/
var $window = $(window), /* window cash */
	$loading = $('.loading'), /* loading cash */
	$body = $("body"), /* body cash */
	$nav = $('#nav'), /* nav cash */
	$link = $("#nav a"), /* nav a cash */
	$date = new Date(),
	$year = $('#year'),
    $navToggle = $('.navbar-toggle'),
    $bars = $('#bars'),
    $navheader = $('#navheader');
    $vid = $('#pixelnavideobg');
/* Loading Animations */
$window.on("load", function () {
	'use strict';
	$loading.fadeOut();
});
$(function () {
    "use strict";
    
    
    /* Nav scroll */
    $window.on("scroll", function () {
        if ($window.scrollTop() > 280) {
            $nav.addClass("scroll");
        } else {
            //remove the background property
            $nav.removeClass("scroll");
        }
    });
    $navToggle.on('click', function() {
        
        if ($bars.hasClass('fa-bars')) {
            $bars.removeClass('fa-bars').addClass('fa-close');
            $navheader.css('background-color', '#fff');
        } else {
            $bars.removeClass('fa-close').addClass('fa-bars');
            $navheader.css('background-color','transparent');
        }
    });
    // document.querySelector('video').playbackRate = 0.5;

    /* Nav Toggle */
    // $link.on("click", function () {
    //     if ($(".navbar-toggle").css("display") !== "none") {
    //         $(".navbar-toggle").trigger("click");
    //     }
    // });
    
    /* Active Toggle */
    // $window.on("scroll", function (event) {
    //     var $scrollPos = $(document).scrollTop(),
    //         $links = $('.nav li a');
    //     $links.each(function () {
    //         var $currLink = $(this),
    //             $refElement = $($currLink.attr("href"));
    //         if ($refElement.position().top <= $scrollPos + 100 && $refElement.position().top + $refElement.height() > $scrollPos) {
    //             $links.removeClass("active").blur();
    //             $currLink.addClass("active");
    //         } else {
    //             $currLink.removeClass("active");
    //         }
    //     });
    // });
	// $body.scrollspy({target: "#nav", offset: 100});
	// $link.on('click', function (event) {
	// 	if (this.hash !== "") {
	// 		var hash = this.hash;
	// 		$('html, body').animate({
	// 			scrollTop: $(hash).offset().top
	// 		}, 800, function () {
	// 			window.location.hash = hash;
	// 		});
	// 	}
	// });
    /* Wow */
    new WOW().init();
    $year.text($date.getFullYear());
});

