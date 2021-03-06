jQuery(document).ready(function(){

jQuery("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false,show_title:false});

/*Navigation mode (check if is IE, do nothing)
/*---------------------------------------------------------------------------------------------*/
if ( jQuery.browser.webkit || jQuery.browser.mozilla || jQuery.browser.opera || (jQuery.browser.msie && jQuery.browser.version  > 8 ) ) {
	jQuery('#menu-primary-menu').Touchdown();
};

/*Wrap the first word
/*---------------------------------------------------------------------------------------------*/
	jQuery('.first-word,.first-word a').each(function(index) {
		//get the first word
		var firstWord = jQuery(this).text().split(' ')[0];
	
		//wrap it with strong
		var replaceWord = "<strong>" + firstWord + "</strong>";
	
		//create new string with span included
		var newString = jQuery(this).html().replace(firstWord, replaceWord);
	
		//apply to the divs
		jQuery(this).html(newString);
	});
});

