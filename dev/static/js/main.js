;

// Tabs
$(".tabs__list .tabs__link").click(function() {
	$(".tabs__list .tabs__link").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs__menu .tabs__menu-section").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// Burger menu
$(".burger-menu").click(function() {
	$(this).toggleClass("active");
	$(".off-canvas").toggleClass("off-canvas_opened");	
});

$(".off-canvas .main-nav__link").click(function() {
	$(".burger-menu").toggleClass("active");
	$(".off-canvas").toggleClass("off-canvas_opened");	
});

// Smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
