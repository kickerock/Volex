// main.js file
// Author: Andrew Narolskii
// Email: kickerwrk@gmail.com
// 2018

$(document).ready(function() {
  setTimeout(function(){
		$('body').removeClass('loading');
	}, 3000);


  // owl
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    animateOut: 'fadeOut',
    items: 3,
    center: true,
    loop: true,
    mouseDrag: false,
    dots: false,
    nav: true,
    navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],
    URLhashListener: true,
    startPosition: 'URLHash',
    responsive: {
      480: {
        items: 3
      },
      0: {
        items: 1,
        nav: true,
        dots: true
      }
    }

  });
  owl.on('changed.owl.carousel', function(property) {
    var current = property.item.index;
    var url = "#" + $(property.target).find(".owl-item").eq(current).find('.slide').attr('data-hash');
    var controls = $('.slide-controls a');
    controls.removeClass('doted');
    for (var i = 0; i < controls.length; i++) {
      if ($(controls[i]).attr('href') == url) {
        $(controls[i]).addClass('doted');
      }
    }

  });

  // Nav Panel
  var changes = 0;
  $nav = $('.navbar');
  if($(window).width() < 600) {
    $nav.addClass('not-trans');
    $('.navbar-toggler').show();
    $('#navb1').addClass('collapse');
    $('.nav-item a').click(function () {
      $('#navb1').removeClass('show');
    });
  }else {
    changes = 30;
    $(window).scroll(function() {
      var $this = $(this);
      if ($this.scrollTop() > $nav.height()) {
        $nav.addClass('not-trans');
      } else {
        $nav.removeClass('not-trans');
      }
    });
  }


  // Scroll

  $('a[href*=\\#]:not([href=\\#])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.selector == '#navb1') return;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - changes
        }, 1000);
        return false;
      }
    }
  });

  // MixItUp
  mixitup(document.querySelector('.portfolio__blocks'));

});
