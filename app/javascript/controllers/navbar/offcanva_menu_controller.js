import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar--offcanva-menu"
export default class extends Controller {
  static targets = ["menu", "overlay"];

  connect() {

    console.log("hello from offcanva_menu_controller.js in body");
    this.menuTarget.classList.add('-translate-x-full'); // Assure que le menu est fermé au chargement
  }

  open() {
    this.menuTarget.classList.remove('translate-x-full');
    this.menuTarget.classList.add('translate-x-0');
    this.overlayTarget.classList.remove('hidden');
  }

  close() {
    this.menuTarget.classList.remove('translate-x-0');
    this.menuTarget.classList.add('translate-x-full');
    this.overlayTarget.classList.add('hidden');
  }
}
