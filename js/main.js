$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .top_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.header_list').click(function(event) {
    $('.header_burger,.header_menu').removeClass('active');
    $('body').removeClass('lock');
});