$('document').ready(function(){
  $('.respuestas').css('display','none');
})
$('h3').click(function(){
  $(this).next().slideToggle(1000);
})
$('#selector').change(function(){
  $('body').css('background-color',$(this).val());
});
