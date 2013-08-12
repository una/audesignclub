console.log('js running');

//if height of #content + #header > window height, footer is relatively positioned (keeps it on bottom)
var footerPosition = function(){
	if (document.height > window.innerHeight){
		$('footer').css('position','relative');
	}
};

footerPosition();