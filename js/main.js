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
 


$('.fb-linky').on('click', function(){
  var linkName = 'Overflow | Title of the Section', 
      linkPicture = $(this).attr('data-linkPicture'),
      linkDescription = 'Placeholder content for right now...could be soundbite from each section or the same message no matter what to display here.';
  
  FB.ui(
   {
     method: 'feed',
     name: linkName,
     link: 'http://overflow.dev/',
     picture: linkPicture,
     description: linkDescription,
     caption: 'Overflow'
  }, function(response){});
})

$('.twitter-linky').on('click', function(){
  var linkName = 'Overflow | Title of the Section', 
      linkPicture = $(this).attr('data-linkPicture'),
      linkDescription = 'Placeholder content for right now...could be soundbite from each section or the same message no matter what to display here.';
  
  FB.ui(
   {
     method: 'feed',
     name: linkName,
     link: 'http://overflow.dev/',
     picture: linkPicture,
     description: linkDescription,
     caption: 'Overflow'
  }, function(response){});
})