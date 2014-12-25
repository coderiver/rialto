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

	var lengthSections = $(".js-section").length;
	$(".js-nav-all").text(lengthSections);

	var fpage = $('.js-fullpage');
	if (fpage.length) {
		fpage.fullpage({
			anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
			// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
			//navigation: true,
			//navigationPosition: 'right',
			//navigationTooltips: ['First page', 'Second page', 'Third and last page'],
			sectionSelector: '.js-section',
			controlArrows: true,
			verticalCentered: true,
			fixedElements: '.header, .footer',
			responsive: 1,
			easing: 'easeInQuart',
			easingcss3: 'ease-in-out',
			onLeave: function(index, nextIndex, direction){
				$(".js-nav-curent").text(nextIndex);
			},
			afterLoad: function(anchorLink, index){
	            //using index
	            if(index == 1){
	                $(".js-nav-prev").addClass("is-inactive");
	            }
	            else {
	            	$(".js-nav-prev").removeClass("is-inactive");
	            }
	            if(index == lengthSections){
	                $(".js-nav-next").addClass("is-inactive");
	            }
	            else {
	            	$(".js-nav-next").removeClass("is-inactive");
	            }

	            // //using anchorLink
	            // if(anchorLink == 'secondSlide'){
	            //     alert("Section 2 ended loading");
	            // }
	        }
		});

	}

	function navBtn() {
		var index = $(".js-section.active").index();
		alert(index);
	}
	//navBtn();

	$(".js-nav-prev").on("click", function(){
		fpage.fullpage.moveSectionUp();
		return false;
	});

	$(".js-nav-next").on("click", function(){
		fpage.fullpage.moveSectionDown();
		return false;
	});
	
	$(".js-menu-toggle").on("click", function(){
		$(this).toggleClass("is-active");
		$(".js-menu").toggleClass("is-active");
		$("html").toggleClass("has-open-nav");
		return false;
	});
});