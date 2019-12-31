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
  console.log('scroll');
  let scroll = $('.parallax').scrollTop();
  $('.header-image').css({
    filter: 'blur(' + (scroll/60) + 'px)'
  });
});

// $('.sticky').scroll(function(){
//   $('.maquee-wrapper').addClass('sticky');
// });
