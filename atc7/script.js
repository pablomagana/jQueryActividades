$(document).ready(function() {
  $("#formulario").validate({
    rules:{
      numcode:{
        required:true,
        digits:true,
        number:true
      },
      numbers:{
        required:true,
        number:true
      },
      date:{
        required:true,
        date:true
      },
      url:{
        url:true
      },
      email:{
        required:true,
        email:true
      },
      credit:{
        creditcard:true
      }
    },
    messages:{
      numcode:{
        required:"campo requerido",
        digits:"solo se aceptan numeros positivos",
        number:"introduce un numero valido"
      },
      numbers:{
        required:"campo requerido",
        digits:"solo se aceptan numeros positivos",
        number:"introduce un numero valido"
      },
      date:{
        required:"campo requerido",
        date:"formato de fecha no valido (mm/dd/aaa)"
      },
      url:{
        required:"campo requerido",
        url:"formato de la url no valido(http(s)://.....)"
      },
      email:{
        required:"campo requerido",
        email:"formato de email no valido (username@servermail.com)"
      },
      credit:{
        creditcard:"numero de targeta no valido"
      }
    }
  });
});
