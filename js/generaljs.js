

//LOADER
var timer;

function loadPage() {
    timer = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loadable").style.visibility = "visible";
}

//Change background

$(function () {
  $(document).scroll(function () {
    var $bg = $("#bg");
    $bg.toggleClass('scrolled', $(this).scrollTop() > 30);
  });
});
