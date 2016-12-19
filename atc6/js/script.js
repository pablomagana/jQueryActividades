$(document).ready(function() {
  $("#add-container button").click(function functionName() {
    $("#places-container").append("<div class='item'><div class='remove'>X</div>"+$("#add-container input").val()+"</div>");
    $("#places-container").children().last().click(function () {
      eliminar($(this).children().last());
    });
    $("#add-container input").val("");
  }
  );
  function eliminar(elemento) {
    elemento.parent().remove();
  }
  $(".remove").click(function () {
    eliminar($(this));
  });
});
