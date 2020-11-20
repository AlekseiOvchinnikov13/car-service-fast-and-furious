window.onload = function () {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    document.querySelector('.burger-menu').addEventListener('click', e => {
        e.preventDefault();
        switchOpenedMenu();
    })
};

$(function () {
    $('#reviews').on('click', function() {
        $('html,body').animate({scrollTop:$('.reviews').offset().top+"px"},{duration:500});
        switchOpenedMenu();
    });
    $('#contacts').on('click', function() {
        $('html,body').animate({scrollTop:$('.map').offset().top+"px"},{duration:500});
        switchOpenedMenu();
    });
    $('#reg').on('click', function() {
        $('html,body').animate({scrollTop:$('.consultation').offset().top+"px"},{duration:500});
        switchOpenedMenu();
    });
});

function switchOpenedMenu(){
    document.querySelector('.header__wrapper').classList.toggle('opened');
}