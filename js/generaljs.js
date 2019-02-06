
/** INIT SCROLL ANIMATIONS **/
AOS.init();

/** LOADER **/
/*
    var timer;

    function loadPage() {
        timer = setTimeout(showPage, 800);
    }

    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("loadable").style.visibility = "visible";
    }
    */

/** Change background on scroll **/

  $(function () {
    $(document).scroll(function () {
      var $bg = $("#bg");
      $bg.toggleClass('scrolled', $(this).scrollTop() > 100);
    });
  });


  /** Change text color on scroll **/
    $(function () {
      $(document).scroll(function () {
        var $font = $("#josse");
        $font.toggleClass('scrolled', $(this).scrollTop() > 80);
      });
    });
