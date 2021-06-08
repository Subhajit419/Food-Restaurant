    $(window).scroll(function() {
        var position = $(this).scrollTop() + $(window).height()/2;
        $('section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target) {
                $('nav > ul > li > a').removeClass('active');
                $('nav > ul > li > a[href=#' + id + ']').addClass('active');
            }
        });
      });
    $(document).ready(function(){
        $('.dot1').click(function(){
          $('.vid1').css('display','block');
          $('.vid2').css('display','none');
          $('.vid3').css('display','none');
        });
        $('.dot2').click(function(){
          $('.vid2').css('display','block');
          $('.vid1').css('display','none');
          $('.vid3').css('display','none');
        });
        $('.dot3').click(function(){
          $('.vid3').css('display','block');
          $('.vid1').css('display','none');
          $('.vid2').css('display','none');
        });
      });
    