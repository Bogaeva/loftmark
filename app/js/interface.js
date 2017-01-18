$(document).ready(function() {

	// show video
	$(".video-control__btn").on("click", function() {
		$(".video-block").addClass("video-block_show-video");
	});

	// hide video
	$(".video-wrap__close-icon").on("click", function() {
		$(".video-block").removeClass("video-block_show-video");
	});

	// show/hide all news
	$( ".news-block__title" ).on("click", function() {
	  $( ".news-block__body" ).slideToggle( 300 );
	});

	// hide news text when page loaded
	$(".news-block__col-body").hide();

	// show/hide one news
	$(".news-block-btn").on("click", function() {
	  $(this).find(".glyphicon-menu-down").toggleClass("glyphicon-menu-up");
	  $(this).closest(".news-block__col").find(".news-block__col-body").slideToggle( 300 );
	});

	// show room caption and room elements
	$(".room-control").on("click", function() {
		var id = $(this).attr("id");
		$("img." + id).show();
		$(".interest-block__comment." + id).show();
	});

	// hide room comments
	$(".interest-block__close-icon").on("click", function() {
		$(this).closest(".interest-block__comment").hide();
	});

	// slider with hover controls
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items:1,
		addClassActive : true,
		loop: true,
		nav: true,
		mouseDrag: false,
		dots: false,
		autoplay: true,
		navText: false
	});
	$(".owl-next").mouseover(function(){
		owl.trigger('next.owl.carousel');
	});
	$(".owl-prev").mouseover(function(){
		owl.trigger('prev.owl.carousel');
	});

	$(".nav-tabs a").on("click", function(){
		var te = $(this).attr('href');
		$(".owl-carousel").removeClass('visible');
		$(".owl-carousel").each(function(){
			if ($(this).attr('data-name') == te) {
				$(this).addClass('visible');
			} 
		});
	});

	// form validate 
	$("form").validate();

});

// call of calculating height of news titles
$(window).on("load", function() {
  equalheight('.news-block__col-title');
});

$(window).on("resize", function(){
  equalheight('.news-block__col-title');
});


// functions

// calculate height of news titles
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

// add mask for input with tel
$(function(){
  $("#tel").mask("8(999) 999-9999");
});