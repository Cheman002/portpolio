$(document).ready(function(){
    $(".offcanvas").addClass("offcanvas-end");
    $(".offcanvas").addClass("text-bg-dark");
    $(".navbar").addClass("navbar-expand-lg navbar-dark bg-dark");
    $(".ul").addClass("justify-content-end flex-grow-0.5 pe-3");
    $(".btn-close").addClass("btn-close-white");
    $(".ul li").addClass("nav-item ");
    $(".ul li a").addClass("nav-link");
    $(".btn-close").attr("data-bs-dismiss" , "offcanvas");
    $(".navbar-toggler").attr("data-bs-toggle","offcanvas");
    $(".navbar-toggler").attr("data-bs-target","#ocn");
    $(".offcanvas").attr("tabindex","-1")
    });

    $(document).ready(function($) {
        var navsize = function() {
          var sz = document.body.clientWidth;
          if (sz < 980) {
            $('.ul').removeClass('siz');
            
          } else if (sz >= 992.1) {
            $('.ul').addClass('siz');
           
          };
        };
        $(window).resize(function(){
          navsize();
        });
        navsize();
      });