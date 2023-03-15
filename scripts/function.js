function superFiltro(lista) {
  let primerFiltro = filtrarPorNombre(lista, busqueda.value);
  let segundoFiltro = filtrarPorCategoria(primerFiltro);
  mostrarEventos(segundoFiltro);
}
function mostrarEventos(lista) {
  if (lista.length == 0) {
    eventDiv.innerHTML = "<h5> There are no results for this search </h5>";
    return;
  }
  let cardHtml = "";
  lista.forEach((element) => {
    cardHtml += `
    <div class="col">
        <div class="card-deck">
        <div class="card shadow p-1 mb-5 bg-white rounded d-flex justify-content-center">
        <img src="${element.image}" class="card-img-top rounded-top" alt="${element.name}">
        <div class="card-body">
        <h5 class="card-title rounded">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <p class="card-text-date">${element.date}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">$${element.price}</small>
        <a href="../pages/details.html?id=${element._id}" class="btn-event">Ver Evento</a>
      </div>
    </div>
    </div>
  </div>`;
  });
  eventDiv.innerHTML = cardHtml;
}
function mostrarCheck(lista) {
  let check = "";
  lista.forEach((element) => {
    check += ` <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
        <label class="form-check-label" for="${element}">${element}</label>
      </div>`;
  });
  categoriasData.innerHTML = check;
}
function listaDeCategorias(lista) {
  let categorias = [];
  lista.forEach((element) => {
    categorias.push(element.category.toLowerCase());
  });
  categorias = Array.from(new Set(categorias));
  categorias.sort();
  return categorias;
}
function filtrarPorNombre(lista, nombre) {
  let listaFiltrada = lista.filter((element) =>
    element.name.toLowerCase().includes(nombre.toLowerCase())
  );
  return listaFiltrada;
}
function filtrarPorCategoria(lista) {
  let checkBox = document.querySelectorAll("input[type='checkbox']");
  let checkBoxLista = Array.from(checkBox);
  let checkSelecionados = checkBoxLista.filter((check) => check.checked);
  if (checkSelecionados.length == 0) {
    return lista;
  }

  let categorias = checkSelecionados.map((check) => check.value.toLowerCase());
  console.log(categorias);

  let listafiltrada = lista.filter((element) =>
    categorias.includes(element.category.toLowerCase())
  );

  return listafiltrada;
}
