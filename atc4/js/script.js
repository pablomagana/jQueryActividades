$(document).ready(function() {
  $("#open").click(function() {
    $("#login form").slideToggle(1000,function() {//desplegar ocultar formulario
      $("#open").toggleClass("close");//aplicar o quitar la clase close
    });
  })
});
