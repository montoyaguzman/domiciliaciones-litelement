import { LitElement, html } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import * as services from '../util/services.js'

class LoginComp extends UtilComp {
    
    static get properties() {
        return {
            // loginComp: { type: String }
            user: { type: String },
            password: { type: String, reflect: true }
        }
    }

    constructor() {
        super()
        // this.loginComp = 'login-comp'
        this.user = ''
        this.password = ''
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // console.log('attribute change: ', name, newVal)
        super.attributeChangedCallback(name, oldVal, newVal)
    }

    render() {
        return html`
            <!-- <h3> ${this.LoginComp} </h3> -->
            <div class="card">
                <h3>Login</h3>
                <input 
                    type="text" 
                    id="user" 
                    name="user" 
                    .value=${this.user}
                    @change=${e => { this.user = e.currentTarget.value } }
                    placeholder="correo">
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    .value=${this.password} 
                    @change=${e => { this.password = e.currentTarget.value } }
                    placeholder="contraseña">
                <button @click=${this.login}>login</button>
            </div>
        `
    }

    login() {
        let user = {
            user: this.user,
            password: this.password
        }
        services.execPost('login', null, user).then((response) => {
            console.log('response: ', response)
            if(response && response.code === 200) {
                let event = new CustomEvent('login-updated', {
                    detail: response,
                    bubbles: true,
                    composed: true 
                })
                this.dispatchEvent(event)
            } else {
                alert('error en login')
            }
        })
        
    }

}

customElements.define('login-comp', LoginComp)