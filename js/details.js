$('#about').on('click', function(){
  $('.aboutopen').slideToggle(800);
});

$('#skills').on('click', function(){
  $('.skillsopen').slideToggle(800);
});

$('#projects').on('click', function(){
  $('.projectsopen').slideToggle(800);
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
