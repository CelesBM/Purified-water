const contactoPersonal = document.getElementById("contact-person");

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
        <div class="card" style="width: 14rem;">
        <img src="${personaje.picture.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title" style="font-size: 16px;">${personaje.name.first} ${personaje.name.last}</h5>
        <p class="card-text" style="font-size: 12px;">Email: ${personaje.email}</p>
        <p class="card-text" style="font-size: 12px;">Teléfono: ${personaje.cell}</p>
        <a href="#" class="btn btn-primary" style="border-radius: 1rem;">Contactar</a>
        </div>
        </div>
        `;

    document.getElementById("custom_row").appendChild(column);
  });
};

obtenerDatos();
