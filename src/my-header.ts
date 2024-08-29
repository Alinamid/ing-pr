import { LitElement, html, css } from 'lit';
import '@lion/button/define';

export class MyHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #ff5722;
      color: white;
    }
    .button-group {
      display: flex;
      gap: 0.5rem;
    }
    .title {
      font-size: 1.5rem;
    }
  `;

  private _handleProfileClick() {
    console.log('Profile clicked');
  }

  private _handleLogoutClick() {
    console.log('Logout clicked');
  }

  render() {
    return html`
      <header>
        <div class="title">My App</div>
        <div class="button-group">
          <lion-button @click=${this._handleProfileClick}>Profile</lion-button>
          <lion-button @click=${this._handleLogoutClick}>Logout</lion-button>
        </div>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
