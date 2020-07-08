$(document).ready(function (){
	var fixHeight = function (){
		$(".navbar-nav").css("max-height", document.documentElement.clientHeight - 150);
	}

	fixHeight();

	$(window).resize(function() {
		fixHeight();
	});

	$(".navbar .navbar-toggler").on("click",function (){
		fixHeight();
	});
	$(".navbar-toggler, .overlay").on("click", function (){
		$(".mobileMenu, .overlay, navbar-toggler-icon").toggleClass("open");
		$(".navbar-toggler").toggleClass("collapsed");
		
	});
	$('.navbar-nav>li>a').on('click',function(){
			$(".mobileMenu, .overlay, navbar-toggler-icon").toggleClass("open");
			$(".navbar-toggler").toggleClass("collapsed");	
	});
	// Research Center GIF Animation
	$("#imgAnimate1").hover(
		function(){
			$(this).attr("src","../assets/gif/title_search.gif")
	},
	function(){
			$(this).attr("src","../assets/images/research.png")
	}
	);
	// File Directory Settings GIF Animation
	$("#imgAnimate2").hover(
		function(){
			$(this).attr("src","../assets/gif/file_directory.gif")
	},
	function(){
			$(this).attr("src","../assets/images/dm.png")
	}
	);
	// Adding research materials GIF Animation
	$("#imgAnimate3").hover(
		function(){
			$(this).attr("src","../assets/gif/add_research.gif")
	},
	function(){
			$(this).attr("src","../assets/images/add_research.png")
	}
	);
	// ITISD-Maintenance Encoding GIF Animation
	$("#imgAnimate4").hover(
		function(){
			$(this).attr("src","../assets/gif/gif_itisd_add.gif")
	},
	function(){
			$(this).attr("src","../assets/images/itisd-srf.png")
	}
	);
	// ITISD-Maintenance Monthly Report GIF Animation
	$("#imgAnimate5").hover(
		function(){
			$(this).attr("src","../assets/gif/gif_itisd_report.gif")
	},
	function(){
			$(this).attr("src","../assets/images/itisd-reports.png")
	}
	);
	// ITS Accomplishment Time flow Report GIF Animation
	$("#imgAnimate6").hover(
		function(){
			$(this).attr("src","../assets/gif/gif_itisd_calculate.gif")
	},
	function(){
			$(this).attr("src","../assets/images/itisd-srf.png")
	}
	);
});