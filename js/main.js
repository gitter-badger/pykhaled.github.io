$(function(){

	// make banner image shows up slowlly
	$(".banner__img").slideUp(100).delay(350).fadeIn(600);

	// hide loading image after loads
	$(window).load(function(){
		$("#loader").hide();
	});

});



/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mainNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("mainNav").style.width = "0%";
}