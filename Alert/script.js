$(function() {
    var b = $("#button");
    var w = $("#wrapper");
    var l = $("#list");
    
    w.height(l.outerHeight(true));
  
    b.click(function() {
    
      if(w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
    
    });
  });

  /* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
  pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

