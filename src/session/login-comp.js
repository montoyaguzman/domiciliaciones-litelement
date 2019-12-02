import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import LoginServices from '../util/login-services.js';

class LoginComp extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // loginComp: { type: String }
            email: { type: String },
            password: { type: String, reflect: true },
            loginServices: { type: Object }
        }
    }

    constructor() {
        super()
        // this.loginComp = 'login-comp'
        this.email = ''
        this.password = ''
        this.loginServices = new LoginServices()
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // console.log('attribute change: ', name, newVal)
        super.attributeChangedCallback(name, oldVal, newVal)
    }

    render() {
        return html`
            <!-- <h3> ${this.LoginComp} </h3> -->
            <div class="card inMiddle">
                <h3>Login</h3>
                <div class="row">
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        .value=${this.email}
                        @change=${e => { this.email = e.currentTarget.value } }
                        placeholder="correo">
                </div>
                <div class="row">
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        .value=${this.password} 
                        @change=${e => { this.password = e.currentTarget.value } }
                        placeholder="contraseña">
                </div>
                <div class="row">
                    <button 
                        class="button-success pure-button"
                        @click=${this.login}>
                            Ingresar
                    </button>
                </div>
            </div>
        `
    }

    login() {
        let auth = {
            username: this.email,
            password: this.password
        }
        let body = { apiKeyToken: '' }
        this.loginServices.login(auth, body).then((response) => {
            console.log('response =>', response)
            if(response) {
                let event = new CustomEvent('log-in', {
                    detail: response,
                    bubbles: true,
                    composed: true 
                })
                this.dispatchEvent(event)
            } else {
                alert('error en login')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
        
    }

}

customElements.define('login-comp', LoginComp)