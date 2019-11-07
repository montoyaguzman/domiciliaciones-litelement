import { LitElement, html } from '@polymer/lit-element'

class LoginComp extends LitElement {
    
    static get properties() {
        return {
            LoginComp: { type: String }
        }
    }

    constructor() {
        super()
        this.LoginComp = 'login-comp'
    }

    render() {
        return html`
            <h3>${this.LoginComp} works!</h3>
        `
    }

}

customElements.define('login-comp', LoginComp)