import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dialog"
export default class extends Controller {
  static targets = ["backdrop", "dialog"]

  connect() {
    this.fadeIn();
  }

  fadeIn() {
    this.backdropTarget.classList.remove('hidden');
    this.dialogTarget.classList.remove('hidden');
    this.backdropTarget.classList.add('bg-opacity-50');
    this.dialogTarget.classList.add('scale-100');
  }

  close() {
    this.backdropTarget.classList.add('hidden');
    this.dialogTarget.classList.add('hidden');
  }
}
