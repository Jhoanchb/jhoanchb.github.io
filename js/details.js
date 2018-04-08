$('#about').on('click', function(){
  $('.aboutopen').slideToggle(800);
});

$('#skills').on('click', function(){
  $('.skillsopen').slideToggle(800);
});

$('#themes').on('click', function(){
  $('.themes').slideToggle(800);
});

$('#white, #black').on('click', function(){
  $('body').toggleClass('whitetheme', 500);
});

$('#red').on('click', function(){
  $('.card').toggleClass('redcard', 500);
});

$('#blue').on('click', function(){
  $('.card').toggleClass('bluecard', 500);
});



/*$('.about-toggle').click(function() {
  $('body').toggleClass('aboutcolor');
  $('.aboutopen').toggleClass('aboutclose', 500);
  $('.aboutcard').toggleClass('bgblanco', 500);
  $('.aboutline, .aboutline::after').toggleClass('bgnegro', 500); 
  $(this).toggleClass('open');  
});

$('.skills-toggle').click(function() {
  $('body').toggleClass('skillscolor');
  $('.skillsopen').toggleClass('skillsclose', 500);
  $('.skillscard').toggleClass('bgblanco', 500);
  $('.skillsline, .skillsline::after').toggleClass('bgnegro', 500); 
  $(this).toggleClass('open');  
});

$('.contact-toggle').click(function() {
  $('body').toggleClass('contactcolor');
  $('.contactopen').toggleClass('contactclose', 500);
  $('.contactcard').toggleClass('bgblanco', 500);
  $('.contactline, .contactline::after').toggleClass('bgnegro', 500); 
  $(this).toggleClass('open');  
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 60) {
    $('header').addClass('navshow');} 
  else {
    $('header').removeClass('navshow');}
  }) */