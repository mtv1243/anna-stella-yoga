//Mobile nav click event
$('.fa-bars').click(()=>{
  $('nav').slideToggle();
})

//scroll on menu click
$("#menuItemThrive").click(()=>{
  $(".parallax").animate(
    {
      scrollTop: $('#thrive').offset().top
    },
    "slow"
  );
});

$("#menuItemTestimonials").click(()=>{
  $(".parallax").animate(
    {
      scrollTop: $('#testimonials').offset().top
    },
    "slow"
  );
});

$("#menuItemContact").click(()=>{
  $(".parallax").animate(
    {
      scrollTop: $('#contact').offset().top
    },
    "slow"
  );
});

$("#menuItemApproach").click(()=>{
  $(".parallax").animate(
    {
      scrollTop: $('#approach').offset().top
    },
    "slow"
  );
});

// Blur the BIG PIC on scroll
$('.parallax').scroll(function(){
  // console.log('scroll');
  let scroll = $('.parallax').scrollTop();
  //blur image on scroll
  $('.header-image').css({
    filter: 'blur(' + (scroll/60) + 'px)'
  });
  //fade nav on scroll
  $('.marquee').css({
    filter: 'opacity(' + (100 - (scroll-170)) + '%)'
  })
});

// $('.sticky').scroll(function(){
//   $('.maquee-wrapper').addClass('sticky');
// });
