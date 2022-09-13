$(document).ready(function(){

//EFEITO DE FUMAÇA NO BANNER PRINCIPAL
//$("header, .info").ripples({
    //dropRadius: 25,
    //perturbance: 0.2,
    //}); -->

//BOTÃO TOGGLER
$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})    

//MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM
$('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery:{
        enabled: true
    }
});


//CARROSEL DE IMAGENS DO CARDÁPIO
$('.carrosel').slick({
    centerMode: true,
    mobileFirst: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    

//CARROSEL DE IMAGENS DA CHURRASCARIA
$('.fotos-churrascaria').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 700,
  infinite: true,
  speed: 500,
  arrows: false,
  fade: true,
  cssEase: 'linear'
});




})
