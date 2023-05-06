const contactoPersonal = document.getElementById("contactopersonal");

const obtenerDatos = async () => {
  const datos = await fetch("https://randomuser.me/api/");
  const datosJSON = await datos.json();
  console.log(datosJSON.results);

  datosJSON.results.forEach((personaje) => {
    //console.log(personaje);
    //console.log(personaje.name.first);

    const column = document.createElement("div");

    column.classList.add("col-6");
    contactoPersonal.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${personaje.picture.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${personaje.name.first} ${personaje.name.last}</h5>
        <p class="card-text">Email: ${personaje.email}</p>
        <p class="card-text">Teléfono: ${personaje.cell}</p>
        <a href="#" class="btn btn-primary">Contactar</a>
        </div>
        </div>
        `;

    document.getElementById("custom_row").appendChild(column);
  });
};

obtenerDatos();
