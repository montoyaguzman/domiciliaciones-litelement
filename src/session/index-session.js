import { LitElement, html } from '@polymer/lit-element'

import './sign-up.js'
import './login-comp.js'

class Sesion extends LitElement {
    
    static get properties() {
        return {
            sesion: { type: String }
        }
    }

    constructor() {
        super()
        this.sesion = 'index-session'
    }

    render() {
        return html`
            <h2>${this.sesion} works!</h2>
            <sign-up></sign-up>
            <login-comp></login-comp>
        `
    }

}

customElements.define('index-session', Sesion)