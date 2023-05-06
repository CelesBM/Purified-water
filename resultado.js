function crearRecibo() {
  //esta funciona va en el boton de crear la cotizacion
  var primerArticulo = document.getElementById("primerArticulo");
  var valorPrimerArticulo = primerArticulo.value;

  var segundoArticulo = document.getElementById("segundoArticulo");
  var valorSegundoArticulo = segundoArticulo.value;

  var tercerArticulo = document.getElementById("tercerArticulo");
  var valorTercerArticulo = tercerArticulo.value;

  var totalPrimerArticulo = 0;
  var totalSegundoArticulo = 0;
  var totalTercerArticulo = 0;
  var subTotal;
  var impuesto;
  var total;

  if (valorPrimerArticulo > 0) {
    const tbody = document.getElementsByTagName("tbody")[0];
    const fila = tbody.insertRow();
    const celda1 = fila.insertCell();
    const celda2 = fila.insertCell();
    const celda3 = fila.insertCell();
    const celda4 = fila.insertCell();
    celda1.innerHTML = "Bidón de 5lt";
    celda2.innerHTML = valorPrimerArticulo;
    celda3.innerHTML = "$250.00";
    celda4.innerHTML = "$" + valorPrimerArticulo * 250 + ".00";
    totalPrimerArticulo = totalPrimerArticulo + valorPrimerArticulo * 250;
  }
  if (valorSegundoArticulo > 0) {
    const tbody = document.getElementsByTagName("tbody")[0];
    const fila = tbody.insertRow();
    const celda1 = fila.insertCell();
    const celda2 = fila.insertCell();
    const celda3 = fila.insertCell();
    const celda4 = fila.insertCell();
    celda1.innerHTML = "Bidón de 10lt";
    celda2.innerHTML = valorSegundoArticulo;
    celda3.innerHTML = "$350.00";
    celda4.innerHTML = "$" + valorSegundoArticulo * 350 + ".00";
    totalSegundoArticulo = totalSegundoArticulo + valorSegundoArticulo * 350;
  }
  if (valorTercerArticulo > 0) {
    const tbody = document.getElementsByTagName("tbody")[0];
    const fila = tbody.insertRow();
    const celda1 = fila.insertCell();
    const celda2 = fila.insertCell();
    const celda3 = fila.insertCell();
    const celda4 = fila.insertCell();
    celda1.innerHTML = "Bidón de 20 lt";
    celda2.innerHTML = valorTercerArticulo;
    celda3.innerHTML = "$600";
    celda4.innerHTML = "$" + valorTercerArticulo * 600 + ".00";
    totalTercerArticulo = totalTercerArticulo + valorTercerArticulo * 600;
  }
  //subtotal
  var tbody = document.getElementsByTagName("tbody")[0];
  var fila = tbody.insertRow();
  var celda1 = fila.insertCell();
  var celda2 = fila.insertCell();
  var celda3 = fila.insertCell();
  var celda4 = fila.insertCell();
  celda1.innerHTML = "";
  celda2.innerHTML = "";
  celda3.innerHTML = "SubTotal";
  subTotal = totalPrimerArticulo + totalSegundoArticulo + totalTercerArticulo;
  celda4.innerHTML = "$" + subTotal + ".00";
  // impuesto%20
  tbody = document.getElementsByTagName("tbody")[0];
  fila = tbody.insertRow();
  celda1 = fila.insertCell();
  celda2 = fila.insertCell();
  celda3 = fila.insertCell();
  celda4 = fila.insertCell();
  celda1.innerHTML = "";
  celda2.innerHTML = "";
  celda3.innerHTML = "Impuesto %20";
  impuesto = subTotal * 0.2;
  celda4.innerHTML = "$" + impuesto + ".00";
  //total
  tbody = document.getElementsByTagName("tbody")[0];
  fila = tbody.insertRow();
  celda1 = fila.insertCell();
  celda2 = fila.insertCell();
  celda3 = fila.insertCell();
  celda4 = fila.insertCell();
  celda1.innerHTML = "";
  celda2.innerHTML = "";
  celda3.innerHTML = "Total";
  total = subTotal + impuesto;
  celda4.innerHTML = "$" + total + ".00";
  let formulario = document.getElementById("price-form");
  let resumen = document.getElementById("resumen");
  formulario.classList.add("oculto");
  formulario.classList.remove("visible");
  resumen.classList.add("visible");
  resumen.classList.remove("oculto");
}
