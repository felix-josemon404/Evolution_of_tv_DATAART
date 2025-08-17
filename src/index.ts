import { fetchEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { initModal } from "./modal.js";
import { initThemeToggle } from "./theme.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const events = await fetchEvents();
    renderEvents(events);
  } catch (error) {
    console.error("Error loading events:", error);
  }

  initModal();
  initThemeToggle();
});
