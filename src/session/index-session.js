import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

import './sign-up.js'
import './login-comp.js'


class Sesion extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
            :host { 
                display: block;
            }
            `
        ]
    }

    static get properties() {
        return {
            // sesion: { type: String },
            sessionPage: { type: String }
        }
    }
      

    constructor() {
        super()
        // this.sesion = 'index-session'
        this.sessionPage = 'login'
    }

    render() {
        return html`
            <!-- <h2> ${this.sesion} </h2> -->
            ${this.sessionPage === 'login'
                ? html`<login-comp></login-comp>`
                : html`<sign-up></sign-up>`
            }
            

        `
    }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            // console.log(`hijo ${propName} changed. oldValue: ${oldValue}`)
        });
    }

}

customElements.define('index-session', Sesion)