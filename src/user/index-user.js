import { LitElement, html } from '@polymer/lit-element'

import './user-form.js'
import './user-table.js'

class User extends LitElement {
    
    static get properties() {
        return {
            user: { type: String }
        }
    }

    constructor() {
        super()
        this.user = 'index-user'
    }

    render() {
        return html`
            <h1>${this.user} works!</h1>
            <user-form></user-form>
            <user-table></user-table>
        `
    }

}

customElements.define('index-user', User)