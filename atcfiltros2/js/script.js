$(document).ready(function(){
//1. Selecciona todos los párrafos que tengan el atributo class y le cambias el color de fondo a amarillo.
//$('p[class]').css('background-color','yellow');
//2. Selecciona todos los párrafos que tengan el atributo id con el valor “parrafo1” y le cambios el color de fondo a verde oscuro.
//$('p[id="p1"]').css('background-color','red');
//3. Selecciona todos los párrafos cuyo id empiece como “par” y cambia la letra a verdana y negrita.
//$('p[id^="par"]').css({'font-family':'verdana','font-weight':'bold'});
//4. Selecciona todos los párrafos cuya clase No sea “clase1” o los párrafos que no contengan el atributo class.
//$("p[class!='clase1'] , p:not([class])").css("background-color","red");
//5. Selecciona los párrafos que contienen en el id el valor “afo” y lo pondremos con una opacidad del 25% y el ancho de borde será de 200px (usar función animate).
//$("p[id*='afo']").animate({opacity: 0.25},2000,function(){});
//6. Selecciona todos los párrafos cuya clase empiece por “par” y tenga el atributo align con el contenido center y lo conviertes a mayúsculas.
//$("p[class^='par'][align='center']").val().toUpperCase();
alert(
  $("p[class^='par'][align='center']").value
);
alert('bla');
//7. Oculta los párrafos cuyo id acaben con 1. Luego los vuelves a mostrar.

//8. Selecciona todos los elementos que son del tipo cabecera (h1,h2 y h3).

//9. Selecciona el elemento con id pdf1, los encabezados h2 y los párrafos con el atributo align a center y que cuando cliques que aparezca el mensaje “Has clicado”.

})
