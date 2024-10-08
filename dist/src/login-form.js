import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@lion/input/define';
import '@lion/button/define';
export class LoginForm extends LitElement {
    constructor() {
        super(...arguments);
        this.username = '';
        this.password = '';
        this.passwordError = '';
    }
    _validatePassword(value) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        if (value.length < minLength || !hasUppercase || !hasSpecialChar) {
            this.passwordError = 'Password must be at least 8 characters long, include an uppercase letter, and a special character.';
            return false;
        }
        this.passwordError = '';
        return true;
    }
    _handleInput(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        if (name === 'username') {
            this.username = value;
        }
        else if (name === 'password') {
            this.password = value;
            this._validatePassword(value);
        }
    }
    _handleSubmit(e) {
        e.preventDefault();
        // without server validation I will just display them in console
        if (this._validatePassword(this.password)) {
            console.log(`Your Username is: ${this.username}`);
            console.log(`Your Password is: ${this.password}`);
            const main = document.querySelector('main');
            if (main) {
                main.innerHTML = '';
                const welcomePage = document.createElement('welcome-page');
                welcomePage.username = this.username;
                main.appendChild(welcomePage);
            }
        }
    }
    render() {
        return html `
      <div class="login-container">
        <h2>Login</h2>
        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="username">Username</label>
            <lion-input
              type="text"
              id="username"
              name="username"
              .value=${this.username}
              @input=${this._handleInput}
              required
              placeholder="Enter your username"
            ></lion-input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <lion-input
              type="password"
              id="password"
              name="password"
              .value=${this.password}
              @input=${this._handleInput}
              required
              placeholder="Enter your password"
            ></lion-input>
            ${this.passwordError ? html `<div class="error">${this.passwordError}</div>` : ''}
            </div>
          <button type="submit">Login</button>
        </form>
      </div>
    `;
    }
}
LoginForm.styles = css `
    .login-container {
      max-width: 400px;
      margin: auto;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .error {
      color: red;
      font-size: 0.875rem;
    }
  `;
__decorate([
    property({ type: String })
], LoginForm.prototype, "username", void 0);
__decorate([
    property({ type: String })
], LoginForm.prototype, "password", void 0);
__decorate([
    property({ type: String })
], LoginForm.prototype, "passwordError", void 0);
customElements.define('login-form', LoginForm);
//# sourceMappingURL=login-form.js.map