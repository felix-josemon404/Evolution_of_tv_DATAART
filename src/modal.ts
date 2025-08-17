import { EventData } from "./types.js";

const modal = document.getElementById("modal") as HTMLElement;
const closeModalBtn = document.querySelector(".close") as HTMLElement;
const modalTitle = document.getElementById("modal-title") as HTMLElement;
const modalYear = document.getElementById("modal-year") as HTMLElement;
const modalImage = document.getElementById("modal-image") as HTMLImageElement;
const modalDescription = document.getElementById("modal-description") as HTMLElement;

export function openModal(event: EventData): void {
  modalTitle.textContent = event.title;
  modalYear.textContent = event.year;
  modalImage.src = event.imageURL;
  modalDescription.textContent = event.description;
  modal.style.display = "flex";
}

export function initModal(): void {
  closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
}
