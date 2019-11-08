import { LitElement, html } from 'lit-element'

class LoginComp extends LitElement {
    
    static get properties() {
        return {
            // LoginComp: { type: String }
        }
    }

    constructor() {
        super()
        // this.LoginComp = 'login-comp'
    }

    render() {
        return html`
            <!-- <h3> ${this.LoginComp} </h3> -->
            <div class="card">
                <h3>Login</h3>
                <input type="text" id="user" name="user" placeholder="correo">
                <input type="password" id="password" name="password" placeholder="contraseña">
            </div>
        `
    }

}

customElements.define('login-comp', LoginComp)