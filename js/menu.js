function openDiv(){
  var theDiv = document.getElementById("myDiv");
  theDiv.style.transform = "scale(1)";
}
function closeDiv(){
    var closeDiv = document.getElementById("myDiv");
  closeDiv.style.transform = "scale(0)"; 
}


// show/hide footer content - change tab text
$('.button-wrapper').click(function(){
	$('.footer-wrapper').toggleClass('open');
	
	if ( $('.footer-wrapper').hasClass('open') ) {
		$('.button-wrapper button').text("Close");
	} else {
		$('.button-wrapper button').text("Open");
	}
});

$('.footer-wrapper').css("border","1px solid #000");
$('.button-wrapper button').css("background-color","#000");

$(".footer-wrapper").hover(function(){
  $(this).css("background-color", "black");
});
