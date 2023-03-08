const eventDiv = document.getElementById("events");
const events = data.events;

function cardEvents(){
for (let i = 0; i < events.length; i++) {
  const event = events[i];
  const eventsDiv = document.createElement("div");
  eventsDiv.innerHTML = `
    <div class="col">
    <div class="card-deck">
    <div class="card shadow p-1 mb-5 bg-white rounded d-flex justify-content-center">
      <img src="${event.image}" class="card-img-top rounded-top" alt="${event.name}">
      <div class="card-body">
        <h5 class="card-title rounded">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text-date">${event.date}</p>
      </div>
      <div class="card-btn">
      <a href="/pages/details.html" class="btn-event">Ver Evento</a>
        </div>
      <div class="card-footer">
        <small class="text-muted">$${event.price}</small>
      </div>
    </div>
    </div>
  </div>
    `;
  eventDiv.appendChild(eventsDiv);
}
}
cardEvents(events);