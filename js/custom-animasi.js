function ganti(angka){
    var lokasi = 'img/terlaris/' + angka + '.jpg';
    document.getElementById('preview').src = lokasi;
    return false;
  }


$(document).ready(function(){


  function slide(num){
    
      $('.container-asli').animate({marginLeft: num});
  }

  

  $('#next-promo').click(function(){
    if( $('.container-asli').css('marginLeft') == '-1170px')
      $('#next-promo').stop();
    else
    slide('-=390px');
  });


  $('#prev-promo').click(function(){
    if( $('.container-asli').css('marginLeft') == '0px')
      $('#prev-promo').stop();

    else
    slide('+=390px');
  });




  $('.hideN').hide();

  $('#satu').mouseenter(function(){
    $('#tokosatu').delay("fast").slideDown()
  });

  $('#satu').mouseleave(function(){
    $('#tokosatu').slideUp()
  });

    $('#dua').mouseenter(function(){
    $('#toko2').delay("fast").slideDown()
    });

    $('#dua').mouseleave(function(){
      $('#toko2').slideUp()
    });

  $('#tiga').mouseenter(function(){
    $('#toko3').delay("fast").slideDown()
  });

  $('#tiga').mouseleave(function(){
    $('#toko3').slideUp()
  });

    $('#empat').mouseenter(function(){
    $('#toko4').delay("fast").slideDown()
    });

    $('#empat').mouseleave(function(){
      $('#toko4').slideUp()
    });

  $('#lima').mouseenter(function(){
    $('#toko5').delay("fast").slideDown()
  });

  $('#lima').mouseleave(function(){
    $('#toko5').slideUp()
  });

    $('#enam').mouseenter(function(){
    $('#toko6').delay("fast").slideDown()
    });

    $('#enam').mouseleave(function(){
      $('#toko6').slideUp()
    });

  $('#tuju').mouseenter(function(){
    $('#toko7').delay("fast").slideDown()
  });

  $('#tuju').mouseleave(function(){
    $('#toko7').slideUp()
  });

    $('#delapan').mouseenter(function(){
    $('#toko8').delay("fast").slideDown()
    });

    $('#delapan').mouseleave(function(){
      $('#toko8').slideUp()
    });

  $('#sembilan').mouseenter(function(){
    $('#toko9').delay("fast").slideDown()
  });

  $('#sembilan').mouseleave(function(){
    $('#toko9').slideUp()
  });

    $('#sepuluh').mouseenter(function(){
    $('#toko10').delay("fast").slideDown()
    });

    $('#sepuluh').mouseleave(function(){
      $('#toko10').slideUp()
    });

  $('#sebelas').mouseenter(function(){
    $('#toko11').delay("fast").slideDown()
  });

  $('#sebelas').mouseleave(function(){
    $('#toko11').slideUp()
  });

    $('#duabelas').mouseenter(function(){
    $('#toko12').delay("fast").slideDown()
    });

    $('#duabelas').mouseleave(function(){
      $('#toko12').slideUp()
    });


});