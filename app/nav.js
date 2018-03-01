$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 200) {
      $('#global-nav').addClass('scrolled-nav');
      $('.right-events').removeClass('display-none');
    } else if (scrollTop < 200) {
      $('#global-nav').removeClass('scrolled-nav');
      $('.right-events').addClass('display-none');
    } 
    
  }); 
  
});