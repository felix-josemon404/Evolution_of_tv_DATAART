import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderEvents(events: EventData[]): void {
  const timeline = document.getElementById("timeline") as HTMLElement;

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
