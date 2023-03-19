let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

const pastEvents = filtrarEventosPasados(data);


traerDatos()
async function traerDatos(){
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    mostrarEventos(pastEvents);
    mostrarCheck(listaDeCategorias(data.events))
    busqueda.addEventListener('input',()=>{
      superFiltro(pastEvents,busqueda.value);
    });
    categoriasData.addEventListener('change',()=>{
      superFiltro(pastEvents);
    });
  }
  catch (error) {
    console.log(error);
  }
}
function filtrarEventosPasados(lista){
  const eventosPasados = lista.events.filter((evento)=> evento.date < lista.currentDate)
  return eventosPasados;
}



// busqueda.addEventListener('input',()=>{
//   superFiltro(pastEvents,busqueda.value);
// });
// categoriasData.addEventListener('change',()=>{
//   superFiltro(pastEvents);
// });
// mostrarEventos(pastEvents);
// mostrarCheck(listaDeCategorias(data.events));

// function filtrarEventosPasados(lista){
//   const eventosPasados = lista.events.filter((evento)=> evento.date < lista.currentDate)
//   return eventosPasados;
// }