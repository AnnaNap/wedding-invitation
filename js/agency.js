/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
$(document).ready(function() {

  const images = [
    "/img/backgrounds/header/foto1.png",
    "/img/backgrounds/header/foto2.png",
    "/img/backgrounds/header/foto3.png",
    "/img/backgrounds/header/foto4.png",
    "/img/backgrounds/header/foto5.png"
  ];

  let index = 0;
  const $header = $("header");

  if ($header.length === 0) {
    console.log("HEADER NON TROVATO");
    return;
  }

  console.log("SLIDESHOW PARTITO");

  // preload
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // iniziale
  $header.css("background-image", `url(${images[0]})`);

  setInterval(function () {
    index = (index + 1) % images.length;
    $header.css("background-image", `url(${images[index]})`);
  }, 4000);

});