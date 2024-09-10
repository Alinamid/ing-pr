import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import '@lion/button/define';
import { property } from 'lit/decorators.js';
export class MyHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.showProfileDropdown = false;
        this.userProfile = {};
    }
    firstUpdated() {
        this._fetchProfile();
    }
    async _fetchProfile() {
        // pretand we have an api
        setTimeout(() => {
            this.userProfile = { username: 'JohnDoe', name: "John" };
        }, 1000);
    }
    _handleProfileClick() {
        this.showProfileDropdown = !this.showProfileDropdown;
    }
    _handleLogoutClick() {
        // it should be a redirect to login, but I have not implemented the routes
        // window.location.href = '/login';
        location.reload();
    }
    render() {
        return html `
      <header>
        <div class="title">My App</div>
        <div class="button-group">
          <lion-button @click=${this._handleProfileClick}>Profile</lion-button>
          <lion-button @click=${this._handleLogoutClick}>Logout</lion-button>
        </div>
        ${this.showProfileDropdown
            ? html `
              <div class="dropdown-menu">
                <p>Username: ${this.userProfile.username || 'Loading...'}</p>
                <p>Name: ${this.userProfile.name || 'Loading...'}</p>
              </div>
            `
            : ''}
      </header>
    `;
    }
}
MyHeader.styles = css `
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #ff5722;
      color: white;
      position: relative;
    }
    .button-group {
      display: flex;
      gap: 0.5rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .dropdown-menu {
      display: block;
      position: absolute;
      background: white;
      color: black;
      border: 1px solid #ddd;
      padding: 1rem;
      top: 60px;
      right: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  `;
__decorate([
    property({ type: Boolean })
], MyHeader.prototype, "showProfileDropdown", void 0);
__decorate([
    property({ type: Object })
], MyHeader.prototype, "userProfile", void 0);
customElements.define('my-header', MyHeader);
//# sourceMappingURL=my-header.js.map