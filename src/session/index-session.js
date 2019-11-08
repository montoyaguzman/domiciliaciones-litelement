import { LitElement, html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import { SERVER, PORT } from '../../config/config.js'

import './sign-up.js'
import './login-comp.js'


class Sesion extends UtilComp {
    
    static get styles() {
        return [
            css`
            :host { 
                display: block;
            }
            `,
            super.styles
        ]
    }

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

            <button class="button is-primary">Primary3</button>

        `
    }

}

customElements.define('index-session', Sesion)