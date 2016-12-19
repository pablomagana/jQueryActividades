$(document).ready(function() {
  $(".button").mouseover(function functionName() {
    $(this).prevAll().addClass("anterior").removeClass("rojo");
    $(this).addClass("rojo").removeClass("anterior");
    $(this).nextAll().removeClass("anterior rojo");
  });
});
