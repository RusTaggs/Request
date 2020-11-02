var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    
    speed: 400,
    spaceBetween: 50,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
    
});

$(document).ready(function(){
  //Главное меню
  $(".toggle-bar").click(function(){
    $('.main-menu').toggleClass('active');
    $('body').toggleClass('active');
  });

//Меню оборудования
  $(".header-equipment__mobile").click(function(){
    $('.equipment-menu').addClass('active');
    $('body').addClass('active');
  });

  $(".equipment__exit").click(function(){
    $('.equipment-menu').removeClass('active');
    $('body').removeClass('active');
  });

//Кнопка показывающая скрытый текст портфолио
  $(".show-more-button").click(function(){
    $('.portfolio-left__text3').slideToggle("slow");
    $('.show-more-button').toggle()
  });

  //Вызов формы заявок

  $('.header__menu__phone_button, .close-contact-form, .shadow1, .shadow2').click(function(){
    $('.contact-form, .shadow1, .shadow2').fadeToggle();
    $('.header__menu__phone').toggleClass('active');
    $(window).scroll(function(){
      $('.contact-form, .shadow1, .shadow2').fadeOut();
      
    });
  });

  

  //Вызов выборки категорий поиска
  $('.search-bar__list').click(function(){
    $('.category-list').fadeToggle();
    $(window).scroll(function(){
      $('.category-list').fadeOut();
      
    });
  });

  //Вызов окна при клике по оборудованию

  $('.equipment-container__item').click(function(){
    $('.equipment-list, .shadow1, .shadow2').fadeToggle();
    
  });
  $('.list-more-open').click(function(){
    $('.equipment-list-more').fadeIn();
  });
  


})
