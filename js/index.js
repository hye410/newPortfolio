import $ from 'jquery';

$(function(){
  navPageMovement();
  asidePageMovement();
  range();
  detail();
  navMobile();
})

const navPageMovement = () => {
  $('nav li>a').on('click',function(e){
    const href = $(this).attr('href');
    const thisHeight = $(href).offset().top;
    $('html,body').animate({
      scrollTop : thisHeight
    },100,);
  });

}

const asidePageMovement = () => {
  $('aside li>a').on('click',function(e){
    const href = $(this).attr('href');
    const thisHeight = $(href).offset().top;
    $('html,body').animate({
      scrollTop : thisHeight
    },300);
  })
}

const range = () => {
  $(window).scroll(function(){
      let height = $(document).scrollTop();
    if(height > 772){
      $('.gauge').each(function(){
        let per = $(this).attr('per');
        $(this).animate({'width': per + "%"});
      })
    }
  })
}

const detail = () => {
  $('#project div').css('display','none');
  $('#project>ul.work>li.accordion').on('click',function(){
    if($(this).parent().next('div').css('display') == 'none'){
      $('#project div').slideUp();
      $(this).parent().next('div').slideDown();
    }else if($(this).parent().next('div').css('display') == 'block'){
      $(this).parent().next('div').slideUp();
    }
  })
}

const navMobile = () => {
  $('ul.menuMobile').css('top','-100vh');
  $('#header>p').on('click',function(){
    if( $('ul.menuMobile').css('top') === '-732px'){      
      $('ul.menuMobile').animate({'top':'80px'});   
    }else{
      $('ul.menuMobile').animate({'top':'-100vh'});
    }
  });
  $('ul.menuMobile li>a').on('click',function(){
    $('ul.menuMobile').animate({'top':'-100vh'});
  })
}
