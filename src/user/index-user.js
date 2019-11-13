import { LitElement, html } from 'lit-element'

class User extends LitElement {
    
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
            <div class="card">
                Datos del usuario
            </div>
            <div class="card">
                Catalogo de domiciliaciones, cards
            </div>
            <!-- <user-form></user-form> -->
            <!-- <user-table></user-table> -->
        `
    }

}

customElements.define('index-user', User)