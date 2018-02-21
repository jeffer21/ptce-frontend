/**
 * Created by AlanJoseph on 2/20/2018.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
            $('#menu2').css({top: '0'});
            $('.pointerTop').show();
            $('.pointerTop').css({bottom: "35px"});
        } else {
            $('#menu2').css({top: ''});
            $('.pointerTop').css({bottom: "-100px"});
        }
    });
    $('.pointerTop').click(function () {
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
});