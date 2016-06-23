
	// selctor function
	function _(elm) {
		return document.querySelector(elm);
	}
	// diplay nav menu div
	document.getElementById("menuButton").addEventListener("click", function(){

		var nav = document.getElementById("nav");

		if (nav.style.display == "none" || nav.style.display == "") {

			this.innerHTML = "<i class='fa fa-times'></i>";
			nav.style.display = "block";

		} else {

			nav.style.display = "none";
			this.innerHTML = "<i class='fa fa-bars'></i>";

		}

	});



	// loading img
	window.onload = function(){
		document.getElementById("loader").style.display = "none";
	}