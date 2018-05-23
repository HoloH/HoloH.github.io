/* $(function) {

    function scrollTo(target){
        if(target.lenght){
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
        }
    }

    scrollTo( $("#cvSection"));
} */


$(".button").click(function(){
    $('html, body').animate({
        scrollTop: $("#cvSection").offset().top
    }, 2000);
});
