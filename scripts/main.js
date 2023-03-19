let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
const eventDiv = document.getElementById('contenedor');
const categoriasData = document.getElementById('categoria');
const busqueda = document.getElementById('search');

traerDatos()
async function traerDatos(){
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    mostrarEventos(data.events);
    mostrarCheck(listaDeCategorias(data.events))
    busqueda.addEventListener('input',()=>{
      superFiltro(data.events,busqueda.value);
    });
    categoriasData.addEventListener('change',()=>{
      superFiltro(data.events);
    });
  }
  catch (error) {
    console.log(error);
  }
}



// busqueda.addEventListener('input',()=>{
//   superFiltro(data.events,busqueda.value);
// });
// categoriasData.addEventListener('change',()=>{
//   superFiltro(data.events);
// });
// mostrarEventos(data.events);
// mostrarCheck(listaDeCategorias(data.events))
