"use strict"

$(document).ready(function(){
    $(window).on('scroll', function () {
        //Definimos una posicion #pr en el momento que llega a esa posicion cambia el formato del menu.
        let position = $('#pr').offset();
        if ($(window).scrollTop() >= position.top) {
            $('a').addClass('activo');
        }else{
            $('a').removeClass('activo');
        }
    })
      // Accionamiento del menú lateral
      $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
     // Smooth scroll
     $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})