import { html, fixture, expect } from '@open-wc/testing';
import './src/welcome-page.js';

describe('WelcomePage', () => {
  it('renders with the correct username', async () => {
    const el = await fixture(html`<welcome-page username="JohnDoe"></welcome-page>`);
    expect(el.shadowRoot.querySelector('h1').textContent).toEqual('Welcome, JohnDoe!');
  });
});
