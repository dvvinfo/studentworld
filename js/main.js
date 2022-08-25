$(document).ready(function () {
$('.index-slider__carusel').slick({
    dots: true,
    arrows: false
  });


  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
     
    ]
  });

  //счетчик



  var show = true;
  var countbox = ".counter__wrapper";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.counter__number').css('opacity', '1');
          $('.counter__number').spincrement({
              thousandSeparator: "",
              duration: 1500
          });

          show = false;
      }
  });


  // validate
  $('.market__form').validate(
    {
      lang: 'ru'  // or whatever language option you have.
    }
  );

  $('#index-form').validate(
    {
      lang: 'ru'  // or whatever language option you have.
    }
  );
  // $("form").each(function() {
  //   let $form = $(this);
  //   $form.validate(
  //     {
  //       lang: 'ru'  // or whatever language option you have.
  //     }
  //   );
  // });

});

const mobileBtn = document.querySelector('.mobile-btn')
const indexMenu = document.querySelector('.index-menu')
const indexMenuClose = document.querySelector('.index-menu__close')
const indexWrapper = document.querySelector('.index-wrapper')
const indexHeader = document.querySelector('.index-header')

// mobileBtn.addEventListener('click', (e)=> {
//   indexMenu.classList.add('open') 
// })

indexMenuClose.addEventListener('click', ()=> {
  indexMenu.classList.remove('open') 
})
// indexWrapper.addEventListener('click', ()=> {
  
//   indexMenu.classList.remove('open') 
// })




const toggleMenu = function () {
  indexMenu.classList.toggle("open");
}

mobileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == indexMenu || indexMenu.contains(target);
  const its_btnMenu = target == mobileBtn;
  const menu_is_active = indexMenu.classList.contains("open");

  if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
  }
});

