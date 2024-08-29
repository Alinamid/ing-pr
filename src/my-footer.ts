import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-footer')
class MyFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #6200ea;
      color: white;
      padding: 0.5rem;
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-footer': MyFooter;
  }
}
