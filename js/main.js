
	function _(el) {
		return document.querySelector("#banner");
	}


	_("banner").style.height = innerHeight + "px";


	function navToggle(){

		var nav = document.getElementById("nav");

		nav.style.display = "block";

		nav.onclick = function(){
			this.style.display = "none";
		}
	}