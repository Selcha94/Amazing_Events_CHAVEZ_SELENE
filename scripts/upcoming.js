const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

const futureEvent = filtrarEventosFuturos(data);

busqueda.addEventListener('input',()=>{
  superFiltro(futureEvent,busqueda.value);
});
categoriasData.addEventListener('change',()=>{
  superFiltro(futureEvent);
});
mostrarEventos(futureEvent);
mostrarCheck(listaDeCategorias(data.events));

function filtrarEventosFuturos(lista){
  let eventosFuturos = lista.events.filter((evento) => evento.date >= lista.currentDate)
  return eventosFuturos;
}