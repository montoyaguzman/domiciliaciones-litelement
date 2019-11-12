import { LitElement, html } from 'lit-element'

class UserForm extends LitElement {
    
    static get properties() {
        return {
            // userForm: { type: String }
        }
    }

    constructor() {
        super()
        // this.userForm = 'user-form'
    }

    render() {
        return html`
            <!-- <h3>${this.userForm} works!</h3> -->
            <div class="card">
                <h3>Registro de clientes</h3>
                <input type="text" id="name" name="name" placeholder="name">
                <input type="text" id="app" name="app" placeholder="app">
                <input type="text" id="apm" name="apm" placeholder="apm">
                <input type="text" id="cellphone" name="cellphone" placeholder="cellphone">
                <input type="text" id="account" name="account" placeholder="cuenta/tarjeta">

                <input type="text" id="user" name="user" placeholder="correo">
                <input type="password" id="password" name="password" placeholder="contraseña">

                <button @click=${this.saveUser}>Guardar</button>
            </div>
        `
    }

    saveUser() {

    }

}

customElements.define('user-form', UserForm)