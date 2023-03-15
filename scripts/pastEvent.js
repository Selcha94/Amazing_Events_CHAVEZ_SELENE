const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

const pastEvents = filtrarEventosPasados(data);

busqueda.addEventListener('input',()=>{
  superFiltro(pastEvents,busqueda.value);
});
categoriasData.addEventListener('change',()=>{
  superFiltro(pastEvents);
});
mostrarEventos(pastEvents);
mostrarCheck(listaDeCategorias(data.events));

function filtrarEventosPasados(lista){
  const eventosPasados = lista.events.filter((evento)=> evento.date < lista.currentDate)
  return eventosPasados;
}