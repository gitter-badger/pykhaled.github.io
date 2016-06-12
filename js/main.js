
	function _(el) {
		return document.querySelector("#banner");
	}

	// makes banner's height is the window's height
	_("banner").style.height = innerHeight + "px";

	// diplay nav menu div
	document.getElementById("menuButton").addEventListener("click", function(){

		var nav = document.getElementById("nav");

		if (nav.style.display == "none") {

			this.innerHTML = "<i class='fa fa-times'></i>";
			nav.style.display = "block";

		} else {

			nav.style.display = "none";
			this.innerHTML = "<i class='fa fa-bars'></i>";

		}

	});

