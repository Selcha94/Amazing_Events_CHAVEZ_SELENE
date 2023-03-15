const query = location.search;
let parametro = new URLSearchParams(query);
let id = parametro.get("id");

let evento = data.events.find(element => element._id == id);
console.log(evento);

let contenedor = document.getElementById("contenedor");

let card = "";

card = `<div id="cardDetail" class="card mb-3">
<div class="row">
    <div class="col-md-8">
        <img id="cardimg"  class="img-fluid rounded-start" src="${evento.image}">
    </div>
    <div class="col-md-4 d-flex flex-column justify-content-evenly align-items-start">
        <div class="card-body">
            <h2 class="card-title">"${evento.name}"</h2>
            <p class="card-text">"${evento.description}"</p>
        </div>
        <div class="card-body">            
            <p>Category: "${evento.category}"</p>   
            <p>Place: "${evento.place}"</p>                                         
            <p>Capacity: "${evento.capacity}"</p>`;
if (evento.assistance != undefined) {
  card = card + `<p>Assistance: "${evento.assistance}"</p> `;
} else {
  card = card + `<p>Estimate: "${evento.estimate}"</p> `;
}
card =
  card +
  ` 
            <p>Date: ${evento.date}</p>
            <h4>$ ${evento.price}</h4>             
        </div>                       
    </div>
</div>
</div>`;
contenedor.innerHTML = card;
