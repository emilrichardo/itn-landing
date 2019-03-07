// Efecto menu scroll


window.onscroll = function() {
	var navbar = document.getElementById("navbar");
	var logo = document.getElementById("logo-nav");
	var width = window.innerWidth;
	 
	if (window.pageYOffset == 0) {
		if(width < 482){
			navbar.style.background = "none";
			logo.style.width = "80px";
			logo.style.height = "80px";
			navbar.style.padding = "3rem 15px";			
		}else{
			navbar.style.background = "none";
			navbar.style.padding = "3rem 60px";
			logo.style.width = "110px";
			logo.style.height = "110px";			
		}
	}else{
		if(width < 482){
			logo.style.width = "70px";
			logo.style.height = "70px";
			navbar.style.padding = "0.5rem 15px";
			navbar.style.background = "#1e1e1e";	
		}else{
			navbar.style.background = "rgba(0,0,0,.5)";
			navbar.style.padding = "0.5rem 60px";
			logo.style.width = "80px";
			logo.style.height = "80px";
		}
	}
}

