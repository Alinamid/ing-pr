import { LitElement } from 'lit';
import '@lion/button/define';
export declare class MyHeader extends LitElement {
    showProfileDropdown: boolean;
    userProfile: {
        username?: string;
        name?: string;
    };
    static styles: import("lit").CSSResult;
    firstUpdated(): void;
    private _fetchProfile;
    private _handleProfileClick;
    private _handleLogoutClick;
    render(): import("lit-html").TemplateResult<1>;
}
