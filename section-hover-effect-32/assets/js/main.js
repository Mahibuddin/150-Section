$(document).ready(function() {

    // Slider
    $(".homepage-slides").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        dots: true,
        nav: false
    });

    // Isotop
    $(".project-title li").on('click',function(){

        $('.project-title li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $(".project-list").isotope({
            filter : selector
        })
    });

    $(".project-list").isotope({

    });

   //Check to see if the window is top if not then display button
   $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


});



