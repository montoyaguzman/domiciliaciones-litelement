import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import LoginServices from '../util/login-services.js';

class SignUp extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // signUp: { type: String },
            user: { type: Object },
            loginServices: { type: Object }
        }
    }

    constructor() {
        super()
        // this.signUp = 'sign-up',
        this.user = {
            name: '',
            lastName: '',
            cellphone: '',
            email: '',
            password: '',
        }
        this.loginServices = new LoginServices()
    }

    render() {
        return html`
            <div class="card inMiddle">
                <h3>Registro</h3>
                <div class="row">
                    <input 
                        type="text" 
                        id="name" name="name" 
                        .value=${this.user.name} 
                        @change=${e => { this.user.name = e.currentTarget.value } }
                        placeholder="nombre"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        .value=${this.user.lastName} 
                        @change=${e => { this.user.lastName = e.currentTarget.value } }
                        placeholder="apellidos">
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="cellphone" 
                        name="cellphone" 
                        .value=${this.user.cellphone} 
                        @change=${e => { this.user.cellphone = e.currentTarget.value } }
                        placeholder="celular"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        .value=${this.user.email} 
                        @change=${e => { this.user.email = e.currentTarget.value } }
                        placeholder="correo"
                    >
                </div>
                <div class="row">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        .value=${this.user.password} 
                        @change=${e => { this.user.password = e.currentTarget.value } }
                        placeholder="contraseña"
                    >
                </div>
                <div class="row">
                    <button 
                        class="button-success pure-button"
                        @click=${this.signup}>
                            Registrar
                    </button>
                </div>
            </div>
        `
    }

    cleanForm() {
        this.shadowRoot.getElementById('name').value = ''
        this.shadowRoot.getElementById('lastName').value = ''
        this.shadowRoot.getElementById('cellphone').value = ''
        this.shadowRoot.getElementById('email').value = ''
        this.shadowRoot.getElementById('password').value = ''
    }

    cleanUserObj() {
        this.user = {
            name: '',
            lastName: '',
            cellphone: '',
            email: '',
            password: '',
        }
    }

    signup() {             
        let params = undefined
        this.loginServices.signup(params, this.user).then((response) => {
            if(response) {
                alert('registro exitoso!')
                this.cleanUserObj()
                this.cleanForm()
            } else {
                alert('error en registro')
            }
        })
    }

}

customElements.define('sign-up', SignUp)