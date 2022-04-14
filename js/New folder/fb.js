$(document).ready(function() 
{
	$(".w2bslikebox").hover(function() 
		{
			$(this).stop().animate({left: "0"}, "medium");
		}, 
			function() {
					$(this).stop().animate({left: "-223"}, "medium");
				}, 
					500);
});