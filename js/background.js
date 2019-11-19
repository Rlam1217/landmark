$(document).ready(function($) {
    
    $('.menu-main ul li').hover(function(){
        $('#background').removeClass().addClass(
            $(this).attr('rel'));
        $(this).addClass('active').siblings()
            .removeClass('active');    
    });





});


