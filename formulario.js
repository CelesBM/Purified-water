$(document).ready(function () {
  $("#submit").on("click", function () {
    //submit es el id del boton
    var name = $("#name").val(); // id usuario - .val : devuelve el valor propio del input
    var apellido = $("#apellido").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    if (name === "") {
      $("#name-error").text("Completar este campo"); // usuario error es el id de span la etiqueda creada
      $("#name-error").css("color", "red");
      $("#name").addClass("is-invalid"); // para marcar en rojo el input - metodo addClass y la clase is-invalid es una clase de boostrap para marcar el input en rojo
    } else {
      $("#name-error").text("");
      $("#name").removeClass("is-invalid");
    }

    if (apellido === "") {
      $("#apellido-error").text("Completar este campo");
      $("#apellido-error").css("color", "red");
      $("#apellido").addClass("is-invalid");
    } else {
      $("#apellido-error").text("");
      $("#apellido").removeClass("is-invalid");
    }

    if (phone === "") {
      $("#phone-error").text("Completar este campo"); // usuario error es el id de span la etiqueda creada
      $("#phone-error").css("color", "red");
      $("#phone").addClass("is-invalid"); // para marcar en rojo el input - metodo addClass y la clase is-invalid es una clase de boostrap para marcar el input en rojo
    } else {
      $("#phone-error").text("");
      $("#phone").removeClass("is-invalid");
    }

    if (email === "") {
      $("#email-error").text("Completar este campo");
      $("#email-error").css("color", "red");
      $("#email").addClass("is-invalid");
    } else {
      $("#email-error").text("");
      $("#email").removeClass("is-invalid");
    }
  });
});
