var previousPosition = 0, // previous scroll position
    menuHeight = 54, // height of menu (once scroll passed it, menu is hidden)
    detachPoint = 650, // point of detach (after scroll passed it, menu is fixed)
    lilBitOfGive = 6; // scrolling value after which triggers hide/show menu




// only start parallaxin' a background if you can see it
var slideInView = function(){
  
  var $slide = $('.parallax'),
      scrollPosition = $(window).scrollTop(),
      windowHeight = $(window).height();
      
  $slide.each(function( index ) {
    var slideId = $(this).attr('id');
    
    if (windowHeight + scrollPosition >= $('#'+ slideId).offset().top) {
      var parallaxFactor = $('#'+ slideId).offset().top - (scrollPosition + windowHeight);
            $('.' + slideId +'-bg').css('top', -(parallaxFactor*0.125) - 150 +'px')
    }
  });
}







	
$(document).scroll(function(){
   if ($(window).width() > 700) {
     slideInView();
  }
});
 


