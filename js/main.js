// only start parallaxin' a background if you can see it
function slideInView(){
  
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



// fade in the video player
function playerInView(){
  
  var $playButton = $('.play-button'),
      scrollPosition = $(window).scrollTop(),
      windowHeight = $(window).height();
      
  if (windowHeight + scrollPosition >= $playButton.offset().top) {
    $playButton.css('opacity', 1);
  }
}





var videoWidth = function(){
  var $video = $('.background-video'),
      $hero = $('#hero');
  
  
  if($hero.height() > $hero.width()){
    
    $video.css({
      "width" : "auto",
      "height": $hero.height() + 100
    });
    
  } else {
    
    if($hero.height() > $video.height()){
      $video.css({
        "width" : "auto",
        "height": $hero.height() + 100
      })
      
    } else {
      $video.css({
      "width" : '100%',
      "height": 'auto'
    });
   } 
  }
  
}


	
$(document).scroll(function(){
   if ($(window).width() > 700) {
     playerInView();
     slideInView();
  }
});
 


