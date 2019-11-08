import { LitElement, html } from 'lit-element'

class SignUp extends LitElement {
    
    static get properties() {
        return {
            signUp: { type: String }
        }
    }

    constructor() {
        super()
        this.signUp = 'sign-up'
    }

    render() {
        return html`
            <div class="card">
                <h3>Registro</h3>
                <input type="text" id="name" name="name" placeholder="name">
                <input type="text" id="app" name="app" placeholder="app">
                <input type="text" id="apm" name="apm" placeholder="apm">
                <input type="text" id="cellphone" name="cellphone" placeholder="cellphone">
                <input type="text" id="user" name="user" placeholder="correo">
                <input type="password" id="password" name="password" placeholder="contraseña">
            </div>
        `
    }

}

customElements.define('sign-up', SignUp)