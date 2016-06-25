$(function(){

	// make banner image shows up slowlly
	$(".banner__img").slideUp(100).delay(350).fadeIn(600);


	// nav button behavior
	$( "#menuButton" ).click(function() {
		$("#nav").toggle(100);
	});


	// hide loading image after loads
	$(window).load(function(){
		$("#loader").hide();
	});

});