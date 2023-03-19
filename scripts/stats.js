let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let eventsPast = [];
let eventsUpcoming = [];
let revenuesCat = [];
let tabla1 = document.getElementById("tabla1");
let tabla2 = document.getElementById("tabla2");
let tabla3 = document.getElementById("tabla3");
let tablaPast = [];
let tablaUpcoming = [];

traerDatos();

async function traerDatos() {
  try {
    const response = await fetch(urlApi);
    const datos = await response.json();
    pastEvents(datos.events, datos);
    //console.log(eventsPast);
    porcentajeAsistencia(eventsPast);
    tablaPast.forEach(cat => { ganancias(eventsPast, cat, "past")});
    tablaUpcoming.forEach(cat => { ganancias(eventsUpcoming, cat, "upcoming")});
    console.log(tablaUpcoming);
    //categoriesFilt(datos.events);
  } catch (error) {
    console.error("ERROR" + error);
  }
}

function currentDate(objeto) {
  let currentDateString = objeto.currentDate;
  let currentDate = new Date(currentDateString);
  return currentDate;
}

function pastEvents(objeto, miJson) {
  for (evento of objeto) {
    let eventDateString = evento.date;
    let eventDate = new Date(eventDateString);
    if (eventDate < currentDate(miJson)) {
      eventsPast.push(evento);
    } else {
      eventsUpcoming.push(evento);
    }
  }
  categoriesFilt(eventsPast, "past");
  categoriesFilt(eventsUpcoming, "upcoming");
}
function categoriesFilt(objeto, tiempo) {
  let categories = [];
  objeto.map(event => {
    if (!categories.includes(event.category)) {
      categories.push(event.category);
    }
  });
  console.log(objeto);
  if (tiempo == "past") {
    tablaPast = categories;
    // console.log('eventPast')
    // console.log(tablaPast)
  } else {
    tablaUpcoming = categories;
    console.log("eventos futuros");
    console.log(tablaUpcoming);
  }
  //console.log(tablaPast)
}
function ganancias(unArray, categoria, tiempo) {
  let revenues = 0;
  let sumaAss = 0;
  let contCat = 0;
  for (evento of unArray) {
    if (evento.category == categoria) {
      contCat++;
      revenues +=(evento.assistance ? evento.assistance : evento.estimated) * evento.price;
      sumaAss += parseFloat(((evento.assistance ? evento.assistance : evento.estimated) * 100 / evento.capacity).toFixed(2));
    }
    // if (evento.assistance && !tablaPast.includes(categoria)) {
    //     tablaPast.push(categoria);
    // } else if (!tablaUpcoming.includes(categoria)) {
    //     tablaUpcoming.push(categoria);
    // }
  }
  sumaAss = parseFloat(sumaAss / contCat).toFixed(2);
  if (tiempo == "past") {
    tableTwoandThree(tabla3, categoria, revenues, sumaAss);
  } else {
    tableTwoandThree(tabla2, categoria, revenues, sumaAss);
  }
  //console.log(categoria + ' ' + sumaAss + '% -- Revenues: $' + revenues)
}
function tableTwoandThree(tabla, col1, col2, col3) {
  let fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${col1}</td>
    <td>$ ${col2}.- </td>
    <td>${col3} %</td>
    `;
  tabla.appendChild(fila);
}

function tableOne(objeto) {
  tabla1.innerHTML = `
    <tr>
    <td> ${objeto.eventMayPorAsist} </td>
    <td> ${objeto.eventMenPorAsist}</td>
    <td> ${objeto.eventMayCapacity} </td>
    </tr>
    `;
}
function porcentajeAsistencia(unArray) {
  let contTabla1 = {};
  let eventMayPorAsist = "";
  let eventMenPorAsist = "";
  let eventMayCapacity = "";
  let porcentajeMay = 0;
  let porcentajeMen = 100;
  let capacity = 0;
  for (evento of unArray) {
    let auxPorcentaje = ((evento.assistance * 100) / evento.capacity).toFixed(2);
    if (auxPorcentaje > porcentajeMay) {
      porcentajeMay = auxPorcentaje;
      eventMayPorAsist = evento.name;
    } else if (auxPorcentaje < porcentajeMen) {
      porcentajeMen = auxPorcentaje;
      eventMenPorAsist = evento.name;
    }
    let auxCapacity = evento.capacity;
    if (auxCapacity > capacity) {
      capacity = auxCapacity;
      eventMayCapacity = evento.name;
    }
  }
  contTabla1.eventMayPorAsist = `${eventMayPorAsist} : ${porcentajeMay}%`;
  contTabla1.eventMenPorAsist = `${eventMenPorAsist} : ${porcentajeMen}%`;
  contTabla1.eventMayCapacity = `${eventMayCapacity} : ${capacity}`;
  tableOne(contTabla1);
}
