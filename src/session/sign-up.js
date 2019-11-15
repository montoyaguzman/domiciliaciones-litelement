import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import * as services from '../util/services.js'

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
            user: { type: Object }
        }
    }

    constructor() {
        super()
        // this.signUp = 'sign-up',
        this.user = {
            name: '',
            app: '',
            apm: '',
            cellphone: '',
            email: '',
            password: '',
        }
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
                        placeholder="name"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="app" 
                        name="app" 
                        .value=${this.user.app} 
                        @change=${e => { this.user.app = e.currentTarget.value } }
                        placeholder="app">
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="apm" 
                        name="apm" 
                        .value=${this.user.apm} 
                        @change=${e => { this.user.apm = e.currentTarget.value } }
                        placeholder="apm"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="cellphone" 
                        name="cellphone" 
                        .value=${this.user.cellphone} 
                        @change=${e => { this.user.cellphone = e.currentTarget.value } }
                        placeholder="cellphone"
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
                        @click=${this.registra}>
                            Registrar
                    </button>
                </div>
            </div>
        `
    }

    cleanForm() {
        this.shadowRoot.getElementById('name').value = ''
        this.shadowRoot.getElementById('app').value = ''
        this.shadowRoot.getElementById('apm').value = ''
        this.shadowRoot.getElementById('cellphone').value = ''
        this.shadowRoot.getElementById('password').value = ''
    }

    cleanUserObj() {
        this.user = {
            name: '',
            app: '',
            apm: '',
            cellphone: '',
            email: '',
            password: '',
        }
    }

    registra() {
        
        services.execPost('signup', null, this.user).then((response) => {
            if(response && response.code === 200) {
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