const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

busqueda.addEventListener('input',()=>{
  superFiltro(data.events,busqueda.value);
});
categoriasData.addEventListener('change',()=>{
  superFiltro(data.events);
});
mostrarEventos(data.events);
mostrarCheck(listaDeCategorias(data.events))
