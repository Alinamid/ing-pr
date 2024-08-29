import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-header')
class MyHeader extends LitElement {
  static styles = css`
    header {
      background-color: #6200ea;
      color: white;
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`
      <header>
        <h1>My Application</h1>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-header': MyHeader;
  }
}
