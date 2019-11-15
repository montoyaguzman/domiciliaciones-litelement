import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

class User extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    
    static get properties() {
        return {
            // user: { type: String }
        }
    }

    constructor() {
        super()
        // this.user = 'index-user'
    }

    render() {
        return html`
            <!-- <h1>${this.user} works!</h1> -->
            <div class="card inComplete">
                Datos del usuario
            </div>
            <div class="card inComplete">
                Catalogo de domiciliaciones, cards
            </div>
            <!-- <user-form></user-form> -->
            <!-- <user-table></user-table> -->
        `
    }

}

customElements.define('index-user', User)