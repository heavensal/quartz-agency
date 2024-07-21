import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="flash"
export default class extends Controller {
  static targets = ["notice"]

  connect() {
    this.showNotice();
  }

  showNotice() {
    this.noticeTarget.classList.remove('opacity-0');
    this.noticeTarget.classList.add('opacity-100');

    setTimeout(() => {
      this.fadeNotice();
    }, 5000);
  }

  fadeNotice() {
    this.noticeTarget.classList.remove('opacity-100');
    this.noticeTarget.classList.add('opacity-0');
  }

}
