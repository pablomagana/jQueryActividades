//btnTitulo, btnLista, btnDelete
// h1, aplicar estilo añadiendo la clase titulo
$('#btnTitulo').click(function(){
  $('h1').addClass("titulo",3000,"easeOutBounce");
});

//ul aplicar estilo añadiendo clase horizontal y sublista a los hijos de los elementos de la lista
$('#btnLista').click(function(){
  $('#obras > li').addClass("horizontal");
  $('#obras *').not(".horizontal").addClass('sublista');
});

//eliminar todos los estilos
$('#btnDelete').click(function(){
  $('h1').removeClass("titulo");
  $('#obras > li').removeClass("horizontal");
  $('#obras *').removeClass('sublista');
});
