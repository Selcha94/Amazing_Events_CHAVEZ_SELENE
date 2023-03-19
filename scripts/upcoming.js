let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

const futureEvent = filtrarEventosFuturos(data);

traerDatos()
async function traerDatos(){
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    mostrarEventos(futureEvent);
    mostrarCheck(listaDeCategorias(data.events))
    busqueda.addEventListener('input',()=>{
      superFiltro(futureEvent,busqueda.value);
    });
    categoriasData.addEventListener('change',()=>{
      superFiltro(futureEvent);
    });
  }
  catch (error) {
    console.log(error);
  }
}
function filtrarEventosFuturos(lista){
  let eventosFuturos = lista.events.filter((evento) => evento.date >= lista.currentDate)
  return eventosFuturos;
}



// busqueda.addEventListener('input',()=>{
//   superFiltro(futureEvent,busqueda.value);
// });
// categoriasData.addEventListener('change',()=>{
//   superFiltro(futureEvent);
// });
// mostrarEventos(futureEvent);
// mostrarCheck(listaDeCategorias(data.events));

// function filtrarEventosFuturos(lista){
//   let eventosFuturos = lista.events.filter((evento) => evento.date >= lista.currentDate)
//   return eventosFuturos;
// }