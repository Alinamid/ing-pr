import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class WelcomePage extends LitElement {
  @property({ type: String }) username = '';

  static styles = css`
    .welcome-container {
      max-width: 400px;
      margin: auto;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="welcome-container">
        <h1>Welcome, ${this.username}!</h1>
        <p>You have successfully logged in.</p>
      </div>
    `;
  }
}

customElements.define('welcome-page', WelcomePage);
