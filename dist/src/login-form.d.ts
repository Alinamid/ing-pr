import { LitElement } from 'lit';
import '@lion/input/define';
import '@lion/button/define';
export declare class LoginForm extends LitElement {
    static styles: import("lit").CSSResult;
    username: string;
    password: string;
    passwordError: string;
    private _validatePassword;
    private _handleInput;
    private _handleSubmit;
    render(): import("lit-html").TemplateResult<1>;
}
