import { html, fixture, expect } from '@open-wc/testing';
import './src/my-header.js';

describe('MyHeader', () => {
  it('renders the title and buttons', async () => {
    const el = await fixture(html`<my-header></my-header>`);
    expect(el.shadowRoot.querySelector('.title').textContent).toEqual('My App');
    expect(el.shadowRoot.querySelector('lion-button')).toBeTruthy();
  });

  it('toggles profile dropdown', async () => {
    const el = await fixture(html`<my-header></my-header>`);
    expect(el.shadowRoot.querySelector('.dropdown-menu')).toBeFalsy();

    el.shadowRoot.querySelector('lion-button').click();
    await el.updateComplete;

    expect(el.shadowRoot.querySelector('.dropdown-menu')).toBeTruthy();
  });

  it('handles profile and logout actions', async () => {
    const el = await fixture(html`<my-header></my-header>`);

    el._fetchProfile = () => {
      el.userProfile = { username: 'JohnDoe', name: 'John' };
      el.requestUpdate();
    };
    await el._fetchProfile();
    
    el.shadowRoot.querySelector('lion-button').click();
    await el.updateComplete;
    
    expect(el.shadowRoot.querySelector('.dropdown-menu').textContent).toContain('Username: JohnDoe');
    expect(el.shadowRoot.querySelector('.dropdown-menu').textContent).toContain('Name: John');
    
    jest.spyOn(window, 'location', 'get').mockImplementation(() => ({
      reload: jest.fn()
    }));
    el._handleLogoutClick();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
