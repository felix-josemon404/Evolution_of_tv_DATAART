import { openModal } from "./modal.js";
export function renderEvents(events) {
    const timeline = document.getElementById("timeline");
    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("timeline-event");
        eventDiv.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.year}</p>
      <img src="${event.imageURL}" alt="${event.title}">
    `;
        eventDiv.addEventListener("click", () => openModal(event));
        timeline.appendChild(eventDiv);
    });
}
