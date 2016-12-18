$(document).ready(function() {
  $("#dashboard").hover(
    function() {

      $(this).animate({left:0},1000,function(){$(this).css("background-color","white")});
      //animacion de 1 segundo que cambia la propiedad css de left y que al finalizar cambia el color de fondo
    },
    function() {
      $(this).animate({left:-92},1000,function(){$(this).css("background-color","#FF8000")});
    }
  );//final de hover
});//final de ready
