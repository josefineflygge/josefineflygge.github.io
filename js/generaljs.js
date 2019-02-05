

/** LOADER **/
    var timer;

    function loadPage() {
        timer = setTimeout(showPage, 800);
    }

    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("loadable").style.visibility = "visible";
    }

/** Change background on scroll **/

  $(function () {
    $(document).scroll(function () {
      var $bg = $("#bg");
      $bg.toggleClass('scrolled', $(this).scrollTop() > 100);
    });
  });


/** Change text color on scroll **/
/*
  $(function () {
    $(document).scroll(function () {
      var $font = $(".bigfont");
      var $font2 =  $(".mediumfont");
      $font.toggleClass('scrolled', $(this).scrollTop() > 80);
      $font2.toggleClass('scrolled', $(this).scrollTop() > 80);
    });
  });
*/
  /** Scroll down button **/
  // scrolldown - button, scrolltothis - section to scroll to,

  $(function() {
    $('.scroll-down').click (function() {
      $('html,body, main').animate({scrollTop: $('.scrolltothis').offset().top }, 'slow');
      return false;
    });
  });
