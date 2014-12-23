$(document).ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

// hover
	$(".js-hover").hover(
	  function() {
	    $(".js-hover").addClass("has-hover");
	  }, function() {
	    $(".js-hover").removeClass("has-hover");
	  }
	);

	$('.js-fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third and last page'],
		sectionSelector: '.js-section',
	});
});