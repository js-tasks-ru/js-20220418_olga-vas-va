export default class NotificationMessage {
  constructor(message = "", { duration = 20, type = 'success' } = {}) {
    this.duration = duration;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div class="notification ${type}" style="--value:${duration}ms">
          <div class="timer"></div>
          <div class="inner-wrapper">
            <div class="notification-header">${type}</div>
            <div class="notification-body">
            ${message}
          </div>
        </div>
    </div>
    `;
    
    this.element = wrapper.firstElementChild;
  }

  show(target = document.body) {
    if (Object.getPrototypeOf(this).activeInstance) {
      Object.getPrototypeOf(this).activeInstance.destroy();
    }

    Object.getPrototypeOf(this).activeInstance = this;

    setTimeout(() => {
      this.remove();
    }, this.duration);

    target.append(this.element);
  }

  destroy() {
    this.element.remove();
    Object.getPrototypeOf(this).activeInstance = undefined;
  }

  remove() {
    this.destroy();
  }
}
